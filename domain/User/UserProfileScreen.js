import { Card, CardItem, Container, Content } from "native-base";
import React, { useState, useEffect } from "react";
import { Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import DailyButton from "../../components/DailyButton";
import SecondaryButton from "../../components/SecondaryButton";
import { signOut } from "../../redux/users/userActions";
import { AppLoading } from "expo";

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
      console.log(users);
    }
  }, [users]);

  return isLoaded ? (
    <Container>
      <Content>
        <Card>
          <CardItem
            style={{
              flex: 1,
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Text> ID : {users.details.id} </Text>
            <Text> Name : {users.details.name} </Text>
            <Text> Email : {users.details.email} </Text>
          </CardItem>
          <CardItem>
            <DailyButton>
              <Text
                style={{
                  color: "#FFF",
                  fontWeight: "bold",
                }}
              >
                Edit Profile
              </Text>
            </DailyButton>
          </CardItem>
          <CardItem style={{ justifyContent: "center" }}>
            <SecondaryButton onPress={() => handleSignOut()}>
              Sign Out
            </SecondaryButton>
          </CardItem>
        </Card>
      </Content>
    </Container>
  ) : (
    <AppLoading />
  );
};

export default UserProfileScreen;
