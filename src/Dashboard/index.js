import React from 'react';
import styled from 'styled-components';

import PriceChart from './PriceChart';
import PriceGrid from './PriceGrid';
import CoinSpotlight from './CoinSpotlight';
import Page from './../Shared/Page';

const ChartGrid = styled.div`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: 1fr 3fr;
  margin-top: 20px;

  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
`;

export default function() {
  return (
    <Page name="dashboard">
      <PriceGrid/>
      <ChartGrid>
        <CoinSpotlight/>
        <PriceChart/>
      </ChartGrid>
    </Page>
  );
}
