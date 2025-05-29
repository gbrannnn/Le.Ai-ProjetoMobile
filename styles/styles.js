import { StyleSheet } from "react-native";

export const styles_app = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D8F8B7',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const styles_login = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#D8F8B7',
      alignItems: 'center',
      justifyContent: 'center',
  },
  textInput: {
      width: 300,
      height: 35,
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
      fontSize: 32,
      fontWeight: 'bold',
      color: '#1D3557',
      marginBottom: 50,
      
  },
  topRightCircle: {
    position: 'absolute',
    top: -100,
    right: -100,
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 30,
    borderColor: '#2F5D6E',
    backgroundColor: 'transparent',
  },
  bottomLeftCircle: {
    position: 'absolute',
    bottom: -100,
    left: -100,
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 30,
    borderColor: '#2F5D6E',
    backgroundColor: 'transparent',
  },

  topLeftCircle: {
    position: 'absolute',
    top: -100,
    left: -100,
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 30,
    borderColor: '#2F5D6E',
    backgroundColor: 'transparent',
  },
  bottomRightCircle: {
    position: 'absolute',
    bottom: -100,
    right: -100,
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 30,
    borderColor: '#2F5D6E',
    backgroundColor: 'transparent',
  },
  button: {
      marginTop: 50,
      width: 150,
      height: 30,
      backgroundColor: '#45A298',
      borderRadius: 20,
      alignItems: "center",
      justifyContent: "center",
      fontSize: 10
  },
  button_text: {
      fontSize: 12,
      fontWeight: 'bold',
      color: "#F1FAEE"
  }
});

export const styles_splash = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D8F8B7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "cover"
  },
    topRightCircle: {
    position: 'absolute',
    top: -100,
    right: -100,
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 30,
    borderColor: '#2F5D6E',
    backgroundColor: 'transparent',
  },
  bottomLeftCircle: {
    position: 'absolute',
    bottom: -100,
    left: -100,
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 30,
    borderColor: '#2F5D6E',
    backgroundColor: 'transparent',
  },
  spinner: {
    marginVertical: 20,
    transform: [{ scale: 1.5 }],
  },

  
});

export const styles_icon = StyleSheet.create({
  iconContainer: {
    padding: 8,
    borderRadius: 30,
  },
  icon: {
    display: 'flex',
  },

  iconFocused: {
    borderWidth: 2,
    borderColor: '#000',
    backgroundColor: '#E0E0D1',
  },
});

export const styles_logout = StyleSheet.create({
    centeredView: {
        //flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});

export const styles_upload = StyleSheet.create({
    container: {
        flex: 1,
        width: '97%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#F1FAEE",
        borderRadius: 5
    },
    card: {
        width: 320,
        height: 575,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#1D3557",
        borderRadius: 50,
    },
    image: {
        width: 160,
        height: 140,
        resizeMode: "contain",
    },

    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "#1D3557",
    },
    button: {
        width: 130,
        height: 45,
        backgroundColor: '#45A298',
        borderRadius: 20,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        text: {
            fontSize: 12,
            color: '#F1FAEE',
            fontWeight: 'bold',
        }
    }
});
