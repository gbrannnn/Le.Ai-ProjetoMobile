import React, { useState, useEffect } from 'react';
import {SafeAreaView,TouchableOpacity, View, Text, Image,TextInput } from 'react-native';
import { db } from '../FireBaseConfig';
import { doc, updateDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import caneta from '../assets/canetaBranca.png'
import { SafeAreaProvider } from "react-native-safe-area-context";

import { styles_app, styles_home, styles_upload, styles_login } from "../styles/styles";


export function Update({ route, navigation }) {
  const [newName, setNewName] = useState('');
  const { fileId, currentName } = route.params;
  const auth = getAuth();
  const user = auth.currentUser;  

  useEffect(() => {
    setNewName(currentName);
  }, [currentName]);

  const handleUpdate = async () => {
    try {
      const fileRef = doc(db, 'usuarios', user.uid, 'pdfs', fileId);    
      await updateDoc(fileRef, { 'arquivo.nome': newName });
      navigation.goBack();
    } catch (error) {
      console.error('Erro ao atualizar arquivo:', error);
    }
  };

    return (
   <SafeAreaProvider>
              <SafeAreaView style={[styles_app.container, { backgroundColor: "#1D3557" }]}>
                  <View style={styles_upload.container}>
                      <View style={styles_upload.card}>
                          <Image source={caneta} style={styles_upload.image}/>
                          <Text style={styles_home.text}>Editar Nome</Text>
                          <TextInput
                                value={newName}
                                onChangeText={setNewName}
                                placeholder="Digite um novo nome"
                                style={styles_login.textInput}
                               
                            />                          
                          <TouchableOpacity
                              style={[styles_upload.button, {backgroundColor: '#45A298'}]}
                              onPress={handleUpdate}
                          >
                              <Text style={[styles_upload.button.text]}>Atualizar</Text>
                          </TouchableOpacity>
                          <TouchableOpacity
                              style={[styles_upload.button,{backgroundColor: '#E29578'}]}
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
  


