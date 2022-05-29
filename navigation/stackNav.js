import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomNav from './bottomNav';
import CardScreen from '../screen/cardScreen';
import ListinTopBar from './listingTopBar'
import Follow from '../screen/restaurant/follow';





const Stack = createNativeStackNavigator();

export default function StackNav () {
    return(
      <>
      
        <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name='BottomNav' component={BottomNav}  options={{ headerShown: false }} />
         <Stack.Screen name='CardScreen' component={CardScreen}  />
         <Stack.Screen name='ListinTopBar' component={ListinTopBar} />
         <Stack.Screen name='Follow' component={Follow}  />
      </Stack.Navigator>
    </NavigationContainer>
    </>
    )
}