import React from 'react';
import { Image, TouchableHighlight, Text, StyleSheet, View } from 'react-native';
import {Picker} from 'react-native-wheel-picker';
import AddButton from '../addButton.js';
import BackButton from '../backButton';
import WheelPicker from '../wheelPicker';

export default class AccountsPage extends React.Component{
  render() {
    return (
			<View style={{backgroundColor: '#ffffff', flex: 1}}>
      <View style={{flexDirection: 'row'}}>
				<TouchableHighlight onPress={() => this.props.navigation.navigate('Home')}>
					<BackButton />
				</TouchableHighlight>
			</View>
      <View style={backgroundStyles.container}>
        <View style ={accountTitleStyles.container}>
          <Text style={accountTextStyles.container}>Linked Accounts</Text>
        </View>
        <View></View>
				<View style ={{alignItems:'center',justifyContent: 'center',
				margin: 50}}>
        	<WheelPicker />
				</View>
      </View>
			</View>
    )
  }
}

const accountTextStyles = StyleSheet.create({
  container: {
    color: '#8f9cae',
    fontSize: 45
  }
});

const backgroundStyles = StyleSheet.create({
  container: {
		flex: 1,
    alignItems: 'center'
  },
});
const accountTitleStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
