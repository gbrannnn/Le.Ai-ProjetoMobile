import React from 'react';
import {Image,View} from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import { Home }from '../screens/Home';
import { Upload } from '../screens/Upload';
import HomeIcon from '../assets/homeIcon.png'
import UploadIcon from '../assets/uploadIcon.png'
import { styles_icon} from "../styles/styles"

              


export function HomeButtomTabs({navigation}){
    const Tab = createBottomTabNavigator();

    return(
        <Tab.Navigator 
            screenOptions={{

                headerStyle: {
                    backgroundColor: '#D8F8B7',
                    borderWidth: 1
                },
                headerTitleStyle: {
                    color: '#1D3557'
                },
             
                headerTitleAlign: "center",
                tabBarStyle: {
                    backgroundColor: '#3D6271',
                    borderWidth: 0
                },
             tabBarShowLabel: false,
             

            }}>
            <Tab.Screen 
                name='Biblioteca'
                component={Home}
                options={{ tabBarLabel: 'Home',  headerShown: true, tabBarIcon: () => (
                    <View style={styles_icon.icon}>
                        <Image
                        source={HomeIcon}
                        style={{ width: 28, height: 28 }}
                        resizeMode="contain"
                        />
                    </View>
                ),tabBarIconStyle: {
                    width: 40,
                    height: 40,     
                    paddingTop: 1,             
                    alignItems: 'center',
                    backgroundColor: 'white',
                    borderRadius: 50,

                }
                }}
                
            />
            <Tab.Screen
                name='Subir livros'
                component={Upload}
                options={{ tabBarLabel: 'Upload',  headerShown: true,  tabBarIcon: () => (
                    <View style={styles_icon.icon}>
                        <Image
                        source={UploadIcon}
                        style={{ width: 28, height: 28 }}
                        resizeMode="contain"
                        />
                    </View>
                ),tabBarIconStyle: {
                    width: 40,
                    height: 40,     
                    paddingTop: 1,             
                    alignItems: 'center',
                    backgroundColor: 'white',
                    borderRadius: 50,

                }}}
            />
        </Tab.Navigator>
    )
}