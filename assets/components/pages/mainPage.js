import React from 'react';
import { Button, StyleSheet, View,TouchableHighlight } from 'react-native';
import { AppRegistry } from 'react-native';
import BigButton from '../bigButton.js';
import SettingsButton from '../settingsButton.js';
import Timer from '../timer.js';
import Quote from '../quote.js';

export default class MainPage extends React.Component{
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={() => this.props.navigation.navigate('Media')}>
          <BigButton />
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.props.navigation.navigate('Accounts')}>
          <SettingsButton />
        </TouchableHighlight>
        <View style={{padding: 50}}>
          <Quote />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
