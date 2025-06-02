import { Button, SafeAreaView, Text, View, FlatList ,TouchableOpacity} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { styles_app, styles_upload } from "../styles/styles";

import { getAuth } from 'firebase/auth';
import { collection, getDocs, getDoc, updateDoc, setDoc, doc, arrayUnion } from 'firebase/firestore';
import { db } from '../FireBaseConfig';

import { useState, useEffect } from "react";


export function Home({ navigation }) {
    const [listaPdfs, setListaPdf] = useState([]);

    const auth = getAuth();
    const user = auth.currentUser;

    const carregarDados = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, 'categorias'));
            const documentos = [];
            querySnapshot.forEach((doc) => {
                if (doc.data().userId === user.uid) {
                    (doc.data().data).forEach((data) => {
                        documentos.push({ name: data.arquivo.nome, data: data.arquivo.uri});
                    })
                }
            });
            setListaPdf(documentos);
        } catch (error) {
            console.error('Erro ao carregar dados:', error);
        }
    }

    useEffect(() => {
        carregarDados(); 
    }, []);

    return (
        <SafeAreaProvider>
            <SafeAreaView style={[styles_app.container, { backgroundColor: "#1D3557" }]}>
                <View style={[styles_upload.container, {width: '100%', height: '100%', padding: 0, margin: 0}]}>
                    <FlatList
                        data={listaPdfs}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                title="Abrir"
                                onPress={() => navigation.navigate('RenderPdf', { file : item.data })}
                            >
                                <View style={[styles_upload.card, { width: '300', height: '100', borderRadius: 0 , marginBottom: 15, marginTop: 15, textAlign: 'center', justifyContent: 'center', alignItems: 'center', padding: 20 }]}>
                                        <Text style={styles_upload.button.text}>{item.name}</Text>
                                </View>
                            </TouchableOpacity>
                            
                        )}
                    />
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}