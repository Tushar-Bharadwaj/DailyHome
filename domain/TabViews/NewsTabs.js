import {
  Body,
  Container,
  Header,
  ScrollableTab,
  Tab,
  Tabs,
  Title,
} from "native-base";
import React from "react";
import { useSelector } from "react-redux";
import TabData from "./TabData";
import styles from "./style";

const NewsTabs = () => {
  const users = useSelector((state) => state.users);
  const data = users.following.genres;
  console.log(data);
  return (
    <Container style={{ backgroundColor: "#FFF" }}>
      <Header style={styles.header}>
        <Body style={styles.headerText}>
          <Title>Daily Home</Title>
        </Body>
      </Header>
      <Tabs
        tabBarBackgroundColor="white"
        tabBarUnderlineStyle={{
          backgroundColor: "#e15f41",
        }}
        renderTabBar={() => <ScrollableTab />}
      >
        {data.map((item) => {
          return (
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
              key={item.injestionId}
              heading={item.name}
            >
              <TabData data={item} token={users.userToken} />
            </Tab>
          );
        })}
      </Tabs>
    </Container>
  );
};

export default NewsTabs;
