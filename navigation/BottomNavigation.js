import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useSelector } from "react-redux";
import PreferenceScreen from "../domain/Preferences/PreferenceScreen";
import NewsTabs from "../domain/TabViews/NewsTabs";
import AuthNavigation from "./AuthNavigation";

const BottomNavigation = () => {
  const Tabs = createBottomTabNavigator();
  const isLoggedIn = useSelector((state) => state.users.isLoggedIn);
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
            case "Preference":
              return <Ionicons name="md-star" size={size} color={color} />;
            case "Home":
              return <Ionicons name="md-home" size={size} color={color} />;
          }
        },
      })}
    >
      <Tabs.Screen name="Profile" component={AuthNavigation} />
      {isLoggedIn && (
        <>
          <Tabs.Screen
            name="Home"
            component={NewsTabs}
            options={{
              title: "Home",
            }}
          />
          <Tabs.Screen
            name="Preference"
            component={PreferenceScreen}
            options={{
              title: "Preference",
            }}
          />
        </>
      )}
    </Tabs.Navigator>
  );
};

export default BottomNavigation;
