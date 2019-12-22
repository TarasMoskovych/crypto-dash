import React from 'react';

import CoinGrid from './CoinGrid';
import ConfirmButton from './ConfirmButton';
import Page from './../Shared/Page';
import Search from './Search';
import Welcome from './Welcome';

export default function() {
  return (
    <Page name="settings">
      <Welcome/>
      <CoinGrid topSection/>
      <ConfirmButton/>
      <Search/>
      <CoinGrid/>
    </Page>
  );
}
