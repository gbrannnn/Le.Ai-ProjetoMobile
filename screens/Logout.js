import { SafeAreaView, Text, Modal, Pressable, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useState } from "react";

import { getAuth, signOut } from "firebase/auth";

import { styles_app, styles_logout } from "../styles/styles";

export function Logout({ navigation }) {
    const [modalVisible, setModalVisible] = useState(true);

    const handlerLogout = (isLogout) => {
        if (!isLogout) {
            console.log("Cancelou logout");
            navigation.replace("Menu");
            return;
        }

        const auth = getAuth();
        signOut(auth).then(() => {
            console.log("Logout realizado com sucesso");
            navigation.replace("Login");
        }).catch((error) => {
            console.log(error);
        });
        return;
    };

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles_app.container}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => setModalVisible(false)}
                >
                    <View style={styles_logout.centeredView}>
                        <View style={styles_logout.modalView}>
                            <Text style={styles_logout.modalText}>Deseja sair da sua conta?</Text>

                            <Pressable
                                style={[styles_logout.button, styles_logout.buttonClose]}
                                onPress={() => handlerLogout(false)}
                            >
                                <Text style={styles_logout.textStyle}>Não</Text>
                            </Pressable>

                            <Pressable
                                style={[styles_logout.button, styles_logout.buttonClose]}
                                onPress={() => handlerLogout(true)}
                            >
                                <Text style={styles_logout.textStyle}>Sim</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}