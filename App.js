
import React from 'react';
import {NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from'./pages/Home.js';
import Ocultar from'./pages/ocultado.js';
import { SuspeitoProviders } from './pages/context/SuspeitoContext.js';
const Stack = createStackNavigator();

export default function App() {
  return (
    <SuspeitoProviders>
      <NavigationContainer>
        <Stack.Navigator headerMode=''>
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="ocultado" component={Ocultar}/>
        </Stack.Navigator>
      </NavigationContainer>
    </SuspeitoProviders>
  )
}

