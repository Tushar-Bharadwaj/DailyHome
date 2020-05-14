import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { StyleSheet } from "react-native";
import LoginScreen from "../domain/Authentication/LoginScreen";
import RegistrationScreen from "../domain/Authentication/RegistrationScreen";
import UserProfileScreen from "../domain/User/UserProfileScreen";
import { useSelector } from "react-redux";
import NewsCard from "../components/NewsCard";
import NewsPage from "../domain/News/NewsPage";
const AuthNavigation = () => {
  const Stack = createStackNavigator();

  const isLoggedIn = useSelector((state) => state.users.isLoggedIn);
  const initialRouteName = isLoggedIn ? "Profile" : "Login";
  return (
    <Stack.Navigator initialRouteName={initialRouteName}>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          title: "Login",
          headerStyle: styles.header,
          headerTitleStyle: styles.headerText,
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="Register"
        component={RegistrationScreen}
        options={{
          title: "Register",
          headerStyle: styles.header,
          headerTitleStyle: styles.headerText,
          headerTitleAlign: "center",
        }}
      />

      <Stack.Screen
        name="Profile"
        component={UserProfileScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigation;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#e15f41",
  },
  headerText: {
    color: "#FFF",
    fontWeight: "bold",
    alignSelf: "center",
  },
});
