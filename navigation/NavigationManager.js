import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import BottomNavigation from "./BottomNavigation";

const NavigationManager = () => {
  return (
    <NavigationContainer>
      <BottomNavigation />
    </NavigationContainer>
  );
};

export default NavigationManager;
