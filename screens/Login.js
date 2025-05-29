import { Button, SafeAreaView,View, Text, TextInput, TouchableOpacity} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Alert } from "react-native";
import { useState } from "react";

import { auth } from "../FireBaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

import { Logon } from "./Logon";

import { styles_app, styles_login } from "../styles/styles";

export function Login({navigation}){
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const handleLogin = async () => {
        if(!email.includes(".com") || !email.includes("@")){
            alert("E-mail inválido!!!!!!!!!!!!!!!")
            return;
        }

        if(senha.length < 6){
            Alert.alert("Senha menor que 6 digitos");
            alert("Senha menor que 6 digitos")
            return;
        }

        try{
            const user = await signInWithEmailAndPassword(auth, email, senha);
            if (user) navigation.replace("Menu");
        }catch(error){
            console.log(error);
            alert(`Erro ao realizar login: ${error}`);
            return;
        }
    }

    return(
        <SafeAreaProvider>
        <SafeAreaView style={styles_login.container}>
            <View style={[styles_login.topLeftCircle ,{ backgroundColor: "#2F5D6E" }, {}]} />
            <View style={[styles_login.bottomRightCircle,{ backgroundColor: "#2F5D6E" }]} />
            <Text style={styles_login.text}>Login</Text>
            <TextInput
                inputMode="email"
                keyboardType="email-address"
                placeholder="email"
                placeholderTextColor="#d3d3d3"
                onChangeText={setEmail}
                value={email}
                style={styles_login.textInput}
            />
            <TextInput
                inputMode="text"
                keyboardType="default"
                placeholder="senha"
                placeholderTextColor="#d3d3d3"
                onChangeText={setSenha}
                secureTextEntry={true}
                value={senha}
                style={styles_login.textInput}
            />
            <TouchableOpacity 
                style={styles_login.button}
                onPress={handleLogin}
                >
                <Text style={styles_login.button_text}>Entrar</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={[styles_login.button, {backgroundColor: "#3D899C", marginTop: 20}]}
                onPress={() => navigation.navigate("Logon")}
                >
                <Text style={styles_login.button_text}>Criar Conta</Text>
            </TouchableOpacity>
        </SafeAreaView>
        </SafeAreaProvider>
    )
}