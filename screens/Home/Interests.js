import React from "react";
import { View, Text, StyleSheet } from "react-native";


export default function Interests(){
    return(
        
        <View style={styles.container}>
            <Text>Interests page</Text>
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