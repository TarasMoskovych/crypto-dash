import React from 'react';
import ReactHighCharts from 'react-highcharts';
import { AppContext } from './../App/AppProvider';

import highChartsConfig from './HighChartsConfig';
import highChartsTheme from './HighChartsTheme';
import ChartSelect from './ChartSelect';
import { Tile } from './../Shared/Tile';
import Loader from './../Shared/Loader';

ReactHighCharts.Highcharts.setOptions(highChartsTheme);

export default function() {
  return (
    <AppContext.Consumer>
      {({ currentFavorite, historical, changeChartOption }) =>
        <Tile left relative>
          <ChartSelect defaultValue={'months'} onChange={e => changeChartOption(e.target.value)}>
            <option value={'days'}>Days</option>
            <option value={'weeks'}>Weeks</option>
            <option value={'months'}>Months</option>
          </ChartSelect>
          {historical
            ? <ReactHighCharts config={highChartsConfig(currentFavorite, historical)}/>
            : <Loader/>
          }
        </Tile>
      }
    </AppContext.Consumer>
  );
}
