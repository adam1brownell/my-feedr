import {FBlogIn} from '../../auth/fbFunctions';

let initialState = {
  showPicker: false,
  selectedItem: 0,
  itemList: ['Facebook','Reddit','Instagram','Gmail','Twitter'],
  accountList: [],
  boxColor: 'blue',
};


const ScrollReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_SCROLL':
      state = Object.assign({},state, {showPicker: !state.showPicker});
      return state;
    case 'PICKER_SELECT':
      state = Object.assign({},state, {selectedItem: action.index});
      return state;
    case 'TOGGLE_COLOR':
      state = Object.assign({},state, {boxColor: 'red'});
      return state;
    case 'ADD_ACCOUNT':
      const newAccount = state.itemList[state.selectedItem]
      //Add a switch about which account API to call IN ACCOUNTS REDUCER
      // Transition these states and functions to accounts Events
      if(newAccount) {
        state.accountList.splice(state.accountList.length,0,newAccount);
        state.itemList.splice(state.selectedItem,1);
        state = Object.assign({},state, {showPicker: false});
      }
      return state;
    default:
      return state;
  }
}

export default ScrollReducer
