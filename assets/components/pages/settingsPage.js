import React from 'react';
import { Button,Text, StyleSheet, View } from 'react-native';
import { RootStack, SettingsStack } from '../../../Config';

export default class SettingsPage extends React.Component{
  render() {
    return (
      <SettingsStack />
    )
  }
}
