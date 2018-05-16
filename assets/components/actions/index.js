
// SCROLL ACTIONS
export const toggleScroll = () => ({
    type: 'TOGGLE_SCROLL',
})

export const onPickerSelect = (index) => ({
    type: 'PICKER_SELECT',
    index
});

export const toggleColor = () => ({
  type: 'TOGGLE_COLOR'
})

export const addAccount = () => ({
  type: 'ADD_ACCOUNT'
})

// TIME ACTIONS
export const pullQuote = () => ({
  type: 'PULL_QUOTE',
})

export const saveTime = (time) => ({
  type: 'SAVE_TIME',
  time
})

// ACCOUNT ACTIONS

export const fbData = (data) =>({
  type: 'FB_DATA',
  data
})
