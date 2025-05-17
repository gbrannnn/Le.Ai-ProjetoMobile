import React from 'react';
import { Button } from 'react-native-web';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { Upload } from '../screens/Upload';
import { Colecao } from '../screens/Colecao';
import { HomeButtomTabs } from './HomeButtomTabs';
import { Logout } from '../screens/Logout';

export function MenuDrawer({navigation}){
    const Drawer = createDrawerNavigator();

    return(
        <Drawer.Navigator
            initialRouteName='Home'
        >
            <Drawer.Screen
                name='Home'
                component={HomeButtomTabs}
            />
            <Drawer.Screen
                name='Coleção'
                component={Colecao}
            />
            <Drawer.Screen
                name='Upload'
                component={Upload}
            />
            <Drawer.Screen
                name='Logout'
                component={Logout}
            />
        </Drawer.Navigator>
    )
}