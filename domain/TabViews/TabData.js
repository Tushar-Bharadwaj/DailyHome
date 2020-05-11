import React, { useState, useEffect } from "react";
import getAxios from "../../util/axios-helper";
import { Content } from "native-base";
import NewsCard from "../../components/NewsCard";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import AuthNavigation from "../../navigation/AuthNavigation";

const TabData = ({ data, token }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [newsCards, setNewsCards] = useState([]);
  const navigation = useNavigation();
  useEffect(() => {
    let mounted = true;
    const Axios = getAxios(token);
    let fetchUrl = "";
    if (token == "") fetchUrl = `/injestion/cards/genre/${data.injestionId}`;
    else fetchUrl = `/cards/genre/${data.injestionId}`;

    Axios.get(fetchUrl)
      .then((response) => {
        const data = response.data.cards;
        if ((mounted = true)) {
          setNewsCards(data);
          setIsLoaded(true);
        }
      })
      .catch((error) => {
        console.log(error);
        setIsLoaded(true);
      });
    return () => (mounted = false);
  }, [isLoaded]);
  return (
    <Content style={{ backgroundColor: "#f8f5f3" }}>
      {!isLoaded ? (
        <NewsCard title={null} thumbnailPath={null} newsId={null} />
      ) : (
        newsCards.map((item) => {
          return (
            <TouchableOpacity
              key={item.injestionId}
              onPress={() =>
                navigation.push("NewsPage", { newsId: item.injestionId })
              }
            >
              <NewsCard
                title={item.title}
                thumbnailPath={item.thumbnailPath}
                newsId={item.injestionId}
              />
            </TouchableOpacity>
          );
        })
      )}
    </Content>
  );
};

export default TabData;
