import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabScreen from './TabScreen.js';

const ButtomTab = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <>{TabScreen(Tab)}</>
    </Tab.Navigator>
  );
};

export default ButtomTab;
