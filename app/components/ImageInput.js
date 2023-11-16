import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";

import * as ImagePicker from "expo-image-picker";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function ImageInput({
  imageUri,
  onChangeImage,
  height = 100,
  width = 100,
  crop = false,
}) {
  const pickImage = async () => {
    //Checking for permission
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) {
      alert("enable permission ");
    } else {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        aspect: [4, 3],
        quality: 1,
        allowsEditing: crop,
      });

      if (!result.canceled) {
        onChangeImage(result.assets[0].uri);
      }
    }
  };

  const handlePress = () => {
    //If there is an picture the user can delete it, otherwise the user can add the picture
    if (!imageUri) {
      pickImage();
    } else {
      Alert.alert(
        "Delete",
        "Are you sure that you want to delete this image?",
        [{ text: "Yes", onPress: () => onChangeImage(null) }, { text: "No" }]
      );
    }
  };
  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={{ ...styles.container, height: height, width: width }}>
        {!imageUri && (
          <MaterialCommunityIcons color={colors.gray} name="camera" size={40} />
        )}
        {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.lighterGray,
    borderRadius: 15,
    justifyContent: "center",

    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
export default ImageInput;
