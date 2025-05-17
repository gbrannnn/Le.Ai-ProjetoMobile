import { Button, SafeAreaView, Text, TextInput } from "react-native-web";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useState } from "react";

import { styles_app, styles_login } from "../styles/styles";

export function Login({navigation}){
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleLogin = () => {
        // if(!email.includes('@') || senha.length < 6){
        // Alert.alert('Login é inválido');
        // alert('Login é inválido');
        // return;
        // }

        navigation.replace('Menu')
    }

    return(
        <SafeAreaProvider>
        <SafeAreaView style={styles_app.container}>
            <Text style={styles_login.text}>Login</Text>
            <TextInput
                value="email"
                onChangeText={setEmail}
                style={styles_login.textInput}
            />
            <TextInput
                value="senha"
                onChangeText={setSenha}
                style={styles_login.textInput}
            />
            <Button
                title="Entrar"
                style={styles_login.button}
                onPress={handleLogin}
            />
            <Button
                title="Cirar Conta"
                style={styles_login.button}
            />
        </SafeAreaView>
        </SafeAreaProvider>
    )
}