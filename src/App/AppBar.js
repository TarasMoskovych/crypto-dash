import React from 'react';
import styled, { css } from 'styled-components';
import SwitcherEl from './../Shared/Switcher';

import { AppContext } from './AppProvider';

const Logo = styled.div`
  font-size: 1.5em;
`;

const Bar = styled.div`
  align-items: center;
  display: grid;
  grid-template-columns: 180px auto 100px 80px 50px;
  margin-bottom: 40px;
`;

const ControlButttonEl = styled.div`
  cursor: pointer;

  ${props => props.active && css`
    text-shadow: 0px 0px 60px #03ff03;
  `}
`;

function toTitleCase(text) {
  return text.charAt(0).toUpperCase() + text.substr(1);
}

function ControlButton({ name }) {
  return (
    <AppContext.Consumer>
      {({ page, setPage }) => (
        <ControlButttonEl active={page === name} onClick={() => setPage(name)}>
          { toTitleCase(name) }
        </ControlButttonEl>
      )}
    </AppContext.Consumer>
  );
}

function Switcher() {
  return (
    <AppContext.Consumer>
      {({ theme, changeTheme }) => (
        <SwitcherEl
          defaultChecked={theme === 'dark'}
          id="switch"
          onChange={e => changeTheme(e.target.checked)}
        />
      )}
    </AppContext.Consumer>
  );
}

export default function() {
  return (
    <Bar>
      <Logo>CryptoDash</Logo>
      <div />
      <ControlButton active name="dashboard" />
      <ControlButton name="settings" />
      <Switcher/>
    </Bar>
  );
};
