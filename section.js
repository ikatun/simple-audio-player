import React, { Component } from 'react';
import { View, Image, Text, TouchableHighlight } from 'react-native';

import playButton from './images/play.png';
import pauseButton from './images/pause.png';

export default ({length, isPlaying, title, onPlay, onPause}) => {
  const sourceImage = isPlaying ? pauseButton : playButton;
  const min = Math.floor(length / 60);
  const sec = Math.floor(length % 60);

  const onPress = () => isPlaying ? onPause() : onPlay();

  return (
    <TouchableHighlight onPress={onPress}>
      <View style={{flexDirection: 'row', flex: 1}}>
        <Image source={sourceImage} style={{flex: 1, resizeMode: 'contain', height: 100}}/>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Text style={{color: 'white'}}>{title}</Text>
          <Text style={{color: 'white'}}>length {min}min {sec}sec</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
}