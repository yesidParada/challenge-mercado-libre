import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './categoriesReducer';

export default configureStore({
  reducer: {
    categories: categoriesReducer
  },
})