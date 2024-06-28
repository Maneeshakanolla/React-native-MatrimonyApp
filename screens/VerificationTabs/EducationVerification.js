
import React from 'react';
import { View, Text,StyleSheet } from 'react-native';

export default function EducationVerification()  {
  return (
    <View style={{ flex: 1,  }}>
       <Text style={{fontSize:16,
                              textAlign: 'center', 
                               marginTop:30,
                               marginLeft:20,
                               marginRight:30}}>Educational Qualification mentioned
                               in your profile: M.Tech.</Text>
        <Text style={{fontSize:16,
                              textAlign: 'center', 
                               marginTop:20,
                               marginLeft:20,
                               marginRight:30}}>Upload your education certificate andhelp
                                us verify your educational qualification. the certificate uploaded by
                                you will not be shown to other members
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
      borderWidth: 1,
      borderColor: 'orange',
  }
});

    
