import {Image,View} from "react-native";
import Logo from "../assets/logo.png"
import { styles_app,styles_splash} from "../styles/styles"

export function Splash(){
    return(
        <View style = {styles_app.container}>
            <View>
                <Image source={Logo} style={styles_splash.image}/>
            </View>
        </View>
    );
}