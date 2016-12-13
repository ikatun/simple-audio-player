/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Player from './player';

import { AppRegistry } from 'react-native';

export default class catalogue_player extends Component {
  render() {
    return (
      <Player />
    );
  }
}

AppRegistry.registerComponent('catalogue_player', () => catalogue_player);
