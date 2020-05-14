import { AppLoading } from "expo";
import { Container, Tab, Tabs } from "native-base";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../../redux/users/userActions";
import ProfileContainer from "./ProfileContainer";
import { Text } from "react-native";

const UserProfileScreen = ({ navigation }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const handleSignOut = () => {
    dispatch(signOut());
    navigation.navigate("Login");
  };

  useEffect(() => {
    if (users.details.id !== "") {
      setIsLoaded(true);
    }
  }, [users]);

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
          <Text>Edit Profile</Text>
        </Tab>
      </Tabs>
    </Container>
  ) : (
    <AppLoading />
  );
};

export default UserProfileScreen;
