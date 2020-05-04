import { Body, Container, Content, Header, Title } from "native-base";
import React, { useEffect, useState } from "react";
import getAxios from "../../util/axios-helper";
import FollowingList from "./FollowingList";
import styles from "./style";

const fetchNewsComponents = async (name) => {
  const Axios = getAxios();
  let data = [];
  try {
    await Axios.get(`/injestion/user_profile/newsComponents/${name}`)
      .then((response) => {
        data = response.data[`all_the_${name}`];
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (e) {
    console.log(e);
  }
  return data;
};

const FollowingScreen = ({ navigation }) => {
  const [genre, setGenre] = useState([]);
  const [language, setLanguage] = useState([]);
  const [locality, setLocality] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    (async () => {
      let genres = await fetchNewsComponents("genres");
      let languages = await fetchNewsComponents("languages");
      let localities = await fetchNewsComponents("localities");
      setGenre(genres);
      setLanguage(languages);
      setLocality(localities);
      setIsLoaded(true);
    })();
  }, []);

  return (
    <Container>
      <Header style={styles.header}>
        <Body style={styles.headerText}>
          <Title>Following</Title>
        </Body>
      </Header>
      <Content>
        {isLoaded && (
          <>
            <FollowingList title="GENRE" data={genre} />
            <FollowingList title="LANGUAGE" data={language} />
            <FollowingList title="LOCALITY" data={locality} />
          </>
        )}
      </Content>
    </Container>
  );
};

export default FollowingScreen;
