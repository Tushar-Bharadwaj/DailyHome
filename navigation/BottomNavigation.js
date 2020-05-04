import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import FollowingScreen from "../domain/Following/FollowingScreen";
import AuthNavigation from "./AuthNavigation";

const BottomNavigation = () => {
  const Tabs = createBottomTabNavigator();

  return (
    <Tabs.Navigator
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
        style: {
          height: 55,
          justifyContent: "center",
          alignContent: "center",
        },
        labelStyle: {
          fontWeight: "bold",
          fontSize: 12,
        },
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          switch (route.name) {
            case "Profile":
              return <Ionicons name="md-person" size={size} color={color} />;
            case "Following":
              return <Ionicons name="md-star" size={size} color={color} />;
            case "Home":
              return <Ionicons name="md-home" size={size} color={color} />;
          }
        },
      })}
    >
      <Tabs.Screen name="Profile" component={AuthNavigation} />
      <Tabs.Screen
        name="Following"
        component={FollowingScreen}
        options={{
          title: "Following",
        }}
      />
    </Tabs.Navigator>
  );
};

export default BottomNavigation;

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
