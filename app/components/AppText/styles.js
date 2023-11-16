import { StyleSheet, Platform } from 'react-native';
const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        margin: 20,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenue"
    },
});

export default styles;