
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";


export default function PhotoVerifaction()  {
  return (
    <View style={{ flex: 1,marginTop:20,alignItems:'center'}}>
        <View style={{
          flexDirection:'row',
          height:70,
          width:'80%',
          alignItems:'center',
          backgroundColor: '#FFB6C1',
          borderRadius:5,
          borderWidth: 2,
          borderColor:'black',
          marginTop:10,
          marginLeft:10
        }}>
        <View style={{width:40,height:40,borderRadius:30,backgroundColor:'#EC7388',marginLeft:5,}}>
       <MaterialCommunityIcons
                 onPress={() => navigation.navigate(HomeScreen)}
                    name="account-question" 
                    size={27} 
                    color="gold" 
                    style={{marginTop:5, marginLeft:8,alignItems:'center',justifyContent:'center'}} 
                />
                </View>
                        <Text style={{fontSize:14,
                              flex: 1, 
                              textAlign: 'center', 
                               marginTop:0,
                               marginLeft:7,
                               marginRight:10}}>Profile Photo is missing</Text>
</View>
                <Text style={{fontSize:14,
                              textAlign: 'center', 
                               marginTop:10,
                               marginLeft:20,
                               marginRight:30}}> Add a photo to your profile and verify it by uploading your selfie</Text>
    <View style={styles.button}>
        <Text style={{textAlign:'center',color:'white'}}>Add Photo</Text>
       </View>
    </View>
  );
}

const styles=StyleSheet.create({
  button:
  {
    backgroundColor: 'orange',
      borderRadius:20,
      height: 40,
      width: 100,
      marginLeft:10,
      marginTop:20,
      justifyContent: 'center'
     
  }
});


