import React, {useState, useEffect} from 'react';
import { SafeAreaView, View, FlatList,
   StyleSheet, Text, Button, StatusBar,
    ScrollView, TouchableOpacity, ImageBackground, ColorPropType } from 'react-native';
import * as Linking from 'expo-linking';
import { FontAwesome, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { supabase } from '../client';
import { useRoute } from '@react-navigation/native';


export default function Profile() {
  
 
  
  return ( 
    <View>
    
    <View style={styles.header} ></View>
<Text>Home</Text>

</View>
  )
}

const styles = StyleSheet.create({
    header:{
        marginTop:50
    }
})