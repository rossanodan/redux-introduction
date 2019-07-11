const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    counter: 0
};

// Reducer - It's the only thing that may update the state
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INT_COUNTER':
            // in immutable way
            return {
                ...state,
                counter: state.counter + 1,
            };
        case 'ADD_COUNTER':
            // in immutable way
            return {
                ...state,
                counter: state.counter + action.value,
            };
    }
    return state;
};

// Store
const store = createStore(rootReducer);
console.log(store.getState());

// Subscription
store.subscribe(() => {
    console.log('[Subscription]', store.getState());
});

// Dispatching Action
store.dispatch({ type: 'INT_COUNTER' });
store.dispatch({ type: 'ADD_COUNTER', value: 10 }); // payload: {}
console.log(store.getState());
// store.dispatch({ type: 'ADD_COUNTER', payload: {} });