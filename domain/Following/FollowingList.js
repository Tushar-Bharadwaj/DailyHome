import { Left, List, ListItem, Right } from "native-base";
import React from "react";
import { Text } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const FollowingList = ({ title, data }) => {
  return (
    <List>
      <ListItem itemDivider first>
        <Text style={{ fontWeight: "bold" }}>{title}</Text>
      </ListItem>
      {data.map((item) => (
        <ListItem key={item.name}>
          <Left>
            <Text>{item.name}</Text>
          </Left>
          <Right>
            <Ionicons name="md-star" size={20} color="grey" />
          </Right>
        </ListItem>
      ))}
    </List>
  );
};

export default FollowingList;
