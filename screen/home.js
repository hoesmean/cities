import React, {useState, useEffect} from 'react';
import { SafeAreaView, View, FlatList,
    StyleSheet, Text, Button,
     ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { supabase } from '../client';
import CardScreen from './cardScreen';
import * as Linking from 'expo-linking';
import { FontAwesome, FontAwesome5, MaterialIcons } from '@expo/vector-icons';

export default function Home() {

  return (
    
    <SafeAreaView style={styles.container}>
    
    <Text>Home</Text>
    
    </SafeAreaView>
    
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        
    }

    
})