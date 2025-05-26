import { createDrawerNavigator } from '@react-navigation/drawer';

import { Upload } from '../screens/Upload';
import { Colecao } from '../screens/Colecao';
import { HomeButtomTabs } from './HomeButtomTabs';
import { Logout } from '../screens/Logout';

export function MenuDrawer({ navigation }) {
    const Drawer = createDrawerNavigator();

    return (
        <Drawer.Navigator
            initialRouteName='Home'
            screenOptions={{
                drawerStyle: {
                    backgroundColor: '#F1FAEE',
                    width: 240,
                },
                drawerActiveBackgroundColor: '#A8DADC',
                drawerActiveTintColor: '#1D3557',
                drawerLabelStyle: {
                    fontSize: 15,
                },
            }}
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
                options={{
                    headerShown: false
                }}
                name="Logout"
                component={Logout}
            />
        </Drawer.Navigator>
    )
}