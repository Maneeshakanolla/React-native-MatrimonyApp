import React from "react";
import { View, Text ,StyleSheet,Image, ScrollView} from "react-native";
import { NavigationContainer } from "@react-navigation/native";


import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab=createMaterialTopTabNavigator();

//vector icons
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';


// Top tan navigation *** TabTab1 ***
import AddPhoto from "./TopTab1/Add Photo";
import IDVerification from "./TopTab1/ID Verification";
import AddHoroscope from "./TopTab1/Add Horoscope";
import InstitutionDetails from "./TopTab1/Institution Details";
import OrganisationDetails from "./TopTab1/Organisation Details";
import Star from "./TopTab1/Star";

// Top tan navigation *** TabTab2 ***
// import AddMorePhotos from "../TopTab2/Add More Photos";
// import AddHobbies from "../TopTab2/Add Hobbies";
// import ProfileVideo from "../TopTab2/Profile Video";
// import { createStackNavigator } from "@react-navigation/stack";



// Top tab name change
const AddPhotoName ='Add Photo';
const IDVerificationName='ID Verification';
const AddHoroscopeNmae = 'Add Horoscope';
const InstitutionDetailsName='Institution Details';
const OrganisationDetailsName='Organisation Details';

const AddMorePhotosName='Add More Photos';
const AddHobbiesName='Add Hobbies';
const ProfileVideoName='Profile Video'






export default function BottomTabHome(){
    return(
        <ScrollView>
        <View style={styles.container}>
            <View style={styles.rectangle1}>
            <View >
                <Image
                    source={{uri: 'https://www.lensmen.ie/wp-content/uploads/2015/02/Profile-Portrait-Photographer-in-Dublin-Ireland..jpg'}}
                    style={{width: 70, height: 70,borderRadius:100,marginTop:10,marginLeft:10}} /> 
                    <Entypo name="camera" size={24} color="black" style={{position:'absolute',bottom:1,marginLeft:10}}/>
            </View>
            <View>
                <Text style={{marginLeft:8,marginTop:30}}>Krishna</Text>
                <Text style={{marginLeft:7,paddingTop:5}}>Free Member</Text>
            </View>
            <View style={styles.rectangle2}>
                <Text style={{paddingLeft:6,paddingTop:2,color:'orange'}}>Upgrade</Text>
            </View>
            <FontAwesome name="bell-o" size={24} color="black" style={{paddingLeft:100,paddingTop:20}}/>
            <Entypo name="menu" size={30} color="black"  style={{paddingLeft:6,paddingTop:15}} />
        </View> 
        <View style={styles.rectangle3}>
            <Ionicons name="albums-sharp" size={40} color="black"  style={{marginTop:30}}/> 
            <Entypo name="camera" size={24} color="black" style={{position:'absolute',marginTop:48,marginLeft:28}}/> 
            <View>
                <Text style={{paddingLeft:25,paddingTop:30,}}>Add photo to get 10</Text> 
                <Text style={{paddingLeft:25}}>times more response</Text>
            </View>
            <View style={styles.rectangle4}>
                <Text style={{paddingLeft:6,paddingTop:2,color:'orange'}}>Add Photo</Text>
            </View>
        </View>
        <View style={styles.rectangle5}>
            <FontAwesome5 name="file-pdf" size={25} color="black" style={{paddingTop:20,paddingLeft:6}}/>
            <Text style={{paddingTop:27,paddingLeft:10,fontSize:11}}>Download & share your biodata </Text>
            <Text style={{paddingTop:23,paddingLeft:5,fontSize:19,color:'orange'}}>Download</Text>
        </View> 
        <View style={styles.rectangle6}>
            <View style={styles.rectangle7}>
                <AntDesign name="profile" size={60} color="white" style={{paddingTop:20,paddingLeft:6}} />
                <Entypo name="eye-with-line" size={30} color="red" style={{paddingTop:30,paddingLeft:45,position:'absolute'}} />
                <FontAwesome name="user-circle-o" size={30} color="black" style={{paddingTop:5,paddingLeft:22,position:'absolute'}} />
                <View>
                    <Text style={{color:'white',paddingLeft:15,fontSize:13,paddingTop:10}}>As a free Member , your profile</Text>
                    <Text style={{color:'white',paddingLeft:15,fontSize:13}}>is getting less views from </Text>
                    <Text style={{color:'white',paddingLeft:15,fontSize:13}}>potential matches.</Text>
                </View>
                <View style={styles.rectangle8}>
                    <Text style={{paddingLeft:6,paddingTop:2,color:'white'}}>Upgrade to highlight your profile</Text>
                </View>

            </View>
        </View>
        <View  style={{backgroundColor:'white',marginTop:5}}>
            <Text style={{color:'black',fontSize:18,fontWeight:400,paddingLeft:10}}>Complete your Profile</Text>
            <View style={{flexDirection:'row'}}>
                <Text style={{color:'black',fontSize:14,paddingLeft:10}}>Profile completeness score 45%</Text>
                
            </View>
        </View> 

        <View>
            
            <Tab.Navigator initialRouteName="Add photo"
            screenOptions={{ tabBarScrollEnabled: true,tabBarIndicatorStyle:{
                backgroundColor:"green",
                height:4, 
         
            }, }}
            sceneContainerStyle={{ backgroundColor: "white" }}>
            <Tab.Screen  name="Add Photo" component={AddPhoto} />
            <Tab.Screen name="ID Verification" component={IDVerification} />
            <Tab.Screen name="Add Horoscope" component={AddHoroscope} />
            <Tab.Screen name="Institution Details" component={InstitutionDetails} />
            <Tab.Screen name="Organisation Details" component={OrganisationDetails} />
            <Tab.Screen name="Star" component={Star}/>
            </Tab.Navigator>
        </View>
        <View>
            <Text style={{fontWeight:'bold',fontSize:17}}>Matches Viewed By You (1) </Text>
            <View style={{flexDirection:'row'}}>
                <Image source={{uri:'https://www.lensmen.ie/wp-content/uploads/2015/02/Profile-Portrait-Photographer-in-Dublin-Ireland..jpg'}} style={{width:70, height:100, marginTop:10,borderRadius:15,marginLeft:5}} />
                <FontAwesome5 name="chess-queen" size={30} color="black"  style={{position:'absolute',marginLeft:55}}/>
                <View style={{marginLeft:15}}>
                    <Text style={{fontSize:13}}>Monika</Text>
                    <Text style={{fontSize:13}}>30 Yrs, 5 ft 5 in</Text>
                    <Text style={{fontSize:13}}>B.sc IT /Computers Science,</Text>
                    <Text style={{fontSize:13}}>Business, Hyderabad, </Text>
                    <Text style={{fontSize:13}}>Telangana.</Text>
                    <View style={{flexDirection:'row'}}>
                        <EvilIcons name="calendar" size={24} color="lightblack" />
                        <Text style={{fontSize:13}}>01 Mar 2024</Text>
                    </View>   
                </View>
            </View>   
        </View>
        <View style={{borderWidth:2,borderColor:'lightgray',marginTop:15,}}>
            <View style={{flexDirection:'row',marginTop:10}}>
                <Text style={{fontWeight:'bold',fontSize:12}}> How to be safe on Matrimony.{'\n'} platform ? Actor  Vidya Balan.{'\n'} has a message for you</Text>
                <Text style={{marginLeft:70,color:'orange',marginTop:5}}>See All</Text>
                <AntDesign name="right" size={24} color="orange" style={{marginTop:5}} />
            </View>
            <Text style={{fontSize:10}}>While millions have benefitted from online matrimony,{'\n'} some have come across fraudsters.Learn how to be{'\n'} safe while finding your match online.</Text>

        </View>
        <View style={styles.premium} >
            <View style={{flexDirection:'row'}}>
                <Image source={{uri:'https://www.lensmen.ie/wp-content/uploads/2015/02/Profile-Portrait-Photographer-in-Dublin-Ireland..jpg'}} style={{width:70, height:100, marginTop:15,borderRadius:10,marginLeft:5}} />
                <Text style={{marginTop:10,marginLeft:35,fontSize:12,color:'white'}}>Premium Members find their life{'\n'}partners faster.  Go Premium!</Text>   
            </View>
            <View style={styles.rectangle9}>
                <Text style={{fontSize:12,paddingLeft:7,paddingTop:5}}>Get a flat    3200 0ff 0n 3 month Gold</Text>
            </View >
            <View style={styles.rectangle10}>
                    <Text style={{paddingLeft:25,paddingTop:2,color:'black'}}>Upgrade Now</Text>
            </View>
        </View>
        
        

        
            
            
        </View>
        </ScrollView>
        
    );
}

 


const styles=StyleSheet.create({
    container:{
        flex:1,
        
    },
    fixedContent: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1,
        backgroundColor: 'white',
        padding: 10,
      },
    rectangle1: {
        width: '100%',
        height: 90,
        backgroundColor: 'white',
        marginTop:110,
        borderRadius:30,
        borderWidth:0.5,
        borderColor:'lightgray',
        elevation:5,
        flexDirection:'row',
        
    },
    
    rectangle2:{
        width: 80,
        height: 30,
        backgroundColor: 'white', 
        borderRadius:20,
        borderWidth:2,
        borderColor:'orange',
        marginTop:40,
        position:'absolute',
        marginLeft:190,
        
    },
    rectangle3:{
        width: '100%',
        height: 100,
        backgroundColor: '',
        marginTop:5,
        borderWidth:0.5,
        borderColor:'lightgray',
        flexDirection:'row',

    },
    rectangle4:{
        width: 100,
        height: 30,
        backgroundColor: 'white',
        borderRadius:20,
        borderWidth:2,
        borderColor:'orange',
        marginTop:40,
        marginLeft:12,
        
        
    },
    rectangle5: {
        width: '90%',
        height: 80,
        backgroundColor: 'lightyellow', 
        marginTop:10,
        marginLeft:'5%',
        borderColor:'lightgray',
        flexDirection:'row',
        
    },
    rectangle5: {
        width: '90%',
        height: 80,
        backgroundColor: 'lightyellow', 
        marginTop:10,
        marginLeft:'5%',
        borderColor:'lightgray',
        flexDirection:'row',
        
    },
    rectangle6: {
        width: '100%',
        height: 150,
        backgroundColor:'#DAF7A6', 
        marginTop:10,
        borderColor:'lightgray',
        flexDirection:'row',
        
    },
    rectangle7: {
        width: '85%',
        height: 120,
        marginLeft:'7%',
        backgroundColor:'gray', 
        marginTop:15,
        borderRadius:20,
        borderColor:'lightgray',
        flexDirection:'row',  
    },
    rectangle8:{
        width: 250,
        height: 30,
        backgroundColor: 'orange', 
        borderRadius:20,
        borderWidth:2,
        borderColor:'orange',
        marginTop:80,
        position:'absolute',
        marginLeft:45   
    },
    premium:{
        height:130,
        backgroundColor:'#6DC5D1',
        marginTop:10,
        borderWidth:1,
        borderColor:'lightgray',
        
    },
    rectangle9:{
        height:50,
        width:250,
        position:'absolute',
        marginTop:50,
        marginLeft:90,
        borderRadius:7,
        backgroundColor:'white', 
    },
    rectangle10:{
        width: 150,
        height: 30,
        backgroundColor: 'yellow', 
        borderRadius:20,
        borderWidth:2,
        borderColor:'yellow',
        marginTop:85,
        position:'absolute',
        marginLeft:140  
    },
    
})

