import React from 'react';
import { View, Text, ListView, Image, StyleSheet, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import renderIf from './helpers';
//import * as images from '../images';

// ACOUNTSLIST CLASS + HELPERS
const mapStateToProps = state => {
  return {
    accountList: state.scroll.accountList,
    noAccounts: state.scroll.noAccounts
  }
};
const rowStyles = StyleSheet.create({
  container: {
    flex: 0.9,
    margin: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },
  text: {
    marginLeft: 12,
    marginRight: 12,
    fontSize: 20,
  },
  photo: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
});

const mapDispatchToProps = dispatch => ({});

class AccountsList extends React.Component {

  constructor(props){
    super(props);
  }


  render() {
    return(

      <View>
        {this.props.accountList.map((account) =>
        <View key={account.toString()} style={rowStyles.container}>
        <Text style={rowStyles.text}>{account}</Text>

        </View>)}
      </View>
    )
  }
}

export default AccountsList = connect(
  mapStateToProps,
  mapDispatchToProps)(AccountsList)
