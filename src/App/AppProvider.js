import React, { Component, createContext } from 'react';
import _ from 'lodash';

const cc = require('cryptocompare');
const MAX_FAVORITES = 20;

export const AppContext = createContext();

export class AppProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 'dashboard',
      favorites: [],
      ...this.savedSettings(),

      setPage: this.setPage.bind(this),
      confirmFavorites: this.confirmFavorites.bind(this),
      addCoin: this.addCoin.bind(this),
      removeCoin: this.removeCoin.bind(this),
      isInFavorites: this.isInFavorites.bind(this),
      setFilteredCoins: this.setFilteredCoins.bind(this)
    };
  }

  componentDidMount() {
    this._fetchCoins();
    this._fetchPrices();
  }

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }

  savedSettings() {
    const cryptoDashData = JSON.parse(window.localStorage.getItem('cryptoDash'));

    if (!cryptoDashData || !cryptoDashData.favorites) {
      return { page: 'settings', firstVisit: true };
    }

    return { favorites: cryptoDashData.favorites };
  }

  confirmFavorites() {
    this.setState({ firstVisit: false, page: 'dashboard' }, this._fetchPrices.bind(this));

    window.localStorage.setItem('cryptoDash', JSON.stringify({ favorites: this.state.favorites }));
  }

  setPage(page) {
    this.setState({ page });
  }

  addCoin(key) {
    const favorites = [...this.state.favorites];

    if (favorites.length < MAX_FAVORITES) {
      favorites.push(key);
      this.setState({ favorites });
    }
  }

  removeCoin(key) {
    const favorites = [...this.state.favorites];

    this.setState({ favorites: _.pull(favorites, key) });
  }

  isInFavorites(key) {
    return _.includes(this.state.favorites, key);
  }

  setFilteredCoins(filteredCoins) {
    this.setState({ filteredCoins });
  }

  async _fetchCoins() {
    this.setState({ coinList: (await cc.coinList()).Data });
  }

  async _fetchPrices() {
    if (this.state.firstVisit) { return; }

    this.setState({ prices: await this._prices() });
  }

  async _prices() {
    const data = [];

    this.state.favorites.forEach(async item => {
      try {
        data.push(await cc.priceFull(item, 'USD'));
      } catch (e) {
        console.warn(e);
      }
    });

    return data;
  }
}
