import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, TouchableOpacity,Switch
  } from 'react-native';

import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


import CallPreferences from './CallPreferences';
import BlockedProfiles from './BlockedProfiles';
import ProfilesYou from './ProfilesYou';
import ActionConfirmation from './ActionConfirm';
import PhonePermissions from './PhonePermissions';

export default function AdvSetting(){
  const navigation=useNavigation();
 // const navigation=useNavigationState
  const [press,setPress]=useState(false);
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const [expanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };
  const toggleSwitch = () => setIsSwitchOn(!isSwitchOn);
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
                               color:'white'}}>Advanced Settings</Text>
                </View> 
                <View style={{flexDirection:'row'}}>
    <Feather name="phone-missed"  size={25} color="gray"
    style={{marginTop:20,marginLeft:20}} />
                <TouchableOpacity onPress={() => navigation.navigate(CallPreferences)}>
                        <Text style={{fontSize: 18,
                              textAlign: 'center', 
                               marginRight: 36,
                               marginTop:20,
                               marginLeft:20,
                               color:'gray'}}>Call Preferences</Text>
               </TouchableOpacity>
        </View>
    <View style={{flexDirection:'row'}}>
 <MaterialCommunityIcons name="account-lock"  size={27} color="gray"
    style={{marginTop:20,marginLeft:20}} />
                <TouchableOpacity onPress={() => navigation.navigate(BlockedProfiles) }>
                        <Text style={{fontSize: 18,
                              textAlign: 'center', 
                               marginRight: 36,
                               marginTop:20,
                               marginLeft:20,
                               color:'gray'}}>Blocked Profiles</Text>
               </TouchableOpacity>

    </View>
    
    <View style={{flexDirection:'row'}}>
    <MaterialCommunityIcons  name="account-off-outline" 
     size={27} color="gray"
    style={{marginTop:20,marginLeft:20}} 
    />
              <Pressable  onPress={() => navigation.navigate(ProfilesYou)}>
                     <Text style={{fontSize: 18,
                              textAlign: 'center', 
                               marginRight: 36,
                               marginTop:20,
                               marginLeft:20,
                               color:'gray'}}>Profile you don`t want to see agian</Text>
                  </Pressable>

    </View>
   

    <View style={{flexDirection:'row'}}>
         <MaterialCommunityIcons  name="account-check" 
    size={27} color="gray" 
    style={{marginTop:20,marginLeft:20}} 
    />
              {/* <Pressable  onPress={() => navigation.navigate(ActionConfirmation)}>
                <Text style={{fontSize: 18,
                              textAlign: 'center', 
                               marginRight: 36,
                               marginTop:20,
                               marginLeft:20,
                               color:'gray'}}>Action Confirmation</Text>
                </Pressable> */}
                 <TouchableOpacity onPress={toggleExpansion}>
    <Text style={{
    fontSize: 18,
    textAlign: 'center', 
     marginRight: 36,
     marginTop:20,
     marginLeft:20,
     color:'gray'
   
  }}>

 {expanded ? 'Action Confirmation' : 'Action Confirmation'}
  </Text>
 
 </TouchableOpacity>
  </View>
    {expanded && (
    <View style={{flexDirection:'row',marginLeft:30}}>
             <Text style={{fontSize:14,
                            marginBottom:0,
                            marginRight:20,
                            marginLeft:25,
                            marginTop:15,
                            }}>Confirm before sending interest </Text>
            
             <Switch 
             value={isSwitchOn}
              onValueChange={toggleSwitch} 
             color="green"
             style={{marginLeft:10,}}/>               
           </View>
               )}
         
         
    
    <View style={{flexDirection:'row'}}>
    <MaterialCommunityIcons name="phone-check" size={27} color="gray" 
     style={{marginTop:20,marginLeft:20}} />
                <Pressable  onPress={() => navigation.navigate(PhonePermissions)}>
                <Text style={{fontSize: 18,
                              textAlign: 'center', 
                               marginRight: 36,
                               marginTop:20,
                               marginLeft:20,
                               color:'gray'}}>Phone Permissions</Text>
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