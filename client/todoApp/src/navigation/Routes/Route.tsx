import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthRoute from './AuthRoute.js';

export default function Route() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <>{AuthRoute(Stack)}</>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
