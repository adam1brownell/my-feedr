import React from 'react';
import { Text, StyleSheet, View,TouchableHighlight } from 'react-native';
import { AppRegistry } from 'react-native';
import SettingsButton from '../settingsButton';
import Timer from '../timer';
import Quote from '../quote.js';
import AccountsList from '../accountsList';

export default class MediaPage extends React.Component{
  render() {
    return (
      <View style={styles.container}>
        <View><AccountsList /></View>
        <TouchableHighlight onPress={() => this.props.navigation.navigate('Accounts')}>
          <SettingsButton />
        </TouchableHighlight>
        <Quote />
        <Timer />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DCDCDC',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
