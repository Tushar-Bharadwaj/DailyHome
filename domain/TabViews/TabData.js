import { useNavigation } from "@react-navigation/native";
import { Content } from "native-base";
import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import NewsCard from "../../components/NewsCard";
import getAxios from "../../util/axios-helper";
import { FOR_YOU, GENRE } from "../../constants/tab-settings";

const TabData = ({ data, token, dataType }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [newsCards, setNewsCards] = useState([]);
  const navigation = useNavigation();
  useEffect(() => {
    let mounted = true;
    const Axios = getAxios(token);
    let fetchUrl = "";
    if (dataType == GENRE) {
      if (token == "") fetchUrl = `/injestion/cards/genre/${data.injestionId}`;
      else fetchUrl = `/cards/genre/${data.injestionId}`;
    } else if ((dataType = FOR_YOU)) {
      console.log("Inside For You");
      fetchUrl = `/cards/genre`;
    }
    Axios.get(fetchUrl)
      .then((response) => {
        const data = response.data.cards;
        console.log(data);
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
