import {
  Button,
  Card,
  CardItem,
  Container,
  Content,
  Header,
  Input
} from "native-base";
import React, { useState } from "react";
import { Image, Text } from "react-native";
import DailyButton from "../../components/DailyButton";
import styles from "./style";
import ErrorCard from "../../components/ErrorCard";
import useForm from "../../hooks/useForm";

const validateForm = ({ name, email, password }) => {
  const errors = {
    email: [],
    password: [],
    name: [],
    hasError: false
  };
  const emailRegex = /\S+@\S+\.\S+/;
  if (email.length < 6 || email.length > 80) {
    errors.email.push("Email address must be 6 to 80 characters long.");
  }
  if (!emailRegex.test(email)) {
    errors.email.push("Please enter a valid email address");
  }
  if (password.length < 6 || password.length > 50) {
    console.log(password);
    errors.password.push("A password must be 6 to 50 characters long");
  }
  if (name.length < 6) {
    errors.name.push("Name must be atleast 6 characters long.");
  }

  if (
    errors.password.length > 0 ||
    errors.name.length > 0 ||
    errors.email.length > 0
  ) {
    errors.hasError = true;
  }
  return errors;
};

const RegistrationScreen = ({ navigation }) => {
  const initialFormState = {
    name: "",
    email: "",
    password: ""
  };
  const [errors, setErrors] = useState({
    name: [],
    password: [],
    email: [],
    hasError: false
  });

  const [formInput, handleChange] = useForm(initialFormState);

  const handleSubmit = input => {
    setErrors({});
    const errorResult = validateForm(input);
    if (errorResult.hasError) {
      setErrors(errorResult);
    }
  };

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

          <ErrorCard>{errors.name?.join("\n")}</ErrorCard>
          <CardItem style={{ paddingTop: 3, paddingBottom: 3 }}>
            <Input
              placeholder="Name"
              style={styles.input}
              onChangeText={val => handleChange("name", val)}
            />
          </CardItem>

          <ErrorCard>{errors.email?.join("\n")}</ErrorCard>
          <CardItem style={{ paddingTop: 3, paddingBottom: 3 }}>
            <Input
              placeholder="Email"
              style={styles.input}
              onChangeText={val => handleChange("email", val)}
            />
          </CardItem>

          <ErrorCard>{errors.password?.join("\n")}</ErrorCard>
          <CardItem style={{ paddingTop: 3, paddingBottom: 3 }}>
            <Input
              placeholder="Password"
              secureTextEntry={true}
              style={styles.input}
              onChangeText={val => handleChange("password", val)}
            />
          </CardItem>
          <CardItem>
            <DailyButton onPress={() => handleSubmit(formInput)}>
              <Text style={styles.buttonText}>Register!</Text>
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
              onPress={() => navigation.goBack()}
            >
              <Text
                style={{
                  color: "#596275",
                  fontWeight: "bold"
                }}
              >
                Already Have An Account?
              </Text>
            </Button>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
};

export default RegistrationScreen;
