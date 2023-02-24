import React from 'react';
import {useSelector} from 'react-redux';
import AuthStack from '../Stacks/AuthStack.js';
import MainStack from '../Stacks/MainStack.js';

const AuthRoute = Stack => {
  const isLogin = useSelector(state => state.isLogin);

  return <>{isLogin ? <>{MainStack(Stack)}</> : <>{AuthStack(Stack)}</>}</>;
};

export default AuthRoute;
