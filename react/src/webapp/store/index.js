import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger"
import reviews from 'webapp/review/reducer/review.reducer'
import replies from 'webapp/reply/reducer/reply.reducer'

const rootReducer = combineReducers({reviews, replies});

export default configureStore({
    reducer: rootReducer,
    middleware: [...getDefaultMiddleware(), logger]
});