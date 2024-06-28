import { StyleSheet, View,Text,TouchableOpacity } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

import { Feather } from '@expo/vector-icons';
export default function VedioChatSetting(){
  
    const navigation=useNavigation();
    const [isSelected, setIsSelected] = useState(false);

    const handleSelectOption = () => {
      setIsSelected(!isSelected);
    };
    return(
     <View style={styles.container} >
       
      <View style={{flexDirection:'row',marginTop:20}}>
        <Text style={{fontSize:14,
                      marginTop:20,marginLeft:20,fontWeight:'normal'}}>
                     All  Premium Members 
                      </Text> 
    <TouchableOpacity style={{
       borderRadius: 30,
        height:30,
        width:120,
        marginTop:20,
        marginLeft:20,
        marginRight:10,
        borderColor:'#17F0BC',
        borderWidth:2,
       // alignSelf: 'center',
        justifyContent: 'center'
      }} >
      <Text style={{ color: '#17F0BC', alignSelf: 'center' }}>RECOMMENDED</Text>
      </TouchableOpacity>

        <TouchableOpacity style={styles.radioButton} onPress={handleSelectOption}>
        <View style={[styles.radioButtonInner, isSelected && styles.radioButtonSelected]} />
      </TouchableOpacity>
        </View>
    
        <View style={{flexDirection:'row'}}>
        <Text style={{fontSize:14,
                      marginTop:20,marginLeft:20,marginRight:40,fontWeight:'normal'}}>
                      Premium members i have contacted/ responded/shortlisted
                      </Text> 
                   
        <TouchableOpacity style={{
             height: 24,
             width: 24,
             borderRadius: 12,
             borderWidth: 2,
             borderColor: 'gray',
             alignItems: 'center',
             justifyContent: 'center',
             marginRight:10,
             marginTop:20,
             marginLeft:20
        }} onPress={handleSelectOption}>
        {/* <View style={[styles.radioButtonInner, isSelected && styles.radioButtonSelected]} /> */}
      </TouchableOpacity>
        </View>
        <View style={{flexDirection:'row'}}>
        <Text style={{fontSize:14,
                      marginTop:20,marginLeft:20,marginRight:30,fontWeight:'normal'}}>
                     No one ( you won’t be receiving video calls)
                      </Text> 
                   
        <TouchableOpacity style={{
             height: 24,
             width: 24,
             borderRadius: 12,
             borderWidth: 2,
             borderColor: 'gray',
             alignItems: 'center',
             justifyContent: 'center',
             marginRight:10,
             marginTop:20,
             marginLeft:0
        }} onPress={handleSelectOption}>
        {/* <View style={[styles.radioButtonInner, isSelected && styles.radioButtonSelected]} /> */}
      </TouchableOpacity>
        </View>
        
        
        
        </View>
    )
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white',
        marginBottom:20
    },
    sectionHeader: {
      flexDirection:'row',
      height:70,
      width:'100%',
      backgroundColor: '#065EC4',
      borderRadius: 10,
      shadowColor: '#27E2E2',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    radioButton: {
      height: 24,
      width: 24,
      borderRadius: 12,
      borderWidth: 2,
      borderColor: 'gray',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 10,
      marginTop:20,
      marginLeft:0
    },
    radioButtonInner: {
      height: 12,
      width: 12,
      borderRadius: 6,
      backgroundColor: 'red',
      display: 'none', // Initially hide the inner circle
    },
    radioButtonSelected: {
      display: 'flex', // Show the inner circle when selected
    },

});