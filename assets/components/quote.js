import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

class Quote extends React.Component {
  render() {
    return(
      <View>
      <Text style = {styles.container}>{this.props.quote}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    textAlign: 'center',
    color: 'grey',
    padding: 25
  },
});

const mapStateToProps = state => {
  return {
    quote: state.time.quote,
  }
};

const mapDispatchToProps = dispatch => ({});

export default testingBox = connect(
  mapStateToProps,
  mapDispatchToProps)(Quote)
