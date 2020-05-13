import React from "react";
import { Badge } from "native-base";
import { Text } from "react-native";

const HashTagHolder = ({ tag }) => {
  return (
    <Badge
      style={{
        backgroundColor: "#fff6e5",
        borderWidth: 1,
        borderColor: "#f5cd79",
        alignSelf: "auto",
        marginRight: 2,
        marginTop: 2,
      }}
    >
      <Text style={{ color: "#6f4900" }}> #{tag} </Text>
    </Badge>
  );
};

export default HashTagHolder;
