/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  TouchableOpacity,
  Alert,
} from 'react-native';

import MeditationView from './app/MeditationView';
//import Drawer from 'react-native-drawer';
import KeepAwake from 'react-native-keep-awake';

export default class SittingApp extends Component {
  render() {
    return (
      <View style={styles.container}>
      <StatusBar
         barStyle="light-content"
      />
      <KeepAwake />
      <View style={styles.topbar}>
      <TouchableOpacity onPress={this.handleDrawerButtonClick.bind(this) }>
        <View style={styles.drawericon}>
          <Image source={require('./app/img/sandwichdrawericon.png')} />
        </View>
      </TouchableOpacity>
        <View style={styles.apptitle}>
          <Image source={require('./app/img/sittingtitle.png')} />
        </View>
      </View>
      <MeditationView appState="Beginning" defaultMinutes={0} defaultSeconds={2}/>
      </View>
    );
  }

  handleDrawerButtonClick(e){
    Alert.alert("Settings coming soon!")
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#484848',
  },
  topbar: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#343434',
    height: 60,
    alignSelf: 'stretch',
  },
  drawericon: {
    left: 10,
    top: 30,
  },
  apptitle: {
    left: 95,
    top: 30,
  }
});

AppRegistry.registerComponent('SittingApp', () => SittingApp);
