import React from 'react';
import {Text, TouchableHighlight, StyleSheet, View } from 'react-native';

export default class SettingsButton extends React.Component {
  render() {
    return(
      <View style ={buttonStyle.container}>
        <Text style = {titleStyle.container}>Manage Accounts</Text>
      </View>
    );
  }
}
const buttonStyle = StyleSheet.create({
  container: {
    height:  50,
    width: 200,
    backgroundColor: '#849cb2',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 22
  },
});
const titleStyle = StyleSheet.create({
container: {
fontSize: 22,
color: '#ffffff',
},
});
