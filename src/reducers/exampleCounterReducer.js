const counterReducer = (state = 0, action) => {
  switch(action.type) {
    case 'INCREASE_COUNT':
      return state + 1;
  default:
    return state;
  }
}

export default counterReducer;