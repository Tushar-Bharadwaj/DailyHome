import { Container, Content } from "native-base";
import React, { useState, useEffect } from "react";
import TabList from "./TabList";
import { useSelector, useDispatch } from "react-redux";
import {
  createUserNavigation,
  removeFromNavigation,
  addToNavigation,
  fetchNewsComponents,
} from "./TabService";
import { fetchTabDetails } from "../../redux/tabs/tabsActions";

const AddToTabPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [update, setUpdate] = useState(0);
  const [genres, setGenre] = useState([]);
  const [source, setSource] = useState([]);
  const [localities, setLocalities] = useState([]);
  const [tags, setTags] = useState([]);

  const tabInfo = useSelector((state) => state.tabs);
  const user = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    setIsLoaded(false);
    (async () => {
      await dispatch(fetchTabDetails(user.userToken));
      const allGenres = await fetchNewsComponents("genres");
      const allSources = await fetchNewsComponents("sources");
      const allTags = await fetchNewsComponents("tags");
      const allLocalities = await fetchNewsComponents("localities");
      setGenre(createUserNavigation(allGenres, tabInfo.genres));
      setSource(createUserNavigation(allSources, tabInfo.sources));
      setTags(createUserNavigation(allTags, tabInfo.tags));
      setLocalities(createUserNavigation(allLocalities, tabInfo.localities));

      setIsLoaded(true);
    })();
  }, [update, setUpdate, user.details.id]);

  return (
    <Container>
      <Content>
        {isLoaded && (
          <>
            <TabList
              title="GENRE"
              follow={addToNavigation}
              removeFromNavigation={removeFromNavigation}
              updateHandler={setUpdate}
              user={user}
              data={genres}
              param={"genre"}
            />
            <TabList
              title="SOURCE"
              follow={addToNavigation}
              unFollow={removeFromNavigation}
              updateHandler={setUpdate}
              user={user}
              data={source}
              param="source"
            />
            <TabList
              title="LOCALITY"
              follow={addToNavigation}
              unFollow={removeFromNavigation}
              updateHandler={setUpdate}
              user={user}
              data={localities}
              param="locality"
            />
            <TabList
              title="TAGS"
              follow={addToNavigation}
              unFollow={removeFromNavigation}
              updateHandler={setUpdate}
              user={user}
              data={tags}
              param="tag"
            />
          </>
        )}
      </Content>
    </Container>
  );
};

export default AddToTabPage;
