import React from 'react';
import styled, { css } from 'styled-components';
import { AppContext } from './../App/AppProvider';

import { SelectableTile } from './../Shared/Tile';
import { LeftSelf, RightSelf } from './../Shared/GridAlignment';
import { CoinHeaderGrid } from './../Settings/CoinHeaderGrid';

import { fontSize3, fontSizeBig, greenBoxShadow } from './../Shared/Styles';

const numberFormat = number => +(number + '').slice(0, 7);

const PriceTileStyled = styled(SelectableTile)`
  ${props => props.compact && css `
    ${fontSize3}
    display: grid;
    grid-gap: 5px;
    grid-template-columns: repeat(3, 1fr);
  `}

  ${props => props.currentFavorite && css `
    ${greenBoxShadow}
    pointer-events: none;
  `}
`;

const TickerPrice = styled.div`
  ${fontSizeBig}
`;

const ChangePercentStyled = styled.div`
  color: green;

  ${props => props.red && css`
    color: red;
  `}
`;

function ChangePercent({ data }) {
  return (
    <RightSelf>
      <ChangePercentStyled red={data.CHANGEPCT24HOUR < 0}>
        {numberFormat(data.CHANGEPCT24HOUR)}
      </ChangePercentStyled>
    </RightSelf>
  );
}

function PriceTileCompact({ symbol, data, currentFavorite, setCurrentFavorite }) {
  return (
    <PriceTileStyled onClick={setCurrentFavorite} compact currentFavorite={currentFavorite}>
      <LeftSelf>
        <div>{symbol}</div>
        <ChangePercent data={data}/>
      </LeftSelf>
      <TickerPrice>
        <div>
          ${numberFormat(data.PRICE)}
        </div>
      </TickerPrice>
    </PriceTileStyled>
  );
}

function PriceTile({ symbol, data, currentFavorite, setCurrentFavorite }) {
  return (
    <PriceTileStyled onClick={setCurrentFavorite} currentFavorite={currentFavorite}>
      <CoinHeaderGrid>
        <LeftSelf>{symbol}</LeftSelf>
        <ChangePercent data={data}/>
      </CoinHeaderGrid>
      <TickerPrice>
        ${numberFormat(data.PRICE)}
      </TickerPrice>
    </PriceTileStyled>
  );
}

export default function({ price, index }) {
  const symbol = Object.keys(price)[0];
  const data = price[symbol]['USD'];
  const Tile = index < 10 ? PriceTile : PriceTileCompact;

  return (
    <AppContext.Consumer>
      {({ currentFavorite, setCurrentFavorite }) => (
        <Tile
          symbol={symbol}
          data={data}
          compact={index >= 5}
          currentFavorite={currentFavorite === symbol}
          setCurrentFavorite={setCurrentFavorite.bind(null, symbol)}
        />
      )}
    </AppContext.Consumer>
  );
}
