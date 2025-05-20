import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from "react";
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Splash } from './screens/Splash';
import { Login } from './screens/Login';
import { Logon } from './screens/Logon';
import { HomeButtomTabs } from './navigations/HomeButtomTabs';
import { MenuDrawer } from './navigations/MenuDrawer';

import { styles_app } from './styles/styles';


export default function App() {

  const Stack = createNativeStackNavigator();
  const [isLoading, setIsLoading] = useState(true)

  useEffect(()=> {
    const timer = setTimeout(()=> {
      setIsLoading(false);
    },3500);
    return () => clearTimeout(timer)
  },[]);

  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName={isLoading? 'Splash':'Login'}
        screenOptions={{ headerShown: false }}
      >
      {isLoading ? (
          <Stack.Screen name="Splash" component={Splash} />
        ) : (
        <>
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
        </>
      )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}


