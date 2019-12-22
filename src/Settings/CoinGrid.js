import React from 'react';
import styled from 'styled-components';

import { AppContext } from './../App/AppProvider';
import CoinTile from './CoinTile';

const CoinGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-gap: 15px;
  margin-top: 20px;
`;

function getCoins(list, topSection, favorites) {
  return topSection ? favorites : Object.keys(list).slice(0, 200);
}

export default function({ topSection }) {
  return (
    <AppContext.Consumer>
      {({ coinList, favorites }) => (
        <CoinGridStyled>
          {getCoins(coinList, topSection, favorites).map((coinKey, idx) => (
            <CoinTile key={idx} coinKey={coinKey} topSection={topSection}/>
          ))}
        </CoinGridStyled>
      )}
    </AppContext.Consumer>
  );
}
