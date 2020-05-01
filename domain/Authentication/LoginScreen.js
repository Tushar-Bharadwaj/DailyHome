import { AppLoading } from "expo";
import {
  Button,
  Card,
  CardItem,
  Container,
  Content,
  Input,
  Toast,
} from "native-base";
import React, { useEffect, useState } from "react";
import { Image, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import DailyButton from "../../components/DailyButton";
import ErrorCard from "../../components/ErrorCard";
import useForm from "../../hooks/useForm";
import { signInUser, fetchUserDetails } from "../../redux/users/userActions";
import styles from "./style";

const validateForm = ({ email, password }) => {
  const errors = {
    email: [],
    password: [],
    hasError: false,
  };
  const emailRegex = /\S+@\S+\.\S+/;
  if (email.trim().length < 6 || email.trim().length > 80) {
    errors.email.push("Email address must be 6 to 80 characters long.");
  }
  if (!emailRegex.test(email)) {
    errors.email.push("Please enter a valid email address");
  }
  if (password.trim().length < 6 || password.trim().length > 50) {
    errors.password.push("A password must be 6 to 50 characters long");
  }

  if (errors.password.length > 0 || errors.email.length > 0) {
    errors.hasError = true;
  }
  return errors;
};

const LoginScreen = ({ navigation, route }) => {
  const initalFormState = {
    email: "",
    password: "",
  };

  const [isLoading, setIsLoading] = useState(false);

  const [errors, setErrors] = useState({
    email: [],
    password: [],
  });

  const [formInputs, handleChange] = useForm(initalFormState);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users);
  const handleSubmit = (input) => {
    setErrors({});
    const errorResult = validateForm(input);
    if (errorResult.hasError) {
      setErrors(errorResult);
    } else {
      setIsLoading(false);
      dispatch(signInUser(input));
      console.log(user.userToken);
      dispatch(fetchUserDetails(user.userToken));
      console.log(user);
      navigation.navigate("Profile");
    }
  };

  useEffect(() => {
    //Making Sure, upon account creation we go to login page.
    if (
      route.params?.accountCreated != undefined &&
      route.params.accountCreated
    ) {
      Toast.show({
        text: "Your account has been successfully created!",
        buttonText: "Okay",
        type: "success",
      });
      route.params.accountCreated = false;
    }
  }, [route.params]);

  return !isLoading ? (
    <Container>
      <Content>
        <Card transparent>
          <CardItem style={{ justifyContent: "center" }}>
            <Image
              source={require("../../assets/images/logo.png")}
              style={{ alignSelf: "center" }}
            />
          </CardItem>

          <ErrorCard>{errors.email?.join("\n")}</ErrorCard>
          <CardItem
            style={{
              paddingTop: 3,
              paddingBottom: 3,
            }}
          >
            <Input
              placeholder="Email"
              style={styles.input}
              onChangeText={(val) => handleChange("email", val)}
            />
          </CardItem>

          <ErrorCard>{errors.password?.join("\n")}</ErrorCard>
          <CardItem style={{ paddingTop: 3 }}>
            <Input
              placeholder="Password"
              secureTextEntry={true}
              style={styles.input}
              onChangeText={(val) => handleChange("password", val)}
            />
          </CardItem>

          <CardItem>
            <DailyButton onPress={() => handleSubmit(formInputs)}>
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
                borderRadius: 4,
              }}
              onPress={() => navigation.navigate("Register")}
            >
              <Text
                style={{
                  color: "#596275",
                  fontWeight: "bold",
                }}
              >
                Create New Account
              </Text>
            </Button>
          </CardItem>

          <CardItem style={{ justifyContent: "center" }}>
            <Button
              style={{
                backgroundColor: "#f7d794",
                paddingHorizontal: 20,
                borderColor: "#f5cd79",
                borderWidth: 1,
                borderRadius: 4,
              }}
              onPress={() => navigation.navigate("Profile")}
            >
              <Text
                style={{
                  color: "#596275",
                  fontWeight: "bold",
                }}
              >
                Go To Profile
              </Text>
            </Button>
          </CardItem>
        </Card>
      </Content>
    </Container>
  ) : (
    <AppLoading />
  );
};

export default LoginScreen;
