
import { Checkbox, HStack, ScrollView, VStack } from 'native-base';
import React from 'react';
import { View, Text,Pressable,StyleSheet, TextInput } from 'react-native';


import { useState } from 'react';

  

export default function IDVerification()  {
  const [isSelected, setSelection] = useState(false);
  
  return (
    <View style={styles.container}>
    <ScrollView>
      <Text style={{marginLeft:20,marginRight:20,}}>Select one of the below documents to verify your
profile details. This information would be used only
to verify your details and will not be stored or shown 
to other members.</Text>
<View style={{flexDirection:'row'}}>
<View style={{
  height:40,
  width:105,
  backgroundColor: 'white',
  borderRadius: 20,
  borderWidth: 2,
  borderColor:'gray',
  marginLeft:20,
  marginTop:20
}}>
            <Pressable 
          onPress={()=> navigation.navigate()}>
               <Text style={{fontSize:12,
                             // flex: 1, 
                              textAlign: 'center', 
                               marginTop:8,
                               marginLeft:7,
                               marginRight:5}}>Aadhaar Card</Text>
                               </Pressable>
                               </View>
  <View style={{
  height:40,
  width:105,
  backgroundColor: 'white',
  borderRadius: 20,
  borderWidth: 2,
  borderColor:'gray',
  marginLeft:20,
  marginTop:20
}}>
                               
            <Pressable 
          onPress={()=> navigation.navigate()}>
               <Text style={{fontSize:12,
                             // flex: 1, 
                              textAlign: 'center', 
                               marginTop:8,
                               marginLeft:7,
                               marginRight:5}}>PAN Card</Text>
                               </Pressable>
                               </View>
      
       </View>
       <View style={{flexDirection:'row'}}>
<View style={{
  height:40,
  width:105,
  backgroundColor: 'white',
  borderRadius: 20,
  borderWidth: 2,
  borderColor:'gray',
  marginLeft:20,
  marginTop:20
}}>
            <Pressable 
          onPress={()=> navigation.navigate()}>
               <Text style={{fontSize:12,
                             // flex: 1, 
                              textAlign: 'center', 
                               marginTop:8,
                               marginLeft:7,
                               marginRight:5}}>Driving License</Text>
                               </Pressable>
                               </View>
  <View style={{
  height:40,
  width:105,
  backgroundColor: 'white',
  borderRadius: 20,
  borderWidth: 2,
  borderColor:'gray',
  marginLeft:20,
  marginTop:20
}}>
                               
            <Pressable 
          onPress={()=> navigation.navigate()}>
               <Text style={{fontSize:12,
                             // flex: 1, 
                              textAlign: 'center', 
                               marginTop:8,
                               marginLeft:7,
                               marginRight:5}}>Voter ID</Text>
                               </Pressable>
                               </View>
    </View>

   <TextInput
   placeholder='Enter your Goverment ID number'
   style={styles.inputContainer}/>
  <View style={{marginLeft:20}}>
 
      {/* <Checkbox
       shadow={2} value="green" accessibilityLabel="This is a dummy checkbox" defaultIsChecked>
        I accept the terms & conditions
      </Checkbox> */}
            
        <Checkbox size="md" defaultIsChecked value="test" colorScheme="green" >
       <Text style={{marginLeft:10,marginRight:60}}> By entering my goverment ID number, I am giving
         my consent for verifying my profile
         </Text>
        </Checkbox>
       </View>
       <View style={styles.button}>
        <Text style={{textAlign:'center',color:'white'}}>Verify</Text>
       </View>
       <Text style={{marginLeft:10,marginTop:10}}>Don't remember your Goverment ID number?</Text>
<Pressable>
  <Text style={{ textDecorationLine: 'underline',marginLeft:10,marginTop:2}}> Upload a copy of your ID </Text>
</Pressable>
       </ScrollView>        
    </View>
  
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      marginTop: 10,
      backgroundColor:'white',
      marginBottom:20
  },
  button: {
      backgroundColor: '#808080',
      borderRadius:20,
      height: 40,
      width: 100,
      marginTop: 20,
      marginLeft:10,
      justifyContent: 'center'
    },
  
  inputContainer: {
      position: 'relative',
      flexDirection: 'row',
      alignItems: 'center',
      margin: 10,
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: 'gray',
      padding: 10,
      borderRadius:5,
      marginBottom: 20,
    },
    input: {
      flex: 1,
      paddingLeft: 10,
      fontSize: 16,
      height: 30,
      top:10
      
    },
   
    overlappingText: {
      position: 'absolute',
      top: -8,
      left: 20,
      backgroundColor: 'white',
      paddingHorizontal: 5,
      color: '#A9A9A9',
    },
});


