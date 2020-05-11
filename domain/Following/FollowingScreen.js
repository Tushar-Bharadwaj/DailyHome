import { Body, Container, Content, Header, Title } from "native-base";
import React, { useEffect, useState } from "react";
import getAxios from "../../util/axios-helper";
import FollowingList from "./FollowingList";
import styles from "./style";
import { useSelector, useDispatch } from "react-redux";
import {
  unFollow,
  follow,
  userIsFollowingMetaData,
  getFollowing,
  fetchNewsComponents,
} from "./FollowingServices";
import { fetchBlockedAndFollowing } from "../../redux/users/userActions";

const FollowingScreen = ({ navigation }) => {
  const [update, setUpdate] = useState(0);
  const [genre, setGenre] = useState([]);
  const [language, setLanguage] = useState([]);
  const [locality, setLocality] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const user = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      console.log("Value of user is");
      if (user.details.id !== "") {
        let genres = await fetchNewsComponents("genres");
        let languages = await fetchNewsComponents("languages");
        let localities = await fetchNewsComponents("localities");
        getFollowing(user).then((following) => {
          console.log("Inside Following");
          console.log(following);

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
          dispatch(fetchBlockedAndFollowing(user.details.id, user.userToken));

          setIsLoaded(true);
        });
      }
    })();
  }, [update, setUpdate, user.details.id]);

  return (
    <Container>
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
