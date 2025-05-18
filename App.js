import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Login } from './screens/Login';
import { Logon } from './screens/Logon';
import { HomeButtomTabs } from './navigations/HomeButtomTabs';
import { MenuDrawer } from './navigations/MenuDrawer';

import { styles_app } from './styles/styles';


export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='Login' 
        screenOptions={{ headerShown: false }}
      >
      <Stack.Screen
        name='Login'
        component={Login}
      />
      <Stack.Screen
        name='Logon'
        component={Logon}
      />
      <Stack.Screen
        name='Home'
        options={title="Home"}
        component={HomeButtomTabs}
      />
      <Stack.Screen
        name='Menu'
        options={title="Menu"}
        component={MenuDrawer}
      />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


