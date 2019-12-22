import React from 'react';
import { AppContext } from './../App/AppProvider';

import { SelectableTile, DisabledTile, DeletableTile } from '../Shared/Tile';
import CoinImage from './../Shared/CoinImage';
import CoinHeaderGrid from './CoinHeaderGrid';

const coinHandler = (topSection, key, addCoin, removeCoin) => topSection ? removeCoin(key) : addCoin(key);

export default function({ coinKey, topSection }) {
  return (
    <AppContext.Consumer>
      {({ coinList, addCoin, removeCoin, isInFavorites }) => {
        const Tile = !topSection && isInFavorites(coinKey) ? DisabledTile : (topSection ? DeletableTile : SelectableTile);
        const coin = coinList[coinKey];

        return (
          <Tile onClick={coinHandler.bind(null, topSection, coinKey, addCoin, removeCoin)}>
            <CoinHeaderGrid name={coin.CoinName} symbol={coin.Symbol} topSection={topSection}/>
            <CoinImage coin={coin} style={ { width: '80%' } }/>
          </Tile>
        )
      }}
    </AppContext.Consumer>
  );
}
