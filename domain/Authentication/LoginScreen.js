import { Button, Card, CardItem, Container, Content, Input } from "native-base";
import React from "react";
import { Image, Text } from "react-native";
import DailyButton from "../../components/DailyButton";
import styles from "./style";

const LoginScreen = ({ navigation }) => {
  return (
    <Container>
      <Content>
        <Card transparent>
          <CardItem style={{ justifyContent: "center" }}>
            <Image
              source={require("../../assets/images/logo.png")}
              style={{ alignSelf: "center" }}
            />
          </CardItem>
          <CardItem>
            <Input placeholder="Username" style={styles.input} />
          </CardItem>
          <CardItem>
            <Input
              placeholder="Password"
              secureTextEntry={true}
              style={styles.input}
            />
          </CardItem>
          <CardItem>
            <DailyButton>
              <Text style={styles.buttonText}>Login To Personalize!</Text>
            </DailyButton>
          </CardItem>
          <CardItem style={{ justifyContent: "center" }}>
            <Button
              style={{
                backgroundColor: "#f7d794",
                paddingHorizontal: 20,
                borderColor: "#f5cd79",
                borderWidth: 1,
                borderRadius: 4
              }}
              onPress={() => navigation.navigate("Register")}
            >
              <Text
                style={{
                  color: "#596275",
                  fontWeight: "bold"
                }}
              >
                Create New Account
              </Text>
            </Button>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
};

export default LoginScreen;
