import React from "react";
import { View, Text, StyleSheet } from "react-native";


export default function ContactedYou(){
    return(
        
        <View style={styles.container}>
            <Text>Contacted You page</Text>
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