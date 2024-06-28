import React from "react";
import { View, Text, StyleSheet } from "react-native";

//vector icons
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


export default function InstitutionDetails(){
    return(
        
        <View style={styles.container}>
            <View style={styles.rectangle6}>
                <View style={styles.rectangle7}>
                <View>
                        <Text style={{color:'black',marginLeft:130,fontSize:15,paddingTop:10}}>Let matches know where</Text>
                        <Text style={{color:'black',marginLeft:130,fontSize:15}}>your have studied</Text>
                        
                    </View>
                    <View style={styles.rectangle8}>
                        <Text style={{paddingLeft:20,paddingTop:2,color:'white'}}>Add Institution Details</Text>
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
        height: 120,
        backgroundColor:'#FF7276', 
        
        flexDirection:'row',  
    },
    rectangle8:{
        width: 210,
        height: 30,
        backgroundColor: '#ED8B00', 
        borderRadius:20,
        borderWidth:2,
        borderColor:'#ED8B00',
        marginTop:65,
        position:'absolute',
        marginLeft:120,   
    },
})

