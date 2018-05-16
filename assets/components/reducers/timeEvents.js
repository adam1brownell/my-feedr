
const quotes = require('../quotesList.json')
const randNum = Math.floor(Math.random()*(quotes.length-1))

let initialState = {
  quote: quotes[randNum],
  initialSecondsRemaining: 3000,
  secondsRemaining: 3000
};

const TimeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'PULL_QUOTE':
      newquote: 'success';
      state = Object.assign({},state, {pulledQ: true, quote: 'succes'});
      return state;
    case 'SAVE_TIME':
      state = Object.assign({},state, {secondsRemaining: action.time});
      return state
    default:
      return state;
  }
}

export default TimeReducer
