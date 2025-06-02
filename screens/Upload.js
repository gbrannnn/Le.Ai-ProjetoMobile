import { SafeAreaProvider } from "react-native-safe-area-context";
import { SafeAreaView, Text, View, TouchableOpacity, Image } from "react-native";
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
    const [novaCategoria, setNovaCategoria] = useState('');
    const [novoItem, setNovoItem] = useState('');

    useEffect(() => {
        carregarDados();
        }, []);

    

    const auth = getAuth();
    const user = auth.currentUser;

    const carregarDados = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, 'categorias'));
            const categorias = [];

            querySnapshot.forEach((doc) => {
            if (doc.data().userId === user.uid) {
                categorias.push({
                categoria: doc.id,
                data: doc.data(),
                });
            }
            });

            setData(categorias);
        } catch (error) {
            console.error('Erro ao carregar dados:', error);
        }
    };

    const handleDocumentPicker = async () => {
        try {
            const result = await DocumentPicker.getDocumentAsync({
                type: 'application/pdf',
                copyToCacheDirectory: true,
                multiple: false,
                base64: false,
            });

            if (result.canceled)return;
            
            setFile(result.assets[0]);
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
            
            const categoriaExistente = data.find(
            (d) => d.categoria === novaCategoria && d.userId === user.uid
            );

            // 👇 Cria o item com metadados do arquivo (se existir)
            const itemComArquivo = {
            nome: novoItem,
            arquivo: file
                ? {
                    nome: file.name,
                    uri: file.uri,
                    tipo: file.mimeType || 'application/pdf',
                    tamanho: file.size,
                }
                : null,
            };

            const novaLista = categoriaExistente
            ? [...categoriaExistente.data, itemComArquivo]
            : [itemComArquivo];

            const categoriaRef = doc(db, 'categorias', `${user.uid}_${novaCategoria}`);
                    // Verifica se o documento já existe
            const categoriaDoc = await getDoc(categoriaRef);

            if (categoriaDoc.exists()) {
                // Atualiza adicionando item ao array 'data' usando arrayUnion
                await updateDoc(categoriaRef, {
                    data: arrayUnion(itemComArquivo)
                });
            } else {
                await setDoc(categoriaRef, {
                    data: novaLista,
                    categoria: novaCategoria,
                    userId: user.uid,
                });
            }
            // Limpa tudo depois de salvar
            setNovaCategoria('');
            setNovoItem('');
            setFile(null);
            setModalVisible(false);
            carregarDados();
            console.log('Item salvo: ',novaLista);
        } catch (error) {
            console.error('Erro ao adicionar item:', error);
            alert('Erro ao adicionar item');
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
                            onPress={handleDocumentPicker}
                        >
                            <Text style={styles_upload.button.text}>Selecionar</Text>
                            <Text style={styles_upload.button.text}>Arquivo</Text>
                        </TouchableOpacity>
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