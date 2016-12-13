import React, { Component } from 'react';
import { Image } from 'react-native';
import separator from './images/separator.png';

export default () => (
  <Image source={separator} style={{resizeMode: 'contain', width: null}}/>
);

