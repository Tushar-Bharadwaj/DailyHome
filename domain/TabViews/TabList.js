import { List, ListItem } from "native-base";
import React from "react";
import { Text } from "react-native";

const TabList = ({ title }) => {
  return (
    <List>
      <ListItem itemDivider first>
        <Text style={{ fontWeight: "bold" }}>{title}</Text>
      </ListItem>
    </List>
  );
};

export default TabList;
