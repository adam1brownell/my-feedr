import React from 'react';
import { View, StyleSheet, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { toggleColor } from './actions/index';

class TestBox extends React.Component {
  render() {
    return(
      <TouchableHighlight onPress={() => this.props.toggleColor()}>
        <View style={{height: 50, width:50,
        margin: 30, backgroundColor: this.props.boxColor}}></View>
      </TouchableHighlight>
    )
  }
}

const mapStateToProps = state => {
  return {
    boxColor: state.scroll.boxColor
  }
};

const mapDispatchToProps = dispatch => ({
  toggleColor: () => dispatch(toggleColor()),
});

export default testingBox = connect(
  mapStateToProps,
  mapDispatchToProps)(TestBox)
