import React from 'react';
import styled from 'styled-components';
import { AppContext } from './../App/AppProvider';

import CoinImage from './../Shared/CoinImage';
import { Tile } from './../Shared/Tile';

const SpotLightName = styled.h2`
  margin: 0 0 10px;
  text-align: center;
`;

export default function() {
  return (
    <AppContext.Consumer>
      {({ currentFavorite, coinList }) =>
        <Tile grid>
          <SpotLightName>{coinList[currentFavorite].CoinName}</SpotLightName>
          <CoinImage coin={coinList[currentFavorite]} style={{ width: '95%' }}/>
        </Tile>
      }
    </AppContext.Consumer>
  );
}
