import React from "react";
import { Button, Text } from "native-base";
import { View, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";

export default class ImageUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
    };
  }

  render() {
    let { image } = this.state;
    let handleSubmit = this.props.handleSubmit;
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        {image ? (
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
        ) : (
          <Image
            source={require("../assets/images/logo.png")}
            style={{ alignSelf: "center", height: 200, width: 200 }}
          />
        )}
        <Button
          style={{ backgroundColor: "#e77f67" }}
          onPress={this._pickImage}
        >
          <Text>Select Image</Text>
        </Button>
        {console.log("Image Upload")}
      </View>
    );
  }

  componentDidMount() {
    this.getPermissionAsync();
  }

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    }
  };

  _pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
        base64: true,
      });
      if (!result.cancelled) {
        this.setState({ image: result.uri });
      }
      this.props.handleSubmit(result.base64);
    } catch (E) {
      console.log(E);
    }
  };
}
