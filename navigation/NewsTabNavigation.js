import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { StyleSheet } from "react-native";
import NewsPage from "../domain/News/NewsPage";
import AddToTabPage from "../domain/TabViews/AddToTabPage";
import NewsTabs from "../domain/TabViews/NewsTabs";
const NewsTabNavigation = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName={"Tabs"}>
      <Stack.Screen
        name="Tabs"
        component={NewsTabs}
        options={{
          title: "News",
          headerStyle: styles.header,
          headerTitleStyle: styles.headerText,
          headerTitleAlign: "center",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="NewsPage"
        component={NewsPage}
        options={{
          title: "News",
          headerStyle: styles.header,
          headerTitleStyle: styles.headerText,
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="TabNav"
        component={AddToTabPage}
        options={{
          title: "Add To Tabs",
          headerStyle: styles.header,
          headerTitleStyle: styles.headerText,
          headerTitleAlign: "center",
        }}
      />
    </Stack.Navigator>
  );
};

export default NewsTabNavigation;

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
