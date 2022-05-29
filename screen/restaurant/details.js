import React, {useState, useEffect} from 'react'
import {Text, StyleSheet, View} from 'react-native';
import { supabase } from '../../client';
import { useRoute } from '@react-navigation/native';

export default function Details() {
 
    
    /* const [listing, setListing] = useState([])
  
    useEffect(()=>{
      fetchListing()
    }, [])
  
    const fetchListing = async () => {
      let {data} = await supabase
      .from('listing')
      .select(`
      id,
      name,
      logo,
      mail,
      username,
      description
     
      `)
      .eq('id', id.id)
      
      setListing(data);
      console.log(data);
    } */
  return (
    <View style={styles.container}>
    
    <Text > name: </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'red'
  }
})
