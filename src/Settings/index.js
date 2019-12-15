import React from 'react';

import CoinGrid from './CoinGrid';
import ConfirmButton from './ConfirmButton';
import Page from './../Shared/Page';
import Welcome from './Welcome';

export default function() {
  return (
    <Page name="settings">
      <Welcome/>
      <ConfirmButton/>
      <CoinGrid/>
    </Page>
  );
}
