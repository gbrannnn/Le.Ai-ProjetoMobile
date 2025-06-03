import { StyleSheet } from "react-native";

export const styles_app = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D8F8B7',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const styles_home = StyleSheet.create({
  container: {
    flex: 1,
    width: '97%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#F1FAEE",
    borderRadius: 5
  },
  flatList: {
    width: '100%',
  },
  item: {
    width: 150,
    height: 250,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: "100%",
    height: 250,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: "#1D3557",
    borderRadius: 25,
  },
  text: {
    fontSize: 12,
    color: '#F1FAEE',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  ferramentas: {
    width: "100%",
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'left',
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  olho:{
    width: 28,
    height: 18,
    marginTop: 3,
  },
  caneta: {
    width: 16,
    height: 16,
    marginTop: 3,
  },
  lixeira: {
    width: 12,
    height: 18,
    marginTop: 3,
  }
})

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
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)', //Fundo preto com 60% de opacidade
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: '#1D3557',
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
  modalText: {
    color: '#F1FAEE',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  button: {
    width: 60,
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    sim: {
      backgroundColor: '#E29578',
      marginLeft: 15,
    },
    nao: {
      backgroundColor: '#45A298',
      marginRight: 15,
    }
  },
  textStyle: {
    color: '#F1FAEE',
    fontWeight: 'bold',
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
    position: 'relative',
    marginBottom: "20%",
  },
  nameFileCard: {
    paddingRight: 25,
    paddingLeft: 25,
    marginBottom: 20,
    alignContent: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: "#F1FAEE",
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
