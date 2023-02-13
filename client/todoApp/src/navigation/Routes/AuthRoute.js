import React from 'react';
import AuthStack from '../Stacks/AuthStack.js';
import MainStack from '../Stacks/MainStack.js';

const AuthRoute = Stack => {
  const isLogin = true;
  return <>{isLogin ? <>{MainStack(Stack)}</> : <>{AuthStack(Stack)}</>}</>;
};

export default AuthRoute;
