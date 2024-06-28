import React from "react";
import { View, Text, StyleSheet } from "react-native";


export default function ContactedbyYou(){
    return(
        
        <View style={styles.container}>
            <Text> Contacted by You page</Text>
        </View>
        
    );
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})