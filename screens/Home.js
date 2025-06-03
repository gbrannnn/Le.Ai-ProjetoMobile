import { Button, SafeAreaView, Text, View, Image, FlatList ,TouchableOpacity} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { getAuth } from 'firebase/auth';
import { collection, getDocs, getDoc, updateDoc, setDoc, doc, arrayUnion } from 'firebase/firestore';
import { db } from '../FireBaseConfig';

import { useState, useEffect,useCallback  } from "react";
import { useFocusEffect } from '@react-navigation/native';

import { styles_app, styles_home } from "../styles/styles";
import caneta from '../assets/caneta.png';
import lixeira from '../assets/lixeira.png';
import olho from '../assets/olho.png';

export function Home({ navigation }) {
    const [listaPdfs, setListaPdf] = useState([]);

    const auth = getAuth();
    const user = auth.currentUser;

    const carregarDados = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, 'usuarios', user.uid, 'pdfs'));
            const documentos = [];
            querySnapshot.forEach((doc) => {
                const dados = doc.data();
                if (dados.arquivo) {
                    documentos.push({ name: dados.arquivo.nome, data: dados.arquivo.uri, id: doc.id});
                }
                
            });
            setListaPdf(documentos);
        } catch (error) {
            console.error('Erro ao carregar dados:', error);
        }
    }

    useFocusEffect(
        useCallback(() => {
        carregarDados();
        }, [])
    );
    return (
        <SafeAreaProvider>
            <SafeAreaView style={[styles_app.container, { backgroundColor: "#1D3557" }]}>
                <View style={styles_home.container}>
                    <FlatList
                        data={listaPdfs}
                        contentContainerStyle={styles_home.flatList}
                        numColumns={2}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <View style={styles_home.item}>        
                                <View style={styles_home.card}>
                                        <Text style={styles_home.text}>{item.name}</Text>
                                </View>
                                <View style={styles_home.ferramentas}>
                                    <TouchableOpacity
                                        title="Editar"
                                    >
                                        <Image source={caneta} style={styles_home.caneta}/>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        title="Excluir"
                                    >
                                        <Image source={lixeira} style={styles_home.lixeira}/>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        title="Abrir"
                                        onPress={() => navigation.navigate('RenderPdf', { file : item.data })}
                                    >
                                        <Image source={olho} style={styles_home.olho}/>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )}
                    />
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}