import React from 'react';
import styled from 'styled-components';

import { DeletableTile } from '../Shared/Tile';

export const CoinHeaderGrid = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 0.5fr;
  margin-bottom: 20px;
`;

export const CoinName = styled.div`
  justify-self: left;
`;

export const CoinSymbol = styled.div`
  justify-self: right;
`;

const DeleteIcon = styled(CoinSymbol)`
  display: none;

  ${DeletableTile}:hover & {
    color: red;
    display: block;
  }
`;

export default function({ name, symbol, topSection }) {
  return (
    <CoinHeaderGrid>
      <CoinName>{name}</CoinName>
      {topSection ? (
        <DeleteIcon>X</DeleteIcon>
      ) : (
        <CoinSymbol>{symbol}</CoinSymbol>
      )}
    </CoinHeaderGrid>
  );
}
