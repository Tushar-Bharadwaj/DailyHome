import { Body, Container, Content, Header, Title } from "native-base";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import BlockedList from "./BlockedList";
import {
  block,
  fetchNewsComponents,
  getBlocked,
  unBlock,
  userIsBlockedMetaData,
} from "./BlockedServices";
import styles from "./style";

const BlockedScreen = ({ navigation }) => {
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
      let blocked = await getBlocked(user);
      setGenre(userIsBlockedMetaData(genres, blocked.genres.all_the_genres));
      setLanguage(
        userIsBlockedMetaData(languages, blocked.languages.all_the_languages)
      );
      setLocality(
        userIsBlockedMetaData(localities, blocked.localities.all_the_localities)
      );
      setIsLoaded(true);
    })();
  }, [update, setUpdate]);

  return (
    <Container>
      <Content>
        {isLoaded && (
          <>
            <BlockedList
              title="GENRE"
              data={genre}
              block={block}
              unBlock={unBlock}
              updateHandler={setUpdate}
              user={user}
              param="genreIds"
            />

            <BlockedList
              title="LOCALITY"
              data={locality}
              block={block}
              unBlock={unBlock}
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

export default BlockedScreen;
