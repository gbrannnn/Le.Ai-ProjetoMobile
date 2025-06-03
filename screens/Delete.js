import React from 'react';
import { SafeAreaProvider } from "react-native-safe-area-context";
import {SafeAreaView,TouchableOpacity, View, Text, Image } from 'react-native';
import { db } from '../FireBaseConfig';
import { doc, deleteDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { styles_app, styles_home, styles_upload, styles_logout } from "../styles/styles";
import lixeira from '../assets/lixeiraBranca.png'

export function Delete({ route, navigation }) {
  const { fileId, fileName } = route.params;
  const auth = getAuth();
  const user = auth.currentUser;  

  const handleDelete = async () => {
    try {
      const fileRef = doc(db, 'usuarios', user.uid, 'pdfs', fileId); 
      await deleteDoc(fileRef);
      navigation.goBack();
    } catch (error) {
      console.error('Erro ao excluir arquivo:', error);
    }
  };

  return (
 <SafeAreaProvider>
            <SafeAreaView style={[styles_app.container, { backgroundColor: "#1D3557" }]}>
                <View style={styles_upload.container}>
                    <View style={styles_upload.card}>
                        <Image source={lixeira} style={styles_upload.image}/>
                        <Text style={styles_home.text}>Tem certeza que deseja excluir este arquivo?</Text>
                        <Text style={styles_home.text}>Nome do arquivo: {fileName}</Text>
                        <TouchableOpacity
                            style={[styles_upload.button,{backgroundColor: '#E29578'}]}
                            onPress={handleDelete}
                        >
                            <Text style={styles_upload.button.text}>Excluir</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles_upload.button, {backgroundColor: '#45A298'}]}
                            onPress={() => navigation.goBack()}
                        >
                            <Text style={styles_upload.button.text}>Cancelar</Text>

                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
  );
}
