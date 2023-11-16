import React from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import NetInfo, { useNetInfo } from "@react-native-community/netinfo";

import AppText from "./Text";
import colors from "../config/colors";

function OfflineNotice(props) {
  const netInfo = useNetInfo();

  if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false) {
    return (
      <View style={styles.container}>
        <AppText style={styles.text}>No internet Connection</AppText>
      </View>
    );
  } else {
    return null;
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    height: 50,
    position: "absolute",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    zIndex: 3,
    width: "100%",
  },
  text: {
    color: colors.white,
    textAlign: "center",
  },
});
export default OfflineNotice;
