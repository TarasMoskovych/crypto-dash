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
      isInFavorites: this.isInFavorites.bind(this)
    };
  }

  componentDidMount() {
    this._fetchCoins();
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

    return { page: 'settings', favorites: cryptoDashData.favorites };
  }

  confirmFavorites() {
    this.setState({
      firstVisit: false,
      page: 'dashboard'
    });

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

  async _fetchCoins() {
    this.setState({ coinList: (await cc.coinList()).Data });
  }
}
