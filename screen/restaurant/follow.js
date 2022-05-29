import { View, Text } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native';


export default function Follow() {
    const route = useRoute();
    const {id} = route.params;
  return (
    <View>
      <Text>F</Text>
    </View>
  )
}