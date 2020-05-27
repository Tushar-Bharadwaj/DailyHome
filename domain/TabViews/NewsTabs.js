import { useNavigation } from "@react-navigation/native";
import {
  Body,
  Container,
  Header,
  ScrollableTab,
  Tab,
  Tabs,
  Title,
} from "native-base";
import React from "react";
import { useSelector } from "react-redux";
import styles from "./style";
import TabData from "./TabData";
import {
  GENRE,
  FOR_YOU,
  TRENDING,
  NOT_LOGGED_TRENDING,
} from "../../constants/tab-settings";
import AddToTabButton from "./AddToTabButton";

const NewsTabs = () => {
  const users = useSelector((state) => state.users);
  const generalNavigation = useSelector((state) => state.generalNavigation);
  const tabs = useSelector((state) => state.tabs);

  const tabDataLength =
    tabs.sources.length +
    tabs.genres.length +
    tabs.localities.length +
    tabs.tags.length;
  console.log("Tab Length is " + tabDataLength);
  let data;
  if (users.isLoggedIn) data = users.following.genres;
  else data = generalNavigation;
  const navigation = useNavigation();
  return (
    <Container style={{ backgroundColor: "#FFF" }}>
      {users.isLoggedIn && <AddToTabButton navigation={navigation} />}
      <Header style={styles.header}>
        <Body style={styles.headerText}>
          <Title>Daily Home</Title>
        </Body>
      </Header>
      <Tabs
        tabBarBackgroundColor="white"
        tabBarUnderlineStyle={{
          backgroundColor: "#e15f41",
        }}
        renderTabBar={() => <ScrollableTab />}
      >
        {users.isLoggedIn && (
          <Tab
            tabStyle={{
              backgroundColor: "#FFF",
            }}
            textStyle={{
              color: "#e15f41",
            }}
            activeTabStyle={{
              backgroundColor: "#FFF",
              color: "#e15f41",
            }}
            activeTextStyle={{
              color: "#e15f41",
              fontWeight: "bold",
            }}
            tabBarUnderlineStyle={{
              backgroundColor: "#e15f41",
            }}
            key={`XZ12`}
            heading="For You"
          >
            <TabData
              data={null}
              navigation={navigation}
              token={users.userToken}
              dataType={FOR_YOU}
              fetchType="genre"
            />
          </Tab>
        )}

        {users.isLoggedIn && (
          <Tab
            tabStyle={{
              backgroundColor: "#FFF",
            }}
            textStyle={{
              color: "#e15f41",
            }}
            activeTabStyle={{
              backgroundColor: "#FFF",
              color: "#e15f41",
            }}
            activeTextStyle={{
              color: "#e15f41",
              fontWeight: "bold",
            }}
            tabBarUnderlineStyle={{
              backgroundColor: "#e15f41",
            }}
            key={`XZ15`}
            heading="Trending"
          >
            <TabData
              data={null}
              navigation={navigation}
              token={users.userToken}
              dataType={TRENDING}
              fetchType="genre"
            />
          </Tab>
        )}

        {!users.isLoggedIn && (
          <Tab
            tabStyle={{
              backgroundColor: "#FFF",
            }}
            textStyle={{
              color: "#e15f41",
            }}
            activeTabStyle={{
              backgroundColor: "#FFF",
              color: "#e15f41",
            }}
            activeTextStyle={{
              color: "#e15f41",
              fontWeight: "bold",
            }}
            tabBarUnderlineStyle={{
              backgroundColor: "#e15f41",
            }}
            key={`XZ15`}
            heading="Trending"
          >
            <TabData
              data={null}
              navigation={navigation}
              token={users.userToken}
              dataType={NOT_LOGGED_TRENDING}
              fetchType="genre"
            />
          </Tab>
        )}
        {!users.isLoggedIn &&
          data.length !== 0 &&
          data.map((item) => {
            return (
              <Tab
                tabStyle={{
                  backgroundColor: "#FFF",
                }}
                textStyle={{
                  color: "#e15f41",
                }}
                activeTabStyle={{
                  backgroundColor: "#FFF",
                  color: "#e15f41",
                }}
                activeTextStyle={{
                  color: "#e15f41",
                  fontWeight: "bold",
                }}
                tabBarUnderlineStyle={{
                  backgroundColor: "#e15f41",
                }}
                key={item.injestionId}
                heading={item.name}
              >
                <TabData
                  data={item}
                  navigation={navigation}
                  token={users.userToken}
                  dataType={GENRE}
                  fetchType="genre"
                />
              </Tab>
            );
          })}
        {users.isLoggedIn &&
          tabs.genres.length !== 0 &&
          tabs.genres.map((item) => {
            return (
              <Tab
                tabStyle={{
                  backgroundColor: "#FFF",
                }}
                textStyle={{
                  color: "#e15f41",
                }}
                activeTabStyle={{
                  backgroundColor: "#FFF",
                  color: "#e15f41",
                }}
                activeTextStyle={{
                  color: "#e15f41",
                  fontWeight: "bold",
                }}
                tabBarUnderlineStyle={{
                  backgroundColor: "#e15f41",
                }}
                key={item.injestionId}
                heading={item.name}
              >
                <TabData
                  data={item}
                  navigation={navigation}
                  token={users.userToken}
                  dataType={GENRE}
                  fetchType="genre"
                />
              </Tab>
            );
          })}
        {users.isLoggedIn &&
          tabs.localities.length !== 0 &&
          tabs.localities.map((item) => {
            return (
              <Tab
                tabStyle={{
                  backgroundColor: "#FFF",
                }}
                textStyle={{
                  color: "#e15f41",
                }}
                activeTabStyle={{
                  backgroundColor: "#FFF",
                  color: "#e15f41",
                }}
                activeTextStyle={{
                  color: "#e15f41",
                  fontWeight: "bold",
                }}
                tabBarUnderlineStyle={{
                  backgroundColor: "#e15f41",
                }}
                key={item.injestionId}
                heading={item.name}
              >
                <TabData
                  data={item}
                  navigation={navigation}
                  token={users.userToken}
                  dataType={GENRE}
                  fetchType="locality"
                />
              </Tab>
            );
          })}
        {users.isLoggedIn &&
          tabs.sources.length !== 0 &&
          tabs.sources.map((item) => {
            return (
              <Tab
                tabStyle={{
                  backgroundColor: "#FFF",
                }}
                textStyle={{
                  color: "#e15f41",
                }}
                activeTabStyle={{
                  backgroundColor: "#FFF",
                  color: "#e15f41",
                }}
                activeTextStyle={{
                  color: "#e15f41",
                  fontWeight: "bold",
                }}
                tabBarUnderlineStyle={{
                  backgroundColor: "#e15f41",
                }}
                key={item.injestionId}
                heading={item.name}
              >
                <TabData
                  data={item}
                  navigation={navigation}
                  token={users.userToken}
                  dataType={GENRE}
                  fetchType="source"
                />
              </Tab>
            );
          })}
        {users.isLoggedIn &&
          tabs.tags.length !== 0 &&
          tabs.tags.map((item) => {
            return (
              <Tab
                tabStyle={{
                  backgroundColor: "#FFF",
                }}
                textStyle={{
                  color: "#e15f41",
                }}
                activeTabStyle={{
                  backgroundColor: "#FFF",
                  color: "#e15f41",
                }}
                activeTextStyle={{
                  color: "#e15f41",
                  fontWeight: "bold",
                }}
                tabBarUnderlineStyle={{
                  backgroundColor: "#e15f41",
                }}
                key={item.injestionId}
                heading={item.name}
              >
                <TabData
                  data={item}
                  navigation={navigation}
                  token={users.userToken}
                  dataType={GENRE}
                  fetchType="tags"
                />
              </Tab>
            );
          })}
      </Tabs>
    </Container>
  );
};

export default NewsTabs;
