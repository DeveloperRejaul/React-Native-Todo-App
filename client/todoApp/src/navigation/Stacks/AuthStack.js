import React from 'react';
import {Login, Singin} from '../../screens/index.js';
import navString from '../../constents/navString.js';

const AuthStack = Stack => {
  return (
    <>
      <Stack.Screen name={navString.Login} component={Login} />
      <Stack.Screen name={navString.Singin} component={Singin} />
    </>
  );
};

export default AuthStack;
