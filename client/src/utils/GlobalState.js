import { createContext, useContext } from "react";
import { useProductReducer } from './reducers';
import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducers';

export default configureStore({
  reducer
});