import navString from '../../constents/navString.js';
import {Main, Profile} from '../../screens/index.js';
import Icon from 'react-native-vector-icons/Ionicons.js';
import {rf} from '../../constents/responsiveDimensions.js';

export default function TabScreen(Tab) {
  return (
    <>
      <Tab.Screen
        name={navString.Main}
        component={Main}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => {
            return <Icon name="home-outline" size={rf(3)} color={'#057dff'} />;
          },
        }}
      />

      <Tab.Screen
        name={navString.Profile}
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: () => {
            return <Icon name="home-outline" size={rf(3)} color={'#057dff'} />;
          },
        }}
      />
    </>
  );
}
