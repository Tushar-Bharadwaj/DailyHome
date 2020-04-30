import { AppLoading } from "expo";
import * as Font from "expo-font";
import React, { useState } from "react";
import { StatusBar } from "react-native";
import NavigationManager from "./navigation/NavigationManager";
import { Root } from "native-base";
import { Provider } from "react-redux";
import store from "./redux/store";

const fetchFont = () => {
  Font.loadAsync({
    Roboto: require("./assets/fonts/Roboto-Regular.ttf"),
    Roboto_medium: require("./assets/fonts/Roboto-Bold.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setfontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading startAsync={fetchFont} onFinish={() => setfontLoaded(true)} />
    );
  }

  return (
    <Root>
      <Provider store={store}>
        <StatusBar hidden />
        <NavigationManager />
      </Provider>
    </Root>
  );
}
