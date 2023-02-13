import navString from '../../constents/navString.js';
import {CardDetels} from '../../screens/index.js';
import DrawerStack from '../Drawer/Drawer.js';

const MainStack = Stack => {
  return (
    <>
      <Stack.Screen name={'Drawer-SCREEN'} component={DrawerStack} />
      <Stack.Screen name={navString.CardDetels} component={CardDetels} />
    </>
  );
};

export default MainStack;
