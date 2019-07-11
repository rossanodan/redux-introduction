const initialState = {
  counter: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      // in immutable way
      return {
        counter: state.counter + 1,
      };
    case 'ADD':
      // in immutable way
      return {
        counter: state.counter + action.value,
      };
    case 'DECREMENT':
      // in immutable way
      return {
        counter: state.counter - 1,
      };
    case 'SUBTRACT':
      // in immutable way
      return {
        counter: state.counter - action.value,
      };
  }
  return state;
}

export default reducer;