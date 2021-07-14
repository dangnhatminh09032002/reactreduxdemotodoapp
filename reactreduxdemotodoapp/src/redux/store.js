import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { logger } from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import todoReducer from "./todo";
import loginReducer from "./auth";

// config persist
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["login"]
};

const rootReducer = combineReducers({
  todo: todoReducer,
  login: loginReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});

export const persistor = persistStore(store);

export default store;
// const myMiddeware = (store) => (next) => (action) => {
//   if (action.type === "ADD_TODO" && action.payload === "fuck") {
//     action.payload = "****";
//   }
//   console.log(action, store.getState());
//   return next(action);
// };

// function myMiddeware(store) {
//   return function(next) {
//     return function(action) {

//     }
//   }
// }
// const asyncMiddleware = (store) => (next) => (action) => {
//   if (typeof action === "function") {
//     action(next);
//   }
// };
