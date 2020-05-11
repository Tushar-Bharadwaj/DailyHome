import { AsyncStorage } from "react-native";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import userReducer from "./users/userReducer";
import navigationReducer from "./navigation/navigationReducer";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["users", "generalNavigation"],
};

const combiningReducer = combineReducers({
  users: userReducer,
  generalNavigation: navigationReducer,
});

const rootReducer = persistReducer(persistConfig, combiningReducer);

export default rootReducer;
