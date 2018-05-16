import React from 'react';
import { View, StyleSheet } from 'react-native';
import TestBox from '../testBox';


export default class TestPage extends React.Component{
  render() {
    return (
      <View style={styles.container}>
        <TestBox />
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
