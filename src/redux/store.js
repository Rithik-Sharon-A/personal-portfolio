// src/redux/store.js

import { configureStore } from '@reduxjs/toolkit';
// Check the import path to your slice file
import themeReducer from './themeSlice';

export const store = configureStore({
  reducer: {
    // Make sure this name matches the name of your slice
    theme: themeReducer,
  },
});