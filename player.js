import React, { Component } from 'react';
import { View, Image, ScrollView, Text } from 'react-native';
import Separator from './separator';
import Section from './section';
import Sound from 'react-native-sound';
import bluebird from 'bluebird';

import header1 from './images/header1.png';

const names = [
  'music/track1.mp3',
  'music/track2.mp3',
  'music/track3.mp3',
  'music/track4.mp3',
  'music/track5.mp3',
  'music/track6.mp3'
];

const loadSound = track => new Promise((resolve, reject) => {
  const sound = new Sound(track, Sound.MAIN_BUNDLE, err => err ? reject(err) : resolve(sound));
});

async function createTrack(name) {
  const sound = await loadSound(name);
  return {name, sound};
}

export default class extends Component {

  constructor(props) {
    super(props);
    this.state = {playing: null, tracks: []};
  }

  async componentDidMount() {
    const tracks = await Promise.all(names.map(createTrack));
    this.setState({tracks: tracks});
  }

  startPlaying(track) {
    this.stopPlaying();
    track.sound.play(() => this.stopPlaying());
    this.setState({playing: track});
  }

  stopPlaying() {
    if (this.state.playing) {
      this.state.playing.sound.stop();
    }
    this.setState({playing: null});
  }

  pausePlaying() {
    if (this.state.playing) {
      this.state.playing.sound.pause();
    }
    this.setState({playing: null});
  }

  render() {
    return (
      <View style={{backgroundColor: '#131313'}}>
        <Image source={header1} style={{resizeMode: 'contain', width: null}} />
        <ScrollView style={{padding: 10}}>
          {this.state.tracks.map(track => (
            <View key={track.name}>
              <Section
                onPause={() => this.pausePlaying()}
                onPlay={() => this.startPlaying(track)}
                length={track.sound.getDuration()}
                isPlaying={track.name === (this.state.playing || {}).name}
                title={track.name}/>
              <Separator />
            </View>
          ))}
        </ScrollView>
      </View>
    )
  }
}
