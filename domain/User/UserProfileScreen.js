import { Card, CardItem, Container, Content } from "native-base";
import React from "react";
import { Text } from "react-native";
import { useSelector } from "react-redux";
import DailyButton from "../../components/DailyButton";

const UserProfileScreen = ({ navigation }) => {
  const users = useSelector((state) => state.users.details);

  return (
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
            <Text> ID : {users.id} </Text>
            <Text> Name : {users.name} </Text>
            <Text> Email : {users.email} </Text>
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
        </Card>
      </Content>
    </Container>
  );
};

export default UserProfileScreen;
