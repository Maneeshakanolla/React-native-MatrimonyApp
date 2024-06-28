import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, TouchableOpacity,
  } from 'react-native';

import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import Notification from '../settings/Notification';
import PrivacySettings from '../settings/PrivacySettings';
import Account from '../settings/Account';
import AdvancedSettings from '../settings/AdvancedSettings';

import { useNavigationState } from '@react-navigation/native';

export default function Settings(){
  const navigation=useNavigation();
 // const navigation=useNavigationState
  const [press,setPress]=useState(false);
  return (
     
        <View style={styles.container} >
            <View style={styles.sectionHeader}>
              
              <Feather
                  onPress={() => navigation.goBack()}
            //   onPress={() => navigation.navigate('Root', {
            //         screen: 'MyDrawer',
            //         initial: true,
            //       })}
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
                               color:'white'}}>Settings</Text>
                </View> 
    <View style={{flexDirection:'row'}}>
    <Feather
                 onPress={() => navigation.goBack()}
                    name="bell" 
                    size={27} 
                    color="gray" 
                    style={{marginTop:20,marginLeft:20}} 
                />
                <TouchableOpacity onPress={() => navigation.navigate(Notification)
                   
 
                }>
                        <Text style={{fontSize: 18,
                              textAlign: 'center', 
                               marginRight: 36,
                               marginTop:20,
                               marginLeft:20,
                               color:'gray'}}>Notifications</Text>
               </TouchableOpacity>

    </View>
    <View style={{flexDirection:'row'}}>
    <FontAwesome name="lock" size={27} color="gray"
    style={{marginTop:20,marginLeft:25}} 
    />
              <Pressable  onPress={() => navigation.navigate(PrivacySettings)}>
                     <Text style={{fontSize: 18,
                              textAlign: 'center', 
                               marginRight: 36,
                               marginTop:20,
                               marginLeft:25,
                               color:'gray'}}>Privacy Settings</Text>
                  </Pressable>

    </View>

    <View style={{flexDirection:'row'}}>

    <MaterialCommunityIcons name="account" 
    size={27} color="gray" 
    style={{marginTop:20,marginLeft:20}} 
    />
              <Pressable  onPress={() => navigation.navigate(Account)}>
                <Text style={{fontSize: 18,
                              textAlign: 'center', 
                               marginRight: 36,
                               marginTop:20,
                               marginLeft:20,
                               color:'gray'}}>Account</Text>
                </Pressable>
    </View>
    <View style={{flexDirection:'row'}}>
    <Ionicons name="settings" size={27} color="gray" 
     style={{marginTop:20,marginLeft:20}} />
                <Pressable  onPress={() => navigation.navigate(AdvancedSettings)}>
                <Text style={{fontSize: 18,
                              textAlign: 'center', 
                               marginRight: 36,
                               marginTop:20,
                               marginLeft:20,
                               color:'gray'}}>Advanced Settings</Text>
                    </Pressable>

    </View>
    </View>    
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white',
        marginBottom:20
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
    button: {
        backgroundColor: '#DA5E74',
        borderRadius: 30,
        height:30,
        width:150,
        marginTop:5,
        marginRight:10,
        alignSelf: 'center',
        justifyContent: 'center'
      },
   
        line: {
        position: 'relative',
        //flexDirection: 'row',
        //alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderColor: 'black',
        borderRadius: 30,
        width:'95%',
        marginTop:15,
        marginLeft:10,
        marginRight:10
      },
      input: {
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        paddingVertical: 5,
        paddingHorizontal: 10,
      },
    
});