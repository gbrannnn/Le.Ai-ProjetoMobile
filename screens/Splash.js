import {Image,View,ActivityIndicator} from "react-native";
import Logo from "../assets/LogoCortada.png"
import { styles_app,styles_splash} from "../styles/styles"

export function Splash(){
    return(
        <View style = {styles_splash.container}>
            <View style={styles_splash.topRightCircle} />
            <View style={styles_splash.bottomLeftCircle} />
            <View>
                <Image source={Logo} style={styles_splash.image}/>
                <ActivityIndicator  size="large" style={styles_splash.spinner}  />
            </View>
        </View>
    );
} 