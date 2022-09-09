// import { createStore } from 'redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';

import counterReducer from './counter'
import authReducer from './auth'

// const counterReducer = (state = initialState, action) => {
//   if (action.type === 'increment') {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === 'increase') {
//     return {
//       counter: state.counter + action.value,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === 'decrement') {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === 'toggle') {
//     return {
//       showCounter: !state.showCounter,
//       counter: state.counter,
//     };
//   }

//   return state;
// };

// const store = createStore(counterReducer);

// reducer key accepts an object
const store = configureStore({
  // reducer: counterSlice.reducer,
  reducer: { counter: counterReducer, auth: authReducer },
});

// Slice object has property actions
// Creates matching actions for reducer methods with unique identifier

export default store;
