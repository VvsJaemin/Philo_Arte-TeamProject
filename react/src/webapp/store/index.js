import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger"
import reviews from 'webapp/review/reducer/review.reducer'

const rootReducer = combineReducers({reviews});

export default configureStore({
    reducer: rootReducer,
    middleware: [...getDefaultMiddleware(), logger],
});