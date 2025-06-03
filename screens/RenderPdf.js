import React, { useEffect, useState } from 'react';
import { SafeAreaView, TouchableOpacity, Text, Modal, Platform, Alert } from 'react-native';
import { WebView } from 'react-native-webview';
import * as Sharing from 'expo-sharing';

export function RenderPdf({ route, navigation }) {
  const { file } = route.params; // file.uri esperado
  const [modalVisible, setModalVisible] = useState(true);

  const closePDF = () => {
    setModalVisible(false);
    navigation.replace('Menu');
  };

  useEffect(() => {
    if (Platform.OS === 'android') {
      openPDFWithSharing(file);
    }
  }, []);

  const openPDFWithSharing = async (fileUri) => {
    try {
        if (!fileUri || !fileUri.startsWith('file://')) {
            Alert.alert('Erro', 'Arquivo inválido ou não disponível localmente.');
            navigation.replace('Menu')
            return;
        }
      const isAvailable = await Sharing.isAvailableAsync();
      if (!isAvailable) {
        Alert.alert('Erro', 'Compartilhamento não suportado neste dispositivo');
        navigation.replace('Menu')
        return;
      }
      await Sharing.shareAsync(fileUri, { mimeType: 'application/pdf' });
      navigation.replace('Menu');
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível abrir o PDF.');
      console.error('Erro ao abrir PDF:', error);
      navigation.replace('Menu')
    }
  };

  if (Platform.OS === 'android') return null;

  return (
    <Modal visible={modalVisible} animationType="slide" onRequestClose={closePDF}>
      <SafeAreaView style={{ flex: 1 }}>
        <TouchableOpacity
          style={{ padding: 15, backgroundColor: '#1D3557' }}
          onPress={closePDF}
        >
          <Text style={{ color: 'white', fontSize: 18 }}>Fechar</Text>
        </TouchableOpacity>
        <WebView
          style={{ flex: 1 }}
          originWhitelist={['*']}
          source={{ uri: file }}
          useWebKit={true}
        />
      </SafeAreaView>
    </Modal>
  );
}
