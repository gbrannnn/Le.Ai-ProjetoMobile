import { SafeAreaView, Text, Modal, Pressable, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useState } from "react";
import { CommonActions } from '@react-navigation/native';

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
        signOut(auth)
            .then(() => {
            console.log("Logout realizado com sucesso");


            navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [{ name: 'Login' }],
                })
            );
            })
            .catch((error) => {
            console.log("Erro ao realizar o logout:", error);           
         });
        return;
    };

    return (
        <SafeAreaProvider>
            <SafeAreaView style={[styles_app.container]}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => setModalVisible(false)}
                >
                    <View style={styles_logout.modalBackground}>
                        <View style={styles_logout.modalView}>
                            <Text style={styles_logout.modalText}>Deseja sair da sua conta?</Text>
                            <View style={[{ flexDirection: "row", justifyContent: "space-around"}]}>
                                <Pressable
                                    style={[styles_logout.button, styles_logout.button.nao]}
                                    onPress={() => handlerLogout(false)}
                                >
                                    <Text style={styles_logout.textStyle}>Não</Text>
                                </Pressable>

                                <Pressable
                                    style={[styles_logout.button, styles_logout.button.sim]}
                                    onPress={() => handlerLogout(true)}
                                >
                                    <Text style={styles_logout.textStyle}>Sim</Text>
                                </Pressable>
                            </View>
                        </View>
                    </View>
                </Modal>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}