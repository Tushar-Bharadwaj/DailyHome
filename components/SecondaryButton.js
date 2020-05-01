import React from "react";
import { Button } from "native-base";
import { Text } from "react-native";

export default SecondaryButton = (props) => {
  return (
    <Button
      style={{
        backgroundColor: "#f7d794",
        paddingHorizontal: 20,
        borderColor: "#f5cd79",
        borderWidth: 1,
        borderRadius: 4,
      }}
      onPress={props.onPress}
    >
      <Text
        style={{
          color: "#596275",
          fontWeight: "bold",
        }}
      >
        {props.children}
      </Text>
    </Button>
  );
};
