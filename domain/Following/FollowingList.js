import { Left, List, ListItem, Right } from "native-base";
import React from "react";
import { Text } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const FollowingList = ({
  title,
  data,
  follow,
  unFollow,
  user,
  param,
  updateHandler,
}) => {
  const followOrUnFollow = (
    isDefined,
    user,
    param,
    injestionId,
    updateHandler
  ) => {
    if (!isDefined) {
      follow(user, param, injestionId, updateHandler);
      return;
    }
    unFollow(user, param, injestionId, updateHandler);
  };
  return (
    <List>
      <ListItem itemDivider first>
        <Text style={{ fontWeight: "bold" }}>{title}</Text>
      </ListItem>
      {data.map((item) => (
        <ListItem
          key={item.name}
          onPress={() =>
            followOrUnFollow(
              item.isDefined,
              user,
              param,
              item.injestionId,
              updateHandler
            )
          }
        >
          <Left>
            <Text>{item.name}</Text>
          </Left>
          <Right>
            <Ionicons
              name="md-star"
              size={20}
              color={!item.isDefined ? "grey" : "orange"}
            />
          </Right>
        </ListItem>
      ))}
    </List>
  );
};

export default FollowingList;
