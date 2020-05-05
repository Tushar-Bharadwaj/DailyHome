import { Left, List, ListItem, Right } from "native-base";
import React from "react";
import { Text } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const BlockedList = ({
  title,
  data,
  block,
  unBlock,
  user,
  param,
  updateHandler,
}) => {
  const blockOrUnBlock = (
    isDefined,
    user,
    param,
    injestionId,
    updateHandler
  ) => {
    if (!isDefined) {
      block(user, param, injestionId, updateHandler);
      return;
    }
    unBlock(user, param, injestionId, updateHandler);
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
            blockOrUnBlock(
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
            {!item.isDefined ? (
              <Ionicons name="md-eye" size={20} color={"grey"} />
            ) : (
              <Ionicons name="md-eye-off" size={20} color={"blue"} />
            )}
          </Right>
        </ListItem>
      ))}
    </List>
  );
};

export default BlockedList;
