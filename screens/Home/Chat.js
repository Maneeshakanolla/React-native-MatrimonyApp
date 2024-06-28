import React from "react";
import { View, Text ,StyleSheet,Image} from "react-native";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import { Ionicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';

import All from'../Home/All';
import Messages from "../Home/Messages";
import Interests from "../Home/Interests";
import ContactedYou from "../Home/Contacted You";
import ContactedbyYou from "../Home/Contacted by You";
import AwaitingResponse from '../Home/Awaiting Response';

const ContactedYouName='Contacted You';
const ContactedbyYouName='Contacted by You';
const AwaitingResponseName='Awaiting Response'

const Tab= createMaterialTopTabNavigator();

export default function Chat(){
    return(
        
        <View style={styles.container}>
            <View style={{flexDirection:'row',backgroundColor:'white'}}>
                <Text style={{marginLeft:30,marginTop:30,fontWeight:'bold',fontSize:20}}>Chat</Text>
                
                <Ionicons style={{marginLeft:220,marginTop:30,fontWeight:'bold',}} name="chatbox-ellipses-outline" size={20} color="black" />
                <Fontisto style={{marginLeft:308,marginTop:38,fontWeight:'bold', position:'absolute'}} name="search" size={12} color="black" />
                
            </View>

            <Tab.Navigator initialRouteName="Received"
            screenOptions={{ tabBarScrollEnabled: true,tabBarIndicatorStyle:{
                backgroundColor:"green",
                height:4, 
            }, }}>
                <Tab.Screen name="Received" component={Received}/>
                <Tab.Screen name="Awaiting Response" component={AwaitingResponse}/>
                <Tab.Screen name="Calls" component={Calls}/>
            </Tab.Navigator>
            
            
            
        </View>
        
    );
}

function Received(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="All" component={All}/>
            <Tab.Screen name="Messages" component={Messages}/>
            <Tab.Screen name="Interests" component={Interests}/>
        </Tab.Navigator>
        
    )
}
function Calls(){
    return(
        <Tab.Navigator initialRouteName="Contacted You">
            <Tab.Screen name="Contacted You" component={ContactedYou}/>
            <Tab.Screen name="Contacted by You" component={ContactedbyYou}/>
        </Tab.Navigator>
        
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        
    }
})

