import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import 'react-native-url-polyfill/auto';

import Navigator from './navigation/stackNav';
import Bottom from './navigation/bottomNav';




export default function App() {
  return (
  <Navigator/>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
