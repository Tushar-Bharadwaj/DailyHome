import { AppLoading } from "expo";
import styles from "./style";
import {
  Card,
  CardItem,
  Container,
  Content,
  Header,
  Body,
  Title,
} from "native-base";
import React from "react";
import { Text } from "react-native";

const FollowingScreen = ({ navigation }) => {
  return (
    <Container>
      <Header style={styles.header}>
        <Body style={styles.headerText}>
          <Title>Header</Title>
        </Body>
      </Header>
      <Content>
        <Card>
          <CardItem>
            <Text>Following Screen</Text>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
};

export default FollowingScreen;
