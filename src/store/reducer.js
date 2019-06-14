const defaultState = {
  focused: false
};

export default (state = defaultState, action) => {
  if (action.type === 'on_focus') {
    return {
      focused: true
    };
  }
  if (action.type === 'on_blur') {
    return {
      focused: false
    };
  }
  return state;
};
