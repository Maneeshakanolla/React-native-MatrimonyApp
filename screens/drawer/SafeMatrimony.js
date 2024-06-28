import React from 'react';
import { View, Text, StyleSheet, 
  Image ,TextInput,TouchableOpacity,
  SafeAreaProvider,useSafeAreaInsets, 
  ImageBackground,
   ScrollView,
   Pressable,Alert,
   Modal,
   ViewComponent} from 'react-native';

import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import HomeScreen from './Home';
import ProgressBar from '../ProgressBar';
import { useEffect } from 'react';
import { Entypo } from '@expo/vector-icons';

export default function SafeMatrimony(){
  const navigation = useNavigation();
  const [press,setPress]=useState(false)
  
const navigateToNestedScreen = () => {
      navigation.navigate('NestedStackNavigator', { screen: 'NestedScreen' });
    };
  return (
     
        <View style={styles.container} >
            <View style={styles.sectionHeader}>
              
              <Feather
                 onPress={() => navigation.goBack()}
                    name="arrow-left" 
                    size={27} 
                    color="white" 
                    style={{marginTop:20,marginLeft:10}} 
                />
                <Text style={{fontSize: 18,
                              flex: 1, 
                              textAlign: 'center', 
                               marginRight: 36,
                               marginTop:20,
                               color:'white'}}>Safe Matrimony</Text>
                </View> 
    
     <Text style={{
                               fontSize:16,
                               marginRight:20,
                               marginLeft:20,
                               marginTop:30,
                               textAlign:'center',
                               alignSelf:'center',
                               alignItems:'center',
                               justifyContent:'center',
                               fontWeight:'bold'
                         }}>Why Safe Matrimony ?</Text>
                <Text style={{
                               fontSize:16,
                               marginRight:20,
                               marginLeft:20,
                               marginTop:10,
                               fontWeight:'normal'
                         }}>Safe Matrimony is our initiative to guide you a safe online matrimony service.
                          You can trust us with your information  and credentials.
                          We are always there to support you in case of privacy abuse. </Text>
   <View style={{flexDirection:'row',marginTop:20,marginLeft:30}}>
   <View style={{width:40,height:40,borderRadius:30,backgroundColor:'#FFA500',marginLeft:5}}>
       <MaterialCommunityIcons
                 onPress={() => navigation.navigate(HomeScreen)}
                    name="account-plus-outline" 
                    size={27} 
                    color="white" 
                    style={{alignItems:'center',justifyContent:'center'}} 
                />
                </View>
                        <Text style={{fontSize:14,
                             
                               marginTop:10,
                               marginLeft:7,
                               marginRight:10}}>HOW TO IDENTIFY FRAUDSTERS?</Text>
               <Entypo name="chevron-right" size={27} color="black" style={{marginTop:5}}/>

   </View>

   <View style={{flexDirection:'row',marginTop:20,marginLeft:30}}>
   <View style={{width:40,height:40,borderRadius:30,backgroundColor:'#FF0000',marginLeft:5}}>
       <MaterialCommunityIcons
                 onPress={() => navigation.navigate(HomeScreen)}
                    name="account-plus-outline" 
                    size={27} 
                    color="white" 
                    style={{alignItems:'center',justifyContent:'center'}} 
                />
                </View>
                        <Text style={{fontSize:14,
                             
                               marginTop:10,
                               marginLeft:7,
                               marginRight:10}}>REPORT PROFILE</Text>
        <Entypo name="chevron-right" size={27} color="black" style={{marginTop:5,marginLeft:30}}/>

   </View>



</View>
       
       
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white',
        marginBottom:20,
       
    },
    sectionHeader: {
      flexDirection:'row',
      height:70,
      width:'100%',
      backgroundColor: '#065EC4',
      borderRadius: 10,
      shadowColor: '#27E2E2',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    
});