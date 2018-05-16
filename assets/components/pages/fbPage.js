import React from 'react';
import { View, Button,StyleSheet,Text } from 'react-native';
import {FBlogIn} from '../../auth/fbFunctions';
const quotes = require('../quotesList.json');
var q = quotes[2]

export default class Login extends React.Component<{}> {
  render() {
    return (
      <View style={styles.container}>
      <Button
        onPress={FBlogIn}
        title="Sign in with facebook"
        color="#3c50e8"/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
