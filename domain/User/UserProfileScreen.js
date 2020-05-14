import { AppLoading } from "expo";
import { Container, Tab, Tabs } from "native-base";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../../redux/users/userActions";
import ProfileContainer from "./ProfileContainer";
import { Text } from "react-native";
import EditProfile from "./EditProfile";

const UserProfileScreen = ({ navigation }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [logout, setLogout] = useState(false);
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const handleSignOut = () => {
    dispatch(signOut());
    setLogout(true);
  };

  useEffect(() => {
    if (users.details.id !== "") {
      setIsLoaded(true);
    }
  }, [users]);
  //Logging out user only after the Redux is updated
  useEffect(() => {
    if (logout && !users.isLoggedIn) navigation.navigate("Login");
  }, [users, logout]);

  return isLoaded ? (
    <Container>
      <Tabs
        tabBarUnderlineStyle={{
          backgroundColor: "#e15f41",
        }}
      >
        <Tab
          tabStyle={{
            backgroundColor: "#FFF",
          }}
          textStyle={{
            color: "#e15f41",
          }}
          activeTabStyle={{
            backgroundColor: "#FFF",
            color: "#e15f41",
          }}
          activeTextStyle={{
            color: "#e15f41",
            fontWeight: "bold",
          }}
          tabBarUnderlineStyle={{
            backgroundColor: "#e15f41",
          }}
          heading="Your Profile"
        >
          <ProfileContainer users={users} handleSignOut={handleSignOut} />
        </Tab>
        <Tab
          tabStyle={{
            backgroundColor: "#FFF",
          }}
          textStyle={{
            color: "#e15f41",
          }}
          activeTabStyle={{
            backgroundColor: "#FFF",
            color: "#e15f41",
          }}
          activeTextStyle={{
            color: "#e15f41",
            fontWeight: "bold",
          }}
          tabBarUnderlineStyle={{
            backgroundColor: "#e15f41",
          }}
          heading="Edit Profile"
        >
          <EditProfile />
        </Tab>
      </Tabs>
    </Container>
  ) : (
    <AppLoading />
  );
};

export default UserProfileScreen;
