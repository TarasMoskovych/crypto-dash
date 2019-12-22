import React, { Component } from 'react';

import { AppProvider } from './AppProvider';
import AppLayout from './AppLayout';
import AppBar from './AppBar';
import Dashboard from './../Dashboard';
import Content from './../Shared/Content';
import Settings from '../Settings';

import './App.css';

class App extends Component {
  render() {
    return (
      <AppLayout>
        <AppProvider>
          <AppBar/>
          <Content>
            <Dashboard/>
            <Settings/>
          </Content>
        </AppProvider>
      </AppLayout>
    );
  }
}

export default App;
