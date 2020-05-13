import React, { useEffect, useState } from "react";
import { Text, Image, Dimensions } from "react-native";
import { Card, Content, CardItem } from "native-base";
import getAxios from "../../util/axios-helper";
import { AWS_PREFIX } from "../../constants/site-config";
const NewsPage = ({ navigation, route }) => {
  const { newsId } = route.params;
  const [isLoaded, setIsLoaded] = useState(false);
  const [card, setCard] = useState({});
  const windowWidth = Dimensions.get("window");
  useEffect(() => {
    let mounted = true;
    (async () => {
      const Axios = getAxios();
      Axios.get(`/injestion/article/${newsId}`)
        .then((response) => {
          if ((mounted = true)) {
            setCard(response.data);
            setIsLoaded(true);
          }
        })
        .catch((error) => {
          console.log(error);
          setIsLoaded(true);
        });
    })();
    return () => (mounted = false);
  }, [newsId]);

  return (
    isLoaded && (
      <Content>
        <Card style={{ flex: 0 }}>
          <CardItem
            style={{
              borderBottomColor: "#CCC",
              marginBottom: 2,
              borderBottomWidth: 1,
              elevation: 2,
              flex: 1,
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <Text style={{ fontWeight: "bold" }}>{card.title}</Text>
          </CardItem>
          <CardItem>
            <Image
              source={{ uri: AWS_PREFIX + card.imagePath }}
              style={{
                flex: 1,
                aspectRatio: 1.5,
                width: windowWidth.width - 40,
              }}
              resizeMode="contain"
            />
            {console.log(AWS_PREFIX + card.imagePath)}
          </CardItem>
          <CardItem>
            <Text>{card.text}</Text>
          </CardItem>
        </Card>
      </Content>
    )
  );
};

export default NewsPage;
