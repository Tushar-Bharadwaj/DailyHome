import React from "react";
import { StyleSheet } from "react-native";
import { Button } from "native-base";

const DailyButton = props => {
  return (
    <Button style={styles.button} onPress={props.onPress}>
      {props.children}
    </Button>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#e15f41",
    width: "100%",
    height: 50,
    justifyContent: "center"
  }
});

export default DailyButton;
