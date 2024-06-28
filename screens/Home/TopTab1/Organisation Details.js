import React from "react";
import { View, Text, StyleSheet } from "react-native";

//vector icons
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


export default function OrganisationDetails(){
    return(
        
        <View style={styles.container}>
            <View style={styles.rectangle6}>
                <View style={styles.rectangle7}>
                     <View>
                        <Text style={{color:'black',marginLeft:170,fontSize:15,paddingTop:5}}>Members look for</Text>
                        <Text style={{color:'black',marginLeft:140,fontSize:15}}>organisation details while</Text>
                        <Text style={{color:'black',marginLeft:150,fontSize:15}}>searching for a perfect</Text>
                        <Text style={{color:'black',marginLeft:210,fontSize:15}}>match</Text>
                    </View>
                    <View style={styles.rectangle8}>
                        <Text style={{paddingLeft:20,color:'white'}}>Add Organisation</Text>
                    </View>  

                </View>
            </View>
        </View>
        
    );
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        
    },
    rectangle6: {
        width: '100%',
        height: 150,
        backgroundColor:'white', 
        marginTop:1,
        borderColor:'lightgray',
        flexDirection:'row',
        
    },
    rectangle7: {
        width: '100%',
        height: 130,
        backgroundColor:'#D5FFFF', 
        borderColor:'lightgray',
        flexDirection:'row',  
    },
    rectangle8:{
        width: 180,
        height: 30,
        backgroundColor: '#ED8B00', 
        borderRadius:20,
        borderWidth:2,
        borderColor:'#ED8B00',
        marginTop:100,
        position:'absolute',
        marginLeft:150,   
    },
})

