import React from 'react';
import styled from 'styled-components';
import { AppContext } from './../App/AppProvider';
import PriceTile from './PriceTile';

const PriceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: 15px;
  margin-top: 40px;
`;

export default function() {
  return (
    <AppContext.Consumer>
      {({ prices }) => (
        <PriceGrid>
          {prices
            .filter(price => {
              const symbol = Object.keys(price)[0];
              return price[symbol] && price[symbol]['USD'];
            })
            .map((price, index) => (
              <PriceTile key={index} price={price} index={index}/>)
            )}
        </PriceGrid>
      )}
    </AppContext.Consumer>
  );
}
