import { Container, Header, Tabs, ScrollableTab, Tab } from "native-base";
import { Text } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import TabData from "./TabData";

const NewsTabs = () => {
  const data = useSelector((state) => state.users.following.genres);
  console.log(data);
  return (
    <Container>
      <Header hasTabs />
      <Tabs renderTabBar={() => <ScrollableTab />}>
        {data.map((item) => {
          return (
            <Tab key={item.injestionId} heading={item.name}>
              <TabData data={item} />
            </Tab>
          );
        })}
      </Tabs>
    </Container>
  );
};

export default NewsTabs;
