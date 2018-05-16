import React from 'react';
import {Image,Text, StyleSheet, View, Button } from 'react-native';


export default class BackButton extends React.Component {
  render() {
    return(
          <View style=
          {{margin: 10,marginRight:0,marginLeft:0,padding: 2, top:5}}>
          <Image source={require('../images/goBack.png')}
          style={{width: 20, height: 20}} />
          </View>
    );
  }
}
