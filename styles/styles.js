import { StyleSheet } from "react-native";

export const styles_app = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8EC',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const styles_login = StyleSheet.create({
    textInput: {
        backgroundColor: '#FFFFFF',
        textAlign: 'center',
        margin: 10,
        borderRadius: 20,
        shadowColor: 'black',
        shadowOffset: { 
            width: -1.5,
            height: 3,
        },
        shadowOpacity: 0.20,
    },
    text: {
        fontSize: 20,
    },
    button: {
        backgroundColor: '#8BA6AC',
        borderRadius: 20,
    }
})