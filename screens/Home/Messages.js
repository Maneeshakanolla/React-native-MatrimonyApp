import React from "react";
import { View, Text, StyleSheet } from "react-native";


export default function Messages(){
    return(
        
        <View style={styles.container}>
            <Text>Messages page</Text>
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