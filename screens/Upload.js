import { Button, SafeAreaView, Text } from "react-native-web";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { styles_app } from "../styles/styles";

export function Upload(){
    return(
        <SafeAreaProvider>
        <SafeAreaView style={styles_app.container}>
            <Text>Teste</Text>
        </SafeAreaView>
        </SafeAreaProvider>
    )
}