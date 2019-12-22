import React from 'react';
import styled from 'styled-components';
import fuzzy from 'fuzzy';
import _ from 'lodash';

import { AppContext } from './../App/AppProvider';

import { backgroundColor2, fontSize2 } from './../Shared/Styles';

const SearchGrid = styled.div`
  display: grid;
  grid-template-columns: 150px 1fr;
`;

const SearchInput = styled.input`
  ${backgroundColor2}
  ${fontSize2}
  border: 1px solid;
  color: #1153c9;
  height: 20px;
  padding: 5px;
  place-self: center left;
`;

const handleFilter = _.debounce((value, setFilteredCoins, coinList) => {
  if (!value) { return setFilteredCoins(null); }

  const symbols = Object.keys(coinList);
  const names = symbols.map(symbol => coinList[symbol].CoinName);
  const stringsToSearch = symbols.concat(names);
  const fuzzyResults = fuzzy.filter(value, stringsToSearch, {}).map(result => result.string);

  setFilteredCoins(_.pickBy(coinList, (result, symKey) => _.includes(fuzzyResults, symKey) || _.includes(fuzzyResults, result.CoinName)));
}, 500);

const filterCoins = (e , setFilteredCoins, coinList) => handleFilter(e.target.value, setFilteredCoins, coinList);

export default function() {
  return (
    <AppContext.Consumer>
      {({ setFilteredCoins, coinList }) =>
        <SearchGrid>
          <h3>Search coins:</h3>
          <SearchInput onKeyUp={(e) => filterCoins(e, setFilteredCoins, coinList)}/>
        </SearchGrid>
      }
    </AppContext.Consumer>
  );
}
