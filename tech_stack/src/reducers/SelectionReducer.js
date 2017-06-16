export default (state = null, action) => {
  // if this argument is undefined,
  // instead return value as null
  switch (action.type) {
    case 'select_library':
      return action.payload;
    default:
      return state;
  }
};