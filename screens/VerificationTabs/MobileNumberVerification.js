
import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function MobileVerication()  {
  return (
    <View style={{ flex: 1,  alignItems: 'center' }}>
      <View style={{
          flexDirection:'row',
          height:70,
          width:'80%',
          alignItems:'center',
          backgroundColor: 'skyblue',
          borderRadius:5,
          borderWidth: 2,
          borderColor:'black',
          marginTop:30,
          marginLeft:10,
          borderBottomWidth: 1,
          borderColor: 'blue',
        }}>
        
        <AntDesign 
         onPress={() => navigation.navigate(HomeScreen)}
         name="checkcircleo" size={40} color="blue" 
         style={{marginTop:5, marginLeft:8,alignItems:'center',justifyContent:'center'}} 
         />
       
          <Text style={{fontSize:14,
                              flex: 1, 
                              textAlign: 'center', 
                               marginTop:0,
                               marginLeft:7,
                               marginRight:10}}>Yoour mobile number has been verified successfully.</Text>
                </View>
                <Text style={{fontSize:14,
                              textAlign: 'center', 
                               marginTop:10,
                               marginLeft:20,
                               marginRight:30,
                               fontWeight:'bold'}}>Continue with the following:</Text>

<View style={styles.line}>
    <View style={{flexDirection:'row'}}>
    <Text style={{fontSize:14,
                   marginBottom:10,
                   marginRight:20,
                   marginLeft:40,
                   marginTop:10,
                   }}>ID Verification</Text> 
  <Pressable>                
  <AntDesign name="right" size={24} color="black" 
   style={{marginTop:0,marginLeft:120}}  />
   </Pressable>
  </View>
  </View>

  <View style={styles.line}>
    <View style={{flexDirection:'row'}}>
    <Text style={{fontSize:14,
                   marginBottom:10,
                   marginRight:20,
                   marginLeft:40,
                   marginTop:10,
                   }}>Photo Verification</Text>
  <Pressable>                 
  <AntDesign name="right" size={24} color="black" 
   style={{marginTop:0,marginLeft:100}}  />
   </Pressable>
  </View>
  </View>


    </View>
  );
}

const styles= StyleSheet.create({

  line: {
    position: 'relative',
    //flexDirection: 'row',
    //alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: 'black',
    borderRadius: 30,
    width:'95%',
    marginTop:15,
    marginLeft:10,
    marginRight:10
  },
 
});

