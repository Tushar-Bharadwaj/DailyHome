import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const AddToTabButton = ({ navigation }) => {
  return (
    <TouchableOpacity
      style={{
        position: "absolute",
        top: 70,
        right: 3,
        zIndex: 99,
        backgroundColor: "#FFF",
      }}
      onPress={() => {
        navigation.push("TabNav");
      }}
    >
      <View>
        <Ionicons name="md-add-circle" size={20} color={"#e15f41"} />
      </View>
    </TouchableOpacity>
  );
};

export default AddToTabButton;
