import { AsyncStorage } from "react-native";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import userReducer from "./users/userReducer";
import navigationReducer from "./navigation/navigationReducer";
import tabReducer from "./tabs/tabsReducer";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["users", "generalNavigation", "tabs"],
};

const combiningReducer = combineReducers({
  users: userReducer,
  generalNavigation: navigationReducer,
  tabs: tabReducer,
});

const rootReducer = persistReducer(persistConfig, combiningReducer);

export default rootReducer;
