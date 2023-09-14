import { configureStore } from "@reduxjs/toolkit";
import navlinkReducer from "./navlink";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root", 
  storage,
};

const persistedReducer = persistReducer(persistConfig, navlinkReducer);

const store = configureStore({
  reducer: {
    navlink: persistedReducer,
  },
});

export const persistor = persistStore(store);

export default store;
