import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';

import Home from '../screen/home'
import Search from '../screen/search';
import Profile from '../screen/profile';
import Bookmark from '../screen/bookmark';

const Tab = createBottomTabNavigator();

export default function TabBar ()  {
    return (
        
        <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarShowLabel: false,
          
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-home'
                : 'ios-home-outline';
            } else if (route.name === 'Search') {
              iconName = focused ? 'search-sharp' : 'search-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'ios-person' : 'ios-person-outline';
            } else if (route.name === 'Bookmark') {
              iconName = focused ? 'ios-heart-sharp' : 'ios-heart-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={25} color={color} />;
          },
          tabBarActiveTintColor: '#383838',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" options={{
          headerShown: false,
        }} component={Home} />

        <Tab.Screen name="Search" options={{
          headerShown: false,
        }} component={Search} />

        <Tab.Screen name="Bookmark" options={{
          headerShown: false,
        }} component={Bookmark} />

        <Tab.Screen name="Profile" options={{
          headerShown: false,
          label: false,
        }} component={Profile} />
      </Tab.Navigator>
     
    )
}