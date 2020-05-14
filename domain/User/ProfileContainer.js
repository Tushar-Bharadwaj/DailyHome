import { Card, CardItem, Content } from "native-base";
import React from "react";
import { Text } from "react-native";
import DailyButton from "../../components/DailyButton";
import SecondaryButton from "../../components/SecondaryButton";

const ProfileContainer = ({ users, handleSignOut }) => {
  return (
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

        <CardItem style={{ justifyContent: "center" }}>
          <SecondaryButton onPress={() => handleSignOut()}>
            Sign Out
          </SecondaryButton>
        </CardItem>
      </Card>
    </Content>
  );
};

export default ProfileContainer;
