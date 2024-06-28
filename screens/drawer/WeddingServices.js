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

export default function WeddingServices(){
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
                               color:'white'}}>Our Wedding Services</Text>
                </View> 
     <View style={{justifyContent:'center'}}>
                <Text style={{
                               fontSize:16,
                               marginRight:20,
                               marginLeft:20,
                               marginTop:30,
                               textAlign:'center',
                               alignSelf:'center',
                               alignItems:'center',
                               justifyContent:'center',
                               fontWeight:'normal'
                         }}>You have not received or initiated any calls so far </Text>
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