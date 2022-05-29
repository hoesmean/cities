import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { MaterialCommunityIcons, MaterialIcons, Fontisto,Entypo } from '@expo/vector-icons';
import {Image} from 'react-native';
import Details from '../screen/restaurant/details';
import Post from '../screen/restaurant/post';
import Discount from '../screen/restaurant/discount';
import Menu from '../screen/restaurant/menu';
import Product from '../screen/restaurant/product';
import Review from '../screen/restaurant/review';
import { View, StyleSheet } from 'react-native';



const TopTab = createMaterialTopTabNavigator();

export default function MyTabs() {


  return (
    <>
    
    <TopTab.Navigator
    screenOptions={({ route }) => ({
      tabBarShowLabel: false,
      
      /* tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Post') {
          iconName = focused
            ? 'ios-home'
            : 'ios-home-outline';
        } else if (route.name === 'Details') {
          iconName = focused ? 'search-sharp' : 'search-outline';
        } else if (route.name === 'Discount') {
          iconName = focused ? 'ios-person' : 'ios-person-outline';
        } else if (route.name === 'Menu') {
          iconName = focused ? 'ios-heart-sharp' : 'ios-heart-outline';
        } else if (route.name === 'Product') {
          iconName = focused ? 'ios-heart-sharp' : 'ios-heart-outline';
        } else if (route.name === 'Review') {
          iconName = focused ? 'ios-heart-sharp' : 'ios-heart-outline';
        } else if (route.name === 'Post') {
          iconName = focused ? 'ios-heart-sharp' : 'ios-heart-outline';
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={25} color={color} />;
      },
      tabBarActiveTintColor: '#383838',
      tabBarInactiveTintColor: 'gray', */
    })}
    >
      <TopTab.Screen name="Post" component={Post} 
       options={{
        tabBarIcon : ({focused}) => (
          <View style={styles.icons} >
           <MaterialCommunityIcons name="dots-grid" size={24} style={{
             color: focused ? '#383838' : 'gray'
           }}  />
          </View>
        ),
      }}
      />
      <TopTab.Screen name="Details" component={Details} 
      options={{
        tabBarIcon : ({focused}) => (
          <View style={styles.icons}  >
           <MaterialCommunityIcons name="comment-alert-outline" size={24} style={{
             color: focused ? '#383838' : 'gray'
           }}  />
          </View>
        ),
      }}
      />

      <TopTab.Screen name="Menu" component={Menu} 
       options={{
        tabBarIcon : ({focused}) => (
          <View style={styles.icons}>
           <MaterialIcons name="restaurant-menu" size={24} style={{
             color: focused ? '#383838' : 'gray'
           }}  />
          </View>
        ),
      }}
      />
    
     <TopTab.Screen name="Review" component={Review} 
       options={{
        tabBarIcon : ({focused}) => (
          <View style={styles.icons}>
           <Fontisto name="commenting" size={20} style={{
             color: focused ? '#383838' : 'gray'
           }}  />
          </View>
        ),
      }}
      />
      
      <TopTab.Screen name="Product" component={Product}
       options={{
        tabBarIcon : ({focused}) => (
          <View style={styles.icons}>
           <Entypo name="shop" size={24} style={{
             color: focused ? '#383838' : 'gray'
           }}  />
          </View>
        ),
      }}
      />

      <TopTab.Screen name="Discount" component={Discount} 
       options={{
        tabBarIcon : ({focused}) => (
          <View style={styles.icons}>
           <Fontisto name="ticket" size={24} style={{
             color: focused ? '#383838' : 'gray'
           }}  />
          </View>
        ),
      }}
      />
      
      
    </TopTab.Navigator>
    </>
  );
}

const styles = StyleSheet.create({
  icons:{
    alignItems:'center',
     justifyContent:'center', 
     top: 5
  }
})