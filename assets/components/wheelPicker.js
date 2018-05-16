import React from 'react';
import {Platform, StyleSheet,Text,View,TouchableHighlight} from 'react-native';
import Picker from 'react-native-wheel-picker';
import AddButton from './addButton';
import AccountsList from './accountsList';
import { connect } from 'react-redux';
import renderIf from './helpers';
import * as action from './actions';
import { FBlogIn } from '../auth/fbFunctions';

var PickerItem = Picker.Item;

const mapStateToProps = state => {
  return {
    showPicker: state.scroll.showPicker,
    itemList: state.scroll.itemList,
    selectedItem: state.scroll.selectedItem,
  }
}


const mapDispatchToProps = dispatch => ({
    toggleScroll: () => dispatch(action.toggleScroll()),
    onPickerSelect: index => dispatch(action.onPickerSelect(index)),
    toggleColor: () => dispatch(action.toggleColor()),
    addAccount: () => dispatch(action.addAccount())
});
//Selected：{this.state.itemList[this.state.selectedItem]}
class WheelPicker extends React.Component{
    accountLogin(){
      accountName = this.props.itemList[this.props.selectedItem]
      switch(accountName){
        case 'Facebook':
          FBData = FBlogIn()
        case 'Reddit':
        case 'Gmail':
        case 'Twitter':
        default: break;
      }

      this.props.addAccount()
    }
    render () {
        return (
            <View>
              {renderIf(this.props.showPicker,
                <View style={styles.container}>
                  <Picker style={{width: 150, height: 180}}
                      selectedValue={this.props.selectedItem}
                      itemStyle={{color:"black", fontSize:26}}
                      onValueChange={(index) => this.props.onPickerSelect(index)}>
                      {this.props.itemList.map((value, i) => (
                          <PickerItem label={value} value={i} key={"money"+value}/>
                      ))}
                          </Picker>
                  <View style={{top:20}}>
                    <TouchableHighlight onPress={() => this.accountLogin()}>
                      <AddButton />
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => this.props.toggleScroll()}>
                      <Text style={{top:50}}>Close</Text>
                    </TouchableHighlight>
                  </View>
                </View>
                )
              }
              {renderIf(!this.props.showPicker,
                <View style={{top:50}}>
                <View><AccountsList /></View>
                  <TouchableHighlight onPress={() => this.props.toggleScroll()}>
                    <AddButton />
                  </TouchableHighlight>
                </View>)}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightblue',
    },
});

export default WheelPicker = connect(
  mapStateToProps,
  mapDispatchToProps)(WheelPicker);
