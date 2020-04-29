import React, { useState } from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { NavigationContaienr } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./domain/Authentication/LoginScreen";
import AuthNavigation from "./navigation/AuthNavigation";

const fetchFont = () => {
  Font.loadAsync({
    Roboto: require("./assets/fonts/Roboto-Regular.ttf"),
    Roboto_medium: require("./assets/fonts/Roboto-Bold.ttf")
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
    <>
      <StatusBar hidden />
      <AuthNavigation />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
