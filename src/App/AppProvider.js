import React, { Component, createContext } from 'react';
import _ from 'lodash';
import moment from 'moment';

const cc = require('cryptocompare');
const MAX_FAVORITES = 20;
const TIME_UNITS = 7;

export const AppContext = createContext();

export class AppProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 'dashboard',
      favorites: ['BTC', 'XRP', 'BCH', 'ETN', 'LTC'],
      timeInterval: 'months',
      ...this.savedSettings(),

      setPage: this.setPage.bind(this),
      confirmFavorites: this.confirmFavorites.bind(this),
      addCoin: this.addCoin.bind(this),
      removeCoin: this.removeCoin.bind(this),
      isInFavorites: this.isInFavorites.bind(this),
      setFilteredCoins: this.setFilteredCoins.bind(this),
      setCurrentFavorite: this.setCurrentFavorite.bind(this),
      changeChartOption: this.changeChartOption.bind(this)
    };
  }

  componentDidMount() {
    this._fetchCoins();
    this._fetchPrices();
    this._fetchHistorical();
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

    const { favorites, currentFavorite } = cryptoDashData;
    return { favorites, currentFavorite };
  }

  confirmFavorites() {
    const currentFavorite = this.state.favorites[0];

    this.setState({ firstVisit: false, page: 'dashboard', currentFavorite }, this._fetchPrices.bind(this));

    window.localStorage.setItem('cryptoDash', JSON.stringify({ favorites: this.state.favorites, currentFavorite }));
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

  setCurrentFavorite(symbol) {
    this.setState({ currentFavorite: symbol, historical: null }, this._fetchHistorical.bind(this));

    window.localStorage.setItem('cryptoDash', JSON.stringify({
      ...JSON.parse(window.localStorage.getItem('cryptoDash')), currentFavorite: symbol
    }))
  }

  changeChartOption(timeInterval) {
    this.setState({ timeInterval, historical: null }, this._fetchHistorical.bind(this));
  }

  async _fetchCoins() {
    this.setState({ coinList: (await cc.coinList()).Data });
  }

  async _fetchPrices() {
    this.setState({ prices: await this._prices() });
  }

  async _prices() {
    const data = [];

    for (const item of this.state.favorites) {
      try {
        data.push(await cc.priceFull(item, 'USD'));
      } catch (e) {
        console.warn(e);
      }
    }

    return data;
  }

  async _fetchHistorical() {
    this.setState({
      historical: [
        {
          name: this.state.currentFavorite,
          data: (await this._historical()).map((item, idx) => {
            return [
              moment().subtract({ [this.state.timeInterval]: TIME_UNITS - idx }).valueOf(),
              item.USD
            ]
          })
        }
      ]
    });
  }

  async _historical() {
    const promises = [];

    for (let unit = TIME_UNITS; unit > 0; unit--) {
      promises.push(
        cc.priceHistorical(
          this.state.currentFavorite,
          ['USD'],
          moment().subtract({ [this.state.timeInterval]: unit }).toDate()
        )
      );
    }

    return Promise.all(promises);
  }
}
