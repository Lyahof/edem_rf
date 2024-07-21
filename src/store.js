import { configureStore } from '@reduxjs/toolkit';
import tripsReducer from './components/tripsSlice';

const store = configureStore({
  reducer: {
    trips: tripsReducer,
  },
});

export default store;