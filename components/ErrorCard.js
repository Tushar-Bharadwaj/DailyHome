import React from "react";
import { Text } from "react-native";
import { CardItem } from "native-base";

/**
 * Custom Error Card Component that takes in string as inputs.
 */
export default ErrorCard = ({ children }) => {
  return (
    children !== "" &&
    children !== undefined && (
      <CardItem
        style={{ paddingTop: 1, paddingBottom: 1, justifyContent: "center" }}
      >
        <Text style={{ fontSize: 12, color: "red" }}>{children}</Text>
      </CardItem>
    )
  );
};
