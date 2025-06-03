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
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './FireBaseConfig';


export default function App() {

  const Stack = createNativeStackNavigator();
  const [isLoading, setIsLoading] = useState(true)
  const [CurrentUser, setCurrentUser] = useState(null)


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    });

    return () => unsubscribe();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isLoading ? (
          <Stack.Screen name="Splash" component={Splash} />
        ) : CurrentUser  ? (
          <Stack.Screen name="Home" component={MenuDrawer} />
        ) : (
          <>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Logon" component={Logon} />
          </>
        )}
        <Stack.Screen name="Menu" component={MenuDrawer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


