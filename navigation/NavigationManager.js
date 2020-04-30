import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import AuthNavigation from "./AuthNavigation";

const NavigationManager = () => {
  return (
    <NavigationContainer>
      <AuthNavigation />
    </NavigationContainer>
  );
};

export default NavigationManager;
