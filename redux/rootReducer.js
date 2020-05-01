import { AsyncStorage } from "react-native";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import userReducer from "./users/userReducer";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["users"],
};

const combiningReducer = combineReducers({
  users: userReducer,
});

const rootReducer = persistReducer(persistConfig, combiningReducer);

export default rootReducer;
