import { SafeAreaProvider } from "react-native-safe-area-context";
import { SafeAreaView, Text, View, TouchableOpacity, Button, Image } from "react-native";
import UploadImage from '../assets/uploadImage.png'
import React, { useState, useEffect } from 'react';

import * as DocumentPicker from 'expo-document-picker';

import { styles_app, styles_upload} from "../styles/styles";

import { getAuth } from 'firebase/auth';

import { collection, getDocs,getDoc,updateDoc, setDoc, doc,arrayUnion  } from 'firebase/firestore';


import {db} from '../FireBaseConfig'



export function Upload({navigation}) {
    const [file, setFile] = useState(null);
    const [data, setData] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [novaCategoria, setNovaCategoria] = useState('');
    const [novoItem, setNovoItem] = useState('');

    useEffect(() => {
        carregarDados();
        }, []);

    

    const auth = getAuth();
    const user = auth.currentUser;


    const carregarDados = async () => {
        const auth = getAuth();
        const user = auth.currentUser;

        if (!user) return;

        try {
            const pdfsSnapshot = await getDocs(collection(db, 'usuarios', user.uid, 'pdfs'));
            const listaPDFs = [];

            pdfsSnapshot.forEach((doc) => {
            listaPDFs.push({
                id: doc.id,
                ...doc.data(),
            });
            });

            setData(listaPDFs);
        } catch (error) {
            console.error('Erro ao carregar PDFs:', error);
        }
    };

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
    const adicionarItem = async () => {
        const auth = getAuth();
        const user = auth.currentUser;

        if (!user) {
            alert('Usuário não autenticado!');
            return;
        }

        try {
            const itemComArquivo = {
            nome: novoItem,
            categoria: novaCategoria,
            arquivo: file
                ? {
                    nome: file.name,
                    uri: file.uri,
                    tipo: file.mimeType || 'application/pdf',
                    tamanho: file.size,
                }
                : null,
            criadoEm: new Date(),
            };

            // 👇 Cria um novo documento na subcoleção pdfs
            const pdfRef = doc(collection(db, 'usuarios', user.uid, 'pdfs'));
            await setDoc(pdfRef, itemComArquivo);

            // Limpa os campos
            setNovaCategoria('');
            setNovoItem('');
            setFile(null);
            setModalVisible(false);
            carregarDados(); // nova versão
        } catch (error) {
            console.error('Erro ao adicionar PDF:', error);
            alert('Erro ao adicionar PDF');
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
                            <Text style={styles_upload.button.text}>Selecionar</Text>
                            <Text style={styles_upload.button.text}>Arquivo</Text>
                        </TouchableOpacity>
                        {file && (
                            <View>
                                <Text style={styles_upload.text}>Nome: {file.name}</Text>
                            </View>
                        )}
                        <TouchableOpacity
                            style={[styles_upload.button, {backgroundColor: "#3D899C"}]}
                            onPress={() => adicionarItem()}
                        >
                            <Text style={styles_upload.button.text}>Adicionar</Text>
                            <Text style={styles_upload.button.text}>Arquivo</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}