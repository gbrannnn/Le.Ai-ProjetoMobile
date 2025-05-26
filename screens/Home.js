import { Button, SafeAreaView, Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { styles_app } from "../styles/styles";

export function Home({navigation}){
    return(
        <SafeAreaProvider>
        <SafeAreaView style={styles_app.container}>
            <Text>Teste</Text>
        </SafeAreaView>
        </SafeAreaProvider>
    )
}