import React from "react";
import { Container, Header, Tabs, Tab, Body, Title } from "native-base";
import { StyleSheet } from "react-native";

import FollowingScreen from "../Following/FollowingScreen";
import BlockedScreen from "../Blocked/BlockedScreen";

const PreferenceScreen = () => {
  return (
    <Container>
      <Header style={styles.header}>
        <Body style={styles.headerText}>
          <Title>Preferences</Title>
        </Body>
      </Header>
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
          heading="Following"
        >
          <FollowingScreen />
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
          heading="Blocked"
        >
          <BlockedScreen />
        </Tab>
      </Tabs>
    </Container>
  );
};

export default PreferenceScreen;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#e15f41",
    elevation: 5,
    alignContent: "center",
    shadowColor: "#000",
    justifyContent: "center",
    textAlign: "center",
  },
  headerText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 19,
    alignItems: "center",
  },
});
