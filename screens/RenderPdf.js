import React, { useEffect, useState } from 'react';
import { SafeAreaView, TouchableOpacity, Text, Modal } from 'react-native';
import { WebView } from 'react-native-webview';

export function RenderPdf({ route, navigation }) {
    const { file } = route.params;
    const [modalVisible, setModalVisible] = useState(true);

    const closePDF = () => {
        setModalVisible(false);
        navigation.replace('Menu');
    };

    return (
        <Modal
            visible={modalVisible}
            animationType="slide"
            onRequestClose={closePDF}
        >
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