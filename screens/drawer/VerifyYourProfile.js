import {StatusBar,ScrollView, View,Text, Button ,StyleSheet,
   TextInput, Pressable,Image,TouchableOpacity,Animated,Dimensions} from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { Fontisto } from '@expo/vector-icons';
import { Entypo } from "@expo/vector-icons";
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Ionicons,Feather } from '@expo/vector-icons';
import { Center } from "native-base";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import IDVerification from "../VerificationTabs/IDVerification";
import PhotoVerifaction from "../VerificationTabs/PhotoVerification";
import SalaryVerification from "../VerificationTabs/SalaryVerification";
import EducationVerification from "../VerificationTabs/EducationVerification";
import MobileVerication from "../VerificationTabs/MobileNumberVerification";



const Tab = createMaterialTopTabNavigator();
const { width } = Dimensions.get('window');


function VerifyYourProfile ({navigation}) {
    // const navigation = useNavigation()
return(
      <View style={styles.container}>
         <StatusBar hidden={true} />
      <View style={styles.box2}>
      <View style={{
        alignItems: 'center',
        marginTop: 30,
      }}>
      <Feather name="alert-circle" size={25} color="gray" 
                    style={{
                        position: 'absolute',
                        //bottom: 0,
                        top:0,
                        right: 140,
                        backgroundColor: '#00008B',
                        borderRadius: 10,
                        padding: 5,
                    }}
                />  
      <Ionicons name="person-circle-outline" size={120} color="gray" /> 
      </View>
      <Text
      style={{color:'white',
      textAlign:'center',
      fontSize:20,
      fontWeight:'normal',
      marginLeft:60,
      marginRight:60}}>
      Your profile is pending
         verification
      </Text>
</View>


<Tab.Navigator
      tabBarOptions={{
        //tabBarScrollEnabled:true,
        scrollEnabled: true,
      //  tabStyle: { width: 6}, // Adjust width as per your requirement
        activeTintColor: 'blue',
        inactiveTintColor: 'gray',
        indicatorStyle: { backgroundColor: 'green' },
        style: { backgroundColor: 'white' },}}>
        <Tab.Screen name="IDVerification" component={IDVerification}
        options={{ 
          tabBarOptions: { tabStyle: { width: width / 3 } } }} 
      
        />
        <Tab.Screen name="PhotoVerifaction" component={PhotoVerifaction}
        options={{ 
          tabBarOptions: { tabStyle: { width: width /3 } } }} 
      
        />
        <Tab.Screen name="SalaryVerification" component={SalaryVerification}/>
        <Tab.Screen name="EducationVerification" component={EducationVerification}/>
        <Tab.Screen name="MobileVerification" component={MobileVerication}/>
      </Tab.Navigator>
       
 </View>
 
    )
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
     backgroundColor: 'white',
     //paddingTop: 20
    },
    box2:{
        height:300,
        width:360,
       // marginTop:50,
        backgroundColor:'#00008B',
        borderRadius:5,
        shadowColor:'#000',
        shadowOffset:{
            width:0,
            height:2,
        }
    },
    inputContainer: {
      position: 'relative',
      flexDirection: 'row',
      alignItems: 'center',
      margin: 10,
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: 'black',
      padding: 10,
      borderRadius: 30,
      marginBottom: 20,
    },
    input: {
        flex: 1,
        paddingLeft: 10,
        fontSize: 16,
        height: 30,
      },
      overlappingText: {
        position: 'absolute',
        top: -8,
        left: 20,
        backgroundColor: 'white',
        paddingHorizontal: 5,
        color: '#A9A9A9',
      },
      button: {
        height: 40,
        width: 100,
        paddingHorizontal:10,
        marginBottom:10,
        borderRadius: 30,
        marginTop:20,
        marginLeft:70,
        color:'black'
       
      },
      circle: {
        width:50,
        height: 50,
        borderRadius: 50, // half of the width/height to make it a circle
        backgroundColor: 'red', // any color you want
      },
     
    
   
  });

 
export default VerifyYourProfile;