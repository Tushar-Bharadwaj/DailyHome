import { Card, CardItem, Container, Content } from "native-base";
import React from "react";
import { Text } from "react-native";
import { useSelector } from "react-redux";

const UserProfileScreen = ({ navigation }) => {
  const users = useSelector((state) => state.users);
  return (
    <Container>
      <Content>
        <Card transparent>
          <CardItem style={{ justifyContent: "center" }}>
            <Text> {users.userToken}</Text>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
};

export default UserProfileScreen;
