
import React, {useState, useEffect} from 'react';
import { SafeAreaView, View, FlatList,
  StyleSheet, Text, Button, StatusBar,
   ScrollView, TouchableOpacity, ImageBackground, Image } from 'react-native';
   import { FontAwesome, FontAwesome5, MaterialIcons, MaterialCommunityIcons,Ionicons, Feather } from '@expo/vector-icons';
import * as Linking from 'expo-linking';
import { supabase } from '../client';
import ListingTopTab from '../navigation/listingTopBar';
import { useRoute } from '@react-navigation/native';
import Details from './restaurant/details';
import Follow from './restaurant/follow';

export default function CardScreen({navigation}) {
  const route = useRoute();
    const {id} = route.params;

    const [listing, setListing] = useState([])
  
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
      description,
      telephone,
      isSponsored,
      owner,
      website,
      review(id, comment, user_id ),
      adress(id, adress_link, city_id (name)),
      category(id,name)
      `)
      .eq('id', id)
      
      setListing(data);
      console.log(data);
    }
  return (
      <SafeAreaView> 
      {listing.map((data)=> 
       <View style={styles.container} key={data.id}>

         <View style={styles.nameComp} >
         <Text style={styles.name} fontSize={30} >{data.name}</Text>
         <Feather style={styles.check} name="check-circle" size={16} color="green"  />
         </View>

         <Text style={styles.description} >{data.description} </Text>
         
         <TouchableOpacity onPress={()=> Linking.openURL(`http://${data.website}`)}>
           <Text style={styles.website} >{data.website} </Text>
         </TouchableOpacity>
        
        <ImageBackground source={{uri:data.logo}} borderRadius='10' resizeMode='cover' style={styles.logo}  />

        <View style={styles.contact}>
        
         <TouchableOpacity style={styles.phone} onPress={()=> Linking.openURL(`mailto:${data.mail}`)} >
         <MaterialCommunityIcons name="email-outline" size={40} color="rgba(0,0,0,0.8)" />
         </TouchableOpacity>

         {data.adress.map((adr) => (
        <TouchableOpacity style={styles.phone}
          key={adr.id} title='Haritada Göster' onPress={()=> Linking.openURL(adr.adress_link)} >
            <FontAwesome5 name="map-marked-alt" size={32} color="rgba(0,0,0,0.8)" />
        </TouchableOpacity> 
             ))}

        <TouchableOpacity style={styles.phone}
          title='Ara' onPress={()=> Linking.openURL(`tel:${data.telephone}`)} >
          <FontAwesome name="phone" size={40} color= "rgba(0,0,0,0.8)" />
        </TouchableOpacity>
        </View>
        
        
        {data.category.map((ctg)=> (
            <Text key={ctg.id}style={styles.category} >{ctg.name} </Text>
          ))}

          <View style={styles.city} >
          <MaterialCommunityIcons style={styles.mapCity} name="map-marker-check-outline" size={18} color="black" />
          { data.adress.map((cty) => (
               <Text style={{color:'rgba(0,0,0,0.8)', fontWeight:'500', fontSize:16}} key={cty.id} >{cty.city_id.name} </Text>
            ))}
          </View>

          <View style={styles.price} >
              <Text style={styles.point} >52₺</Text>
          </View>
          

        <View style={styles.rateBox}>
          <View style={styles.pointBox} >
              <Text style={styles.point} >9.8</Text>
          </View>
          <Text style={styles.rateState}>(299)Yorum</Text>
        </View>

        <View style={styles.counterBar}>

        <View style={styles.counter}> 
         
         <TouchableOpacity style={styles.following} 
         onPress={()=>navigation.navigate("Follow",{ 
         id:data.id
         })}>
          <Text style={styles.number}>193</Text>
          <Text style={styles.desc}>Takip</Text>
         </TouchableOpacity>

         <View style={styles.followers}>
          <Text style={styles.number}>193</Text>
          <Text style={styles.desc}>Takipçi</Text>
         </View>
         <View style={styles.check_in}>
          <Text style={styles.number}>193</Text>
          <Text style={styles.desc}>Check-in</Text>
         </View>

         </View>

         <View style={styles.buttons}>

           <View style={styles.followButton}>
           <Text style={styles.follow}>Takiptesin</Text>
           </View>

           <View style={styles.add}>
           <Ionicons style={styles.addButton} name="md-add-sharp" size={30} color="white" />
           </View>
   
         </View>
         
        </View>
        <View style={styles.topBar}>
           <ListingTopTab />
           </View>
          
        </View>  )}
        
        
      </SafeAreaView> 
  )
}

const styles = StyleSheet.create({
 container:{
   backgroundColor:'white',
width:'100%',
height:'100%'
 },
logo:{
  width:100,
  height:100,
  position:'absolute',
  top:20,
  left:10,
},

phone:{
  borderColor:'black',
  borderWidth:1,
  borderRadius:30,
  width:55,
  height:55,
  justifyContent:'center',
  alignItems:'center',
  marginRight:15,
},
contact:{
  width:'58%',
  flexDirection:'row',
  justifyContent:'flex-end',
  position:'absolute',
  top:165,
  right:0,
},
name:{
  fontSize:16,
  fontWeight:'450',
  letterSpacing:0.5,
  fontWeight:'500',
},
description:{
  position:'absolute',
  top:55,
  left:120,
  width:250,
},
category:{
  color:'grey',
  position:'absolute',
  left:120,
  top:38,
},

price:{
  position:'absolute',
  top:135,
  borderRadius:30,
  width:65,
  height:30,
  justifyContent:'center',
  alignItems:'center',
  backgroundColor:'rgba(0,0,0,0.8)',
  marginLeft:10,
},

city:{
flexDirection:'row',
position:'absolute',
top:140,
left:80,
},

nameComp:{
  top:20,
  left:120,
  position:'absolute',
  flexDirection:'row',
},

website:{
  position:'absolute',
  top:105,
  left:120,
  color:'red'
},

check:{
  marginLeft:5,
  
},

pointBox:{
  borderRadius:30,
  width:65,
  height:30,
  justifyContent:'center',
  alignItems:'center',
  backgroundColor:'rgba(0,0,0,0.8)',
  marginLeft:10,
},
point:{
  color:'white',
  fontSize:20,
  fontWeight:'700'
},
rateBox:{
  top:175,
  flexDirection:'row',
},
rateState:{
  color:'rgba(0,0,0,0.8)',
  fontSize:13,
  fontWeight:'600',
  marginLeft:8,
  top:6,
},
add:{
  borderRadius:30,
  width:50,
  height:30,
  alignItems:'center',
  justifyContent:'center',
  backgroundColor:'rgba(0,0,0,0.8)',
},
addButton:{

},
counterBar:{
  position:'absolute',
  top:230,
  flexDirection:'row',
  width:'100%',
  
},

buttons:{
  position:'absolute',
  flexDirection:'row',
 right:10,
 
},

followButton:{
  borderRadius:30,
  width:90,
  height:30,
  alignItems:'center',
  justifyContent:'center',
  backgroundColor:'rgba(0,0,0,0.8)',
  marginRight:10,
},
follow:{
  color:'white',
},

counter:{
  flexDirection:'row',
  marginLeft:20,
},

check_in:{
alignItems:'center',
marginLeft:10,
},
followers:{
  alignItems:'center',
  marginLeft:10,
},
following:{
  alignItems:'center',
},
topBar:{
  position:'absolute',
  width:'100%',
  height:'100%',
  marginTop:270,
}

})