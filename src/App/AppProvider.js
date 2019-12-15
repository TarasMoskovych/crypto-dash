import React, { Component, createContext } from 'react';

const cc = require('cryptocompare');

export const AppContext = createContext();

export class AppProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 'dashboard',
      ...this.savedSettings(),
      setPage: this.setPage.bind(this),
      confirmFavorites: this.confirmFavorites.bind(this)
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

    if (!cryptoDashData) {
      return { page: 'settings', firstVisit: true };
    }

    return {};
  }

  confirmFavorites() {
    this.setState({
      firstVisit: false,
      page: 'dashboard'
    });

    window.localStorage.setItem('cryptoDash', JSON.stringify({
      test: 'Hello'
    }))
  }

  setPage(page) {
    this.setState({ page });
  }

  async _fetchCoins() {
    this.setState({ coinList: (await cc.coinList()).Data });
  }
}
