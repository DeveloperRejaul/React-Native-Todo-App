import navString from '../../constents/navString.js';
import {CreateTodo, Main, Profile} from '../../screens/index.js';
import Icon from 'react-native-vector-icons/Ionicons.js';
import {rf} from '../../constents/responsiveDimensions.js';

export default function TabScreen(Tab) {
  // const Tab = createBottomTabNavigator();
  return (
    <>
      <Tab.Screen
        name={navString.Main}
        component={Main}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused}) => {
            return (
              <Icon
                name="home-outline"
                size={rf(3)}
                color={focused ? '#057dff' : '#7F8487'}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name={navString.CreateTodo}
        component={CreateTodo}
        options={{
          tabBarLabel: 'Cteate',
          tabBarIcon: ({focused}) => {
            return (
              <Icon
                name="md-add-circle-outline"
                size={rf(5)}
                color={focused ? '#057dff' : '#6B728E'}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name={navString.Profile}
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({focused}) => {
            return (
              <Icon
                name="person-outline"
                size={rf(3)}
                color={focused ? '#057dff' : "'#6B728E'"}
              />
            );
          },
        }}
      />
    </>
  );
}
