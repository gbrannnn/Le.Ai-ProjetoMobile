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
        textAlign: 'left',
        paddingLeft: 10,
        margin: 10,
        borderRadius: 20,
        borderWidth: 0,
        shadowColor: 'black',
        shadowOffset: { 
            width: -1.5,
            height: 3,
        },
        shadowOpacity: 0.18,
    },
    text: {
        fontSize: 20,
    },
    button: {
        margin: 20,
        width: 100,
        height: 30,
        backgroundColor: '#8BA6AC',
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        fontSize: 10
    },
    button_text: {
        color:"white"
    }
});

export const styles_splash = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    resizeMode: "cover"
  },
  
})
