import React from 'react';
import { StyleSheet, StatusBar, View, Image, Platform } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

import colors from '../config/colors';

export default function ViewImageScreen () {
  return (
    <View style={styles.container}>
      <View style={styles.colorContainer}>
            <MaterialCommunityIcons name="close" color="white" size={35}/>
            <MaterialCommunityIcons name="trash-can-outline" color="white" size={35}/>
      </View>
      <Image source={require('../assets/chair.jpg')} style={styles.image}/>
      <StatusBar backgroundColor = {colors.black} />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    
  },
  image: {
    flex: 1,
    width: "100%",
    objectFit: "contain"
  },
  colorContainer: {
    display: "flex",
    width: "100%",
    padding: 30,
    flexDirection:"row",
    justifyContent:"space-between",
    position:"absolute"
  },
  imageContainer: {
    width: 250,
    height: 150,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    top: 100
  },
});


// import React from 'react';
// import { Image, StyleSheet, View } from 'react-native';

// function ViewImageScreen(props) {
//   return (
//     <View style={styles.container}>
//       <View style={styles.closeIcon}></View>
//       <View style={styles.deleteIcon}></View>
//       <Image style={styles.image} source={require("../assets/chair.jpg")}/>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   closeIcon: {
//     width: 50,
//     height: 50,
//     backgroundColor: "#fc5c65",
//     position: "absolute",
//     top: 40,
//     left: 30
//   },
//   deleteIcon: {
//     width: 50,
//     height: 50,
//     backgroundColor: "#4ecdc4",
//     position: "absolute",
//     top: 40,
//     right: 30
//   },
//   container: {
//     backgroundColor: "black",
//     flex: 1
//   },
//   image: {
//     width: "100%",
//     height: "100%",
//     objectFit: "contain"
//   }
// })

// export default ViewImageScreen;