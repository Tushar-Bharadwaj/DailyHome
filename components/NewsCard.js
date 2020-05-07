import React from "react";
import { Text, Image } from "react-native";
import { Card, CardItem, Left, Right, H2 } from "native-base";
import { AWS_PREFIX } from "../constants/site-config";

const NewsCard = ({ title, thumbnailPath, newsId }) => {
  return (
    <Card>
      <CardItem>
        <Left
          style={{
            flex: 1,
            justifyContent: "flex-start",
            alignSelf: "flex-start",
          }}
        >
          <Text style={{ fontWeight: "bold", color: "#303952" }}>{title}</Text>
        </Left>
        <Right style={{ height: 100, width: 100 }}>
          <Image
            source={{ uri: AWS_PREFIX + thumbnailPath }}
            style={{ height: 100, width: 100, flex: 1 }}
          />
        </Right>
      </CardItem>
    </Card>
  );
};

export default NewsCard;
