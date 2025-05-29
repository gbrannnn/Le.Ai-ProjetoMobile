import { Button, SafeAreaView, Text, View} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { styles_app, styles_upload} from "../styles/styles";

export function Home({ navigation }) {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={[styles_app.container, { backgroundColor: "#1D3557" }]}>
                <View style={styles_upload.container}>
                    <Text style={styles_upload.text}>Home</Text>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}