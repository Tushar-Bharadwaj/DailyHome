import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import BottomNavigation from "./BottomNavigation";
import { useDispatch, useSelector } from "react-redux";
import { fetchOfflineNavigation } from "../redux/navigation/navigationActions";
import { AppLoading } from "expo";

const NavigationManager = () => {
  const dispatch = useDispatch();
  const [navigationLoaded, setNavigationLoaded] = useState(false);
  //Building the offline navigation everytime the application is loaded for the first time.
  const navigationDetails = useSelector((state) => state.generalNavigation);
  useEffect(() => {
    (async () => {
      dispatch(fetchOfflineNavigation()).then(() => setNavigationLoaded(true));
    })();
  }, []);

  useEffect(() => {
    if (navigationLoaded) console.log(navigationDetails);
  }, [navigationLoaded]);

  return !navigationLoaded ? (
    <AppLoading />
  ) : (
    <NavigationContainer>
      <BottomNavigation />
    </NavigationContainer>
  );
};

export default NavigationManager;
