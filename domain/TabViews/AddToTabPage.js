import { Container, Content } from "native-base";
import React, { useState, useEffect } from "react";
import { fetchNewsComponents } from "./TabServices";
import TabList from "./TabList";
import { useSelector } from "react-redux";

const AddToTabPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [genres, setGenre] = useState([]);
  const [source, setSource] = useState([]);
  const [language, setLanguage] = useState([]);
  const [localities, setLocalities] = useState([]);
  const tabInfo = useSelector((state) => state.tabs);

  useEffect(() => {
    (async () => {
      const allGenres = await fetchNewsComponents("genres");
      const allSources = await fetchNewsComponents("sources");
      const allLanguages = await fetchNewsComponents("languages");
      const allLocalities = await fetchNewsComponents("localities");
    })();
  }, []);

  return (
    <Container>
      <Content></Content>
    </Container>
  );
};

export default AddToTabPage;
