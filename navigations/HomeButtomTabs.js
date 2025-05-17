import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home }from '../screens/Home';
import { Upload } from '../screens/Upload';


export function HomeButtomTabs({navigation}){
    const Tab = createBottomTabNavigator();

    return(
        <Tab.Navigator 
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#F8F8EC',
                    borderWidth: 0
                },
                headerTitleStyle: {
                    color: 'black'
                },
                headerTitleAlign: "center",
                tabBarStyle: {
                    backgroundColor: '#F8F8EC',
                    borderWidth: 0
                },

            }}>
            <Tab.Screen 
                name='Biblioteca'
                component={Home}
                options={{ tabBarLabel: 'Home',  headerShown: true}}
            />
            <Tab.Screen
                name='Subir livros'
                component={Upload}
                options={{ tabBarLabel: 'Upload',  headerShown: true}}
            />
        </Tab.Navigator>
    )
}