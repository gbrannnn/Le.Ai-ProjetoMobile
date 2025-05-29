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
                    backgroundColor: '#D8F8B7',
                    width: "50%",
                    borderBottomLeftRadius: 15,
                    borderBottomRightRadius: 15,
                },
                drawerActiveBackgroundColor: '#A8DADC',
                drawerActiveTintColor: '#1D3557',
                drawerType: 'front',
                drawerLabelStyle: {
                    fontSize: 15,
                },
                headerStyle: {
                    backgroundColor: '#D8F8B7',
                    borderBottomLeftRadius: 15,
                    borderBottomRightRadius: 15,
                    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                },
                headerTitle: {
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: '#1D3557',
                },
                headerTitleAlign: 'center',
                lazy: true,
                
            }}
        >
            <Drawer.Screen
                name='Home'
                options={{
                    title: 'Biblioteca',
                }}
                component={HomeButtomTabs}
            />
            <Drawer.Screen
                name='Coleção'
                component={Colecao}
            />
            <Drawer.Screen
                name='Upload'
                options={{
                    title: 'Upload',
                }}
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