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
  let data;
  if (users.isLoggedIn) data = users.following.genres;
  else data = generalNavigation;
  const navigation = useNavigation();
  return (
    <Container style={{ backgroundColor: "#FFF" }}>
      <AddToTabButton navigation={navigation} />
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
            />
          </Tab>
        )}
        {data !== undefined &&
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
                />
              </Tab>
            );
          })}
      </Tabs>
    </Container>
  );
};

export default NewsTabs;
