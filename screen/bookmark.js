import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { useRoute } from '@react-navigation/native';
import { supabase } from '../client';



export default function Bookmark() {
  
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