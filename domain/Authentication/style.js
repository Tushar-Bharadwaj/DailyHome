import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#e15f41",
    elevation: 5,
    alignItems: "center",
    shadowColor: "#000"
  },
  headerText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 19
  },
  formContainer: {
    justifyContent: "center",
    textAlign: "center"
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#CCC",
    fontSize: 15,
    textAlign: "center",
    borderRadius: 5,
    backgroundColor: "#FAFAFA"
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "bold"
  }
});

export default styles;
