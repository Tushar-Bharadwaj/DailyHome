import { Card, CardItem, Content } from "native-base";
import React from "react";
import { Text, Image } from "react-native";
import DailyButton from "../../components/DailyButton";
import SecondaryButton from "../../components/SecondaryButton";
import { AWS_PREFIX } from "../../constants/site-config";

const ProfileContainer = ({ users, handleSignOut }) => {
  console.log(users);
  return (
    <Content>
      <Card>
        <CardItem>
          <Image
            source={{ uri: AWS_PREFIX + users.details.image }}
            style={{ height: 100, width: 100, flex: 1, resizeMode: "contain" }}
          />
        </CardItem>
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
