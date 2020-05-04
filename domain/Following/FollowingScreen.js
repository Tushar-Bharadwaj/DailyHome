import { Body, Container, Content, Header, Title } from "native-base";
import React, { useEffect, useState } from "react";
import getAxios from "../../util/axios-helper";
import FollowingList from "./FollowingList";
import styles from "./style";
import { useSelector } from "react-redux";
import {
  unFollow,
  follow,
  userIsFollowingMetaData,
  getFollowing,
  fetchNewsComponents,
} from "./FollowingServices";

const FollowingScreen = ({ navigation }) => {
  const [update, setUpdate] = useState(0);
  const [genre, setGenre] = useState([]);
  const [language, setLanguage] = useState([]);
  const [locality, setLocality] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const user = useSelector((state) => state.users);

  useEffect(() => {
    (async () => {
      let genres = await fetchNewsComponents("genres");
      let languages = await fetchNewsComponents("languages");
      let localities = await fetchNewsComponents("localities");
      let following = await getFollowing(user);
      setGenre(
        userIsFollowingMetaData(genres, following.genres.all_the_genres)
      );
      setLanguage(
        userIsFollowingMetaData(
          languages,
          following.languages.all_the_languages
        )
      );
      setLocality(
        userIsFollowingMetaData(
          localities,
          following.localities.all_the_localities
        )
      );
      console.log(genre);
      setIsLoaded(true);
    })();
    console.log("Use Effect Update Value :", update);
  }, [update, setUpdate]);

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
            <FollowingList
              title="GENRE"
              data={genre}
              follow={follow}
              unFollow={unFollow}
              updateHandler={setUpdate}
              user={user}
              param="genreIds"
            />
            <FollowingList
              title="LANGUAGE"
              data={language}
              follow={follow}
              unFollow={unFollow}
              updateHandler={setUpdate}
              user={user}
              param="languageIds"
            />
            <FollowingList
              title="LOCALITY"
              data={locality}
              follow={follow}
              unFollow={unFollow}
              updateHandler={setUpdate}
              user={user}
              param="localityIds"
            />
          </>
        )}
      </Content>
    </Container>
  );
};

export default FollowingScreen;
