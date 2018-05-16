import React from 'react';
import {Text, StyleSheet, View, Button } from 'react-native';

export default class BigButton extends React.Component{
  render(){
    return(
        <View style ={buttonStyle.container}>
          <Text style = {titleStyle.container}>Feed Me</Text>
        </View>
    )
  }
}

const buttonStyle = StyleSheet.create({
  container: {
    height: 130,
    width: 260,
    backgroundColor: '#ceeaff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 200
  },
});
const titleStyle = StyleSheet.create({
  container: {
    fontSize: 60,
    color: '#ffffff',
  },
});
