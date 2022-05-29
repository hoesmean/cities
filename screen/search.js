import React, {useState, useEffect} from 'react';
import { SafeAreaView, View, FlatList,
   StyleSheet, Text, Button, StatusBar,
    ScrollView, TouchableOpacity, ImageBackground, ColorPropType } from 'react-native';
import * as Linking from 'expo-linking';
import { FontAwesome, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { supabase } from '../client';
import CardScreen from './cardScreen';
import Details from './restaurant/details';
import Bookmark from './bookmark';
import Profile from './profile';

export default function Search  ({navigation})  {

  const [card, setCard] = useState([])
  
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
    telephone,
    img,
    isSponsored,
    adress(id, adress_link, city_id (name)),
    category(id,name)
    `)
    setCard(data);
    console.log(data);
  }

  const renderItem = ({item}) =>{
return (
  <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate("CardScreen",{ 
    
    id:item.id
  
    })}>

      <ImageBackground source={{uri:item.logo}} 
            resizeMode='stretch' borderRadius='15'  style={styles.img}  />
            <View style={styles.overlay} ></View>
           <View style={styles.line} ></View>
         
         <View style={styles.city} >
          { item.adress.map((cty) => (
               <Text style={{color:'white', fontWeight:'500', fontSize:13}} key={cty.id} >{cty.city_id.name} </Text>
            ))}
          </View>
     <View style={styles.sponsor}>
    {item.isSponsored ? <Text style={{color:'white', fontWeight:'500', fontSize:13}}> Sponsorlu </Text> : null}
    </View>

           <View style={styles.category} >
             {item.category.map((cat)=> (
              <Text style={{color:'white', fontWeight:'500', fontSize:13}}  key={cat.id} >{cat.name}</Text>
             ))}
           </View>
          
            <View style={styles.name} >
               <Text style={{color:'white', fontWeight:'bold', fontSize:16}} >  {item.name}</Text>
            </View>

              <MaterialIcons style={styles.bookmark} name="bookmark-outline" size={30} color="white" />
        
                 <TouchableOpacity style={styles.phone}
                 title='Ara' onPress={()=> Linking.openURL(`tel:${item.telephone}`)} >
                 <FontAwesome name="phone" size={30} color= "white" />
                 </TouchableOpacity>
             
             {item.adress.map((adr) => (
               <TouchableOpacity style={styles.map}
                 key={adr.id} title='Haritada Göster' onPress={()=> Linking.openURL(adr.adress_link)} >
                   <FontAwesome5 name="map-marked-alt" size={30} color="white" />
                </TouchableOpacity> 
             ))}

  </TouchableOpacity> )} 

return (
  
  <SafeAreaView style={styles.container}>
  
  <StatusBar style="dark" />
  <View style={styles.filterBar}></View>
   <View style={styles.cardContainer} >
  <FlatList
  showsVerticalScrollIndicator={false}
  data={card}
  keyExtractor={(item)=> item.id}
  numColumns={2}
  renderItem={renderItem}/>
  </View>
  
  </SafeAreaView>
  
)     
  }
  

  const styles = StyleSheet.create({
    container:{
        flex:1,
        
    },
    cardContainer:{
        width:'100%',
        padding:5,
        
    },
    card:{
        position:'relative',
        height:240,
        flex:1,
        margin: 3,    
    },
    img:{
        height:240,
        flex:1,
    }, 
    overlay:{
        backgroundColor:'rgba(0,0,0,0.4)',
        borderRadius:20,
        height:240,
    },
    bookmark:{
        position:'absolute',
        top:5,
        right:5,
      },
      name:{
        position:'absolute',
        bottom:80,
        
      },
      city:{
        position:'absolute',
        bottom:66,
        left:7,
      },
      category:{
        position:'absolute',
        bottom:98,
        left:7,
      },

    phone:{
        position:'absolute',
        bottom: 10,
        left:30,
    },
    map:{
        position:'absolute',
        bottom:12,
        right:30,
    },

    line:{
        borderBottomColor:'white',
        position: 'absolute',
        borderBottomWidth:1,
        bottom:55,
        width:'100%'
      },

      sponsor:{
        position:'absolute',
        top:10,
        left:50,
      }


    
})
