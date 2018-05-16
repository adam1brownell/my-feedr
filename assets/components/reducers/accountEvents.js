let initialState = {
  t: 9
};

const AccountReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FB_DATA':
      state = Object.assign({},state, {fbData: action.data});
      return state;
    default:
      return state;
    }
}
export default AccountReducer
