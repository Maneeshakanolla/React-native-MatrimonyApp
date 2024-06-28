import React from "react";
import { View, Text, StyleSheet } from "react-native";


export default function Mailbox(){
    return(
        
        <View style={styles.container}>
            <Text>Mailboxpage</Text>
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