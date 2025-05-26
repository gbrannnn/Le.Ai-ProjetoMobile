import { Button, SafeAreaView, Text, TextInput, TouchableOpacity} from "react-native-web";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useState } from "react";

import { auth } from "../FireBaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { styles_app, styles_login } from "../styles/styles";
import { Alert } from "react-native";

export function Logon({navigation}){
    const [usuario, setUsuario] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [senhaCheck, setSenhaCheck] = useState("");

    const handleLogon = async () => {
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
            const user = await createUserWithEmailAndPassword(auth, email, senhaCheck);
            if (user) navigation.replace("Menu");
        }catch(error){
            console.log(error);
            alert(`Erro ao realizar logon: ${error}`);
            return;
        }
    }

    return(
        <SafeAreaProvider>
        <SafeAreaView style={styles_login.container}>
            <Text style={styles_login.text}>Criar Conta</Text>
            <TextInput
                inputMode="text"
                keyboardType="default"
                placeholder="username"
                placeholderTextColor="#d3d3d3"
                onChangeText={setUsuario}
                value={usuario}
                style={styles_login.textInput}
            />
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
                value={senha}
                style={styles_login.textInput}
            />
            <TextInput
                inputMode="text"
                keyboardType="default"
                placeholder="senha check"
                placeholderTextColor="#d3d3d3"
                onChangeText={setSenhaCheck}
                value={senhaCheck}
                style={styles_login.textInput}
            />
            <TouchableOpacity 
                style={[styles_login.button, {backgroundColor: "#3D899C"}]}
                onPress={handleLogon}
                >
                <Text style={styles_login.button_text}>Criar</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={[styles_login.button, {marginTop: 20}]}
                onPress={navigation.goBack}
                >
                <Text style={styles_login.button_text}>Voltar</Text>
            </TouchableOpacity>
        </SafeAreaView>
        </SafeAreaProvider>
    )
}