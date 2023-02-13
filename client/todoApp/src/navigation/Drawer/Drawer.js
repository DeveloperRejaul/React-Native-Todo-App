import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerScreen from './DrawerScreen.js';
const Drawer = createDrawerNavigator();

export default function DrawerStack() {
  return (
    <Drawer.Navigator
      screenOptions={{headerShown: true, headerTitle: 'All Todos'}}>
      <>{DrawerScreen(Drawer)}</>
    </Drawer.Navigator>
  );
}
