
import React from 'react';
import { View, Text,StyleSheet } from 'react-native';

export default function SalaryVerification()  {
  return (
    <View style={{ flex: 1,  }}>
       <Text style={{fontSize:16,
                              textAlign: 'center', 
                               marginTop:30,
                               marginLeft:20,
                               marginRight:30}}>Annual Income mentioned
                               inyour profile : Rs.7-8 Lakhs.</Text>
        <Text style={{fontSize:16,
                              textAlign: 'center', 
                               marginTop:20,
                               marginLeft:20,
                               marginRight:30}}>Upload your salary slip and 
                               help us verify your current salary.
                               The salary slip uploaded by you wil not be shown toother members.
                               </Text>
    <View style={styles.button}>
        <Text style={{textAlign:'center',color:'orange'}}>Upload from gallery</Text>
       </View>
        <View style={styles.button}>
        <Text style={{textAlign:'center',color:'orange'}}>Capture new image</Text>
       </View>
    </View>
    
  );
}

const styles=StyleSheet.create({
  button:
  {
      backgroundColor: 'white',
      borderRadius:20,
      height: 40,
      width: 150,
      marginLeft:10,
      marginTop:20,
      justifyContent: 'center',
      borderColor: 'orange',
      borderWidth: 1,
     
     
  }
});

    

