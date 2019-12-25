import React from 'react';

import Loader from './../Shared/Loader';
import { AppContext } from './../App/AppProvider';

export default function(props) {
  return (
    <AppContext.Consumer>
      {({ coinList, prices, firstVisit }) => {
        if (!coinList) {
          return <Loader global/>;
        }
        if (!firstVisit && !prices) {
          return <Loader global/>;
        }
        return <div>{props.children}</div>;
      }}
    </AppContext.Consumer>
  );
}
