import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import Icon from '@mdi/react';
import { mdiSynagogueOutline } from '@mdi/js';

import Home from './home'
import Shuls from './shuls'

const Tab = createMaterialBottomTabNavigator()

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      activeColor="#e91e63"
      barStyle={{ backgroundColor: 'tomato' }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          )
        }}
      />
      <Tab.Screen name="Shuls"
        component={Shuls}
        options={{
          tabBarLabel: 'Shuls',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="star-david" color={color} size={26} />
            // <Icon path={mdiSynagogueOutline} color={color} size={1} />
          )
        }} />
    </Tab.Navigator>
  )
}

export default MyTabs