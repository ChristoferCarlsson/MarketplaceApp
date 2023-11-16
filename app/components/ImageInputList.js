import React, { useRef } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import ImageInput from "./ImageInput";

function ImageInputList({
  imageUris = [],
  onRemoveImage,
  onAddImage,
  height,
  width,
  crop,
}) {
  const scrollView = useRef();

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollView}
        horizontal
        onContentSizeChange={() => scrollView.current.scrollToEnd()}
      >
        {imageUris.map((uri) => (
          <View style={styles.image} key={uri}>
            <ImageInput
              imageUri={uri}
              onChangeImage={() => onRemoveImage(uri)}
            />
          </View>
        ))}
        <View style={styles.image}>
          <ImageInput
            onChangeImage={(uri) => onAddImage(uri)}
            height={height}
            width={width}
            crop={crop}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    margin: 5,
  },
});
export default ImageInputList;
