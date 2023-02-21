import React, {useState} from 'react';
import AuthStack from '../Stacks/AuthStack.js';
import MainStack from '../Stacks/MainStack.js';

const AuthRoute = Stack => {
  const [isLogin, setisLogin] = useState(false);
  return <>{isLogin ? <>{MainStack(Stack)}</> : <>{AuthStack(Stack)}</>}</>;
};

export default AuthRoute;
