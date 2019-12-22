import React from 'react';
import styled from 'styled-components';

import { DeletableTile } from '../Shared/Tile';
import { LeftSelf, RightSelf } from '../Shared/GridAlignment';

export const CoinHeaderGrid = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 0.5fr;
  margin-bottom: 20px;
`;

const DeleteIcon = styled(RightSelf)`
  display: none;

  ${DeletableTile}:hover & {
    color: red;
    display: block;
  }
`;

export default function({ name, symbol, topSection }) {
  return (
    <CoinHeaderGrid>
      <LeftSelf>{name}</LeftSelf>
      {topSection ? (
        <DeleteIcon>X</DeleteIcon>
      ) : (
        <RightSelf>{symbol}</RightSelf>
      )}
    </CoinHeaderGrid>
  );
}
