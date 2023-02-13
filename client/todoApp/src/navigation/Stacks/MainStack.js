import ButtomTab from '../Buttom-Tab/ButtomTab.js';
import DrawerStack from '../Drawer/Drawer.js';

const MainStack = Stack => {
  return (
    <>
      {/* <Stack.Screen name={'BUTTOM-TAB-SCREEN'} component={ButtomTab} /> */}
      <Stack.Screen name={'Drawer-SCREEN'} component={DrawerStack} />
    </>
  );
};

export default MainStack;
