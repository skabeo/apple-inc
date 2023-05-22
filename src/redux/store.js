import { configureStore } from '@reduxjs/toolkit';
import statementReducer from './statements/statementsSlice';

const store = configureStore({
  reducer: {
    data: statementReducer,
  },
});

export default store;
