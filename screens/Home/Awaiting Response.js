import React from "react";
import { View, Text, StyleSheet } from "react-native";


export default function AwaitingResponse(){
    return(
        
        <View style={styles.container}>
            <Text>Awaiting Response page</Text>
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