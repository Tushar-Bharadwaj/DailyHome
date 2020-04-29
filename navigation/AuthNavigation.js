import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../domain/Authentication/LoginScreen";
import RegistrationScreen from "../domain/Authentication/RegistrationScreen";

const Stack = createStackNavigator();

const AuthNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            title: "Login",
            headerStyle: styles.header,
            headerTitleStyle: styles.headerText,
            headerTitleAlign: "center"
          }}
        />
        <Stack.Screen
          name="Register"
          component={RegistrationScreen}
          options={{
            title: "Register",
            headerStyle: styles.header,
            headerTitleStyle: styles.headerText,
            headerTitleAlign: "center"
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthNavigation;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#e15f41"
  },
  headerText: {
    color: "#FFF",
    fontWeight: "bold",
    alignSelf: "center"
  }
});
