import React from 'react';
import {Image} from 'react-native';

export default class AddButton extends React.Component {
  render() {
    return(
          <Image source={require('../images/add.png')}
          style={{width: 40, height: 40}} />
    );
  }
}
