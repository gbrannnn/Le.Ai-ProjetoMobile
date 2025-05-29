import { SafeAreaProvider } from "react-native-safe-area-context";
import { SafeAreaView, Text, View, TouchableOpacity, Button, Image } from "react-native";
import UploadImage from '../assets/uploadImage.png'
import React, { useState } from 'react';

import * as DocumentPicker from 'expo-document-picker';

import { styles_app, styles_upload} from "../styles/styles";

export function Upload({navigation}) {
    const [file, setFile] = useState(null);

    const handleDocumentPicker = async () => {
        try {
            const result = await DocumentPicker.getDocumentAsync({
                type: 'application/pdf',
                copyToCacheDirectory: true,
                multiple: false,
            });

            if (result.canceled)return;
            
            console.log('Documento selecionado:', result);
            setFile(result.assets[0]);
            console.log('Arquivo selecionado:', file);
        } catch (error) {
            console.error('Erro ao selecionar documento:', error);
        }
    };

    return (
        <SafeAreaProvider>
            <SafeAreaView style={[styles_app.container, { backgroundColor: "#1D3557" }]}>
                <View style={styles_upload.container}>
                    <View style={styles_upload.card}>
                        <Image source={UploadImage} style={styles_upload.image}/>
                        <TouchableOpacity
                            style={styles_upload.button}
                            onPress={() => handleDocumentPicker()}
                        >
                            <Text style={styles_upload.button.text}>Adicionar</Text>
                            <Text style={styles_upload.button.text}>Arquivo</Text>
                        </TouchableOpacity>
                        {file && (
                            <View>
                                <Text style={styles_upload.text}>Nome: {file.name}</Text>
                            </View>
                        )}
                        <TouchableOpacity
                            style={[styles_upload.button, {backgroundColor: "#3D899C"}]}
                            onPress={() => navigation.navigate('Menu')}
                        >
                            <Text style={styles_upload.button.text}>Voltar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}