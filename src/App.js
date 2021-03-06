import React, { Component } from 'react';
import BridgeMonitor from './components/BridgeMonitor';

import './styles/styles.css';
import './styles/tab-styles.css';
import 'react-table/react-table.css';
import 'react-tabs/style/react-tabs.css';

import Web3 from 'web3';

import Web3Provider from 'web3-react'
import { Connectors } from 'web3-react'
const { InjectedConnector } = Connectors

const MetaMask = new InjectedConnector({ supportedNetworks: [1, 4] })

const connectors = { MetaMask }


class App extends Component {
  render() {
    return (
      <Web3Provider
        connectors={connectors}
        libraryName={'web3.js'}
        web3Api={Web3} >
        <BridgeMonitor />
      </Web3Provider>
    );
  }
}

export default App;
