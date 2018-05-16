import React from 'react';
import {Text, TouchableHighlight, StyleSheet, View } from 'react-native';
import TimerCountdown from "react-native-timer-countdown";

const Timer2 = (<TimerCountdown
  initialSecondsRemaining={5000}
  style={{fontSize: 40}}/>);

const Timed = (Timer2.props.secondsRemaining);

export default class Timer extends React.Component{
  render(){
    return(
      <View><Text>Hello</Text></View>
    )
  }
}
