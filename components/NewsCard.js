import React from "react";
import { Text, Image } from "react-native";
import { Card, CardItem, Left, Right, H2, Content, View } from "native-base";
import { AWS_PREFIX } from "../constants/site-config";
import HashTagHolder from "./HashTagHolder";

const NewsCard = ({ title, thumbnailPath, newsId }) => {
  return (
    <Card style={{ marginTop: 1, marginBottom: 0 }}>
      <CardItem style={{ paddingTop: 3, paddingBottom: 2 }}>
        <Left
          style={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "flex-start",
            alignSelf: "flex-start",
            alignItems: "flex-start",
          }}
        >
          <Content>
            <Text style={{ fontWeight: "bold", color: "#303952" }}>
              {title}
            </Text>
          </Content>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            <HashTagHolder tag="Test" />
            <HashTagHolder tag="Some" />
            <HashTagHolder tag="Some" />
          </View>
        </Left>
        <Right
          style={{ height: 100, width: 100, justifyContent: "flex-start" }}
        >
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
