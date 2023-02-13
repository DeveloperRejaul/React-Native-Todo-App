import navString from '../../constents/navString.js';
import {Main} from '../../screens/index.js';
import ButtomTab from '../Buttom-Tab/ButtomTab.js';

export default function DrawerScreen(Drawer) {
  return (
    <>
      <Drawer.Screen
        name={'Home'}
        component={ButtomTab}
        options={{drawerLabel: 'All Todos'}}
      />
    </>
  );
}
