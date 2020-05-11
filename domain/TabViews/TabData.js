import React, { useState, useEffect } from "react";
import getAxios from "../../util/axios-helper";
import { Content } from "native-base";
import NewsCard from "../../components/NewsCard";
const TabData = ({ data, token }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [newsCards, setNewsCards] = useState([]);

  useEffect(() => {
    const Axios = getAxios(token);

    Axios.get(`/cards/genre/${data.injestionId}`)
      .then((response) => {
        const data = response.data.cards;
        setNewsCards(data);
        setIsLoaded(true);
        console.log(newsCards);
      })
      .catch((error) => {
        console.log(error);
        setIsLoaded(true);
      });
  }, [isLoaded]);
  return (
    <Content>
      {!isLoaded ? (
        <NewsCard title={null} thumbnailPath={null} newsId={null} />
      ) : (
        newsCards.map((item) => {
          return (
            <NewsCard
              key={item.injestionId}
              title={item.title}
              thumbnailPath={item.thumbnailPath}
              newsId={item.injestionId}
            />
          );
        })
      )}
    </Content>
  );
};

export default TabData;
