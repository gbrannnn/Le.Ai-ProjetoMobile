import {Image,View,ActivityIndicator} from "react-native";
import Logo from "../assets/LogoCortada.png"
import { styles_app,styles_splash} from "../styles/styles"

export function Splash(){
    return(
        <View style = {styles_app.container}>
            <View>
                <Image source={Logo} style={styles_splash.image}/>
                <ActivityIndicator style={styles_splash.spinner}  />
            </View>
        </View>
    );
} 