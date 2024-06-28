import { StyleSheet, View,Text,TouchableOpacity } from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { Feather } from '@expo/vector-icons';
export default function MoreAlerts(){
    const navigation=useNavigation();
    const [isSelected, setIsSelected] = useState(false);

    const handleSelectOption = () => {
      setIsSelected(!isSelected);
    };
  
    return(
        <View style={styles.container} >
        <View style={styles.sectionHeader}>
          
          <Feather
             onPress={() => navigation.goBack()}
                name="arrow-left" 
                size={27} 
                color="white" 
                style={{marginTop:20,marginLeft:10}} 
            />
            <Text style={{fontSize: 18,
                          flex: 1, 
                          textAlign: 'center', 
                           marginRight: 36,
                           marginTop:20,
                           color:'white'}}>More Alerts</Text>

           
        </View>
        <Text style={{fontSize:16,
                      marginTop:20,marginLeft:20}}>Choose how often you receive notification about any
                      member`s activity on your profile</Text>
       <Text style={{fontSize: 14,
                    marginTop:20,marginLeft:20,fontWeight:300}}>Express Interest</Text>

        <Text style={{fontSize:12,
                      marginTop:0,marginLeft:20,fontWeight:400}}>When members send an interest</Text>
        <View style={{flexDirection:'row'}}>
        <Text style={{fontSize:14,
                      marginTop:20,marginLeft:20,fontWeight:'normal'}}>
                        Get notified instantly
                      </Text> 
        <TouchableOpacity style={styles.radioButton} onPress={handleSelectOption}>
        <View style={[styles.radioButtonInner, isSelected && styles.radioButtonSelected]} />
      </TouchableOpacity>
        </View>

        <View style={{flexDirection:'row'}}>
        <Text numberOfLines={2}
        style={{fontSize:14,
                      marginTop:20,marginLeft:20,marginRight:40,fontWeight:'normal'}}>
                        Get one notification daily for all
                        interests received
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
        }} >
        {/* <View style={[styles.radioButtonInner, isSelected && styles.radioButtonSelected]} /> */}
      </TouchableOpacity>
        </View>

        <Text style={{fontSize: 14,
                    marginTop:20,marginLeft:20,fontWeight:300}}>Personalised Messages </Text>

        <Text style={{fontSize:12,
                      marginTop:0,marginLeft:20,fontWeight:400}}>When premium members send an messages</Text>

<View style={{flexDirection:'row'}}>
        <Text style={{fontSize:14,
                      marginTop:20,marginLeft:20,fontWeight:'normal'}}>
                        Get notified instantly
                      </Text> 
        <TouchableOpacity style={styles.radioButton} onPress={handleSelectOption}>
        <View style={[styles.radioButtonInner, isSelected && styles.radioButtonSelected]} />
      </TouchableOpacity>
        </View>

        <View style={{flexDirection:'row'}}>
        <Text numberOfLines={2}
        style={{fontSize:14,
                      marginTop:20,marginLeft:20,marginRight:40,fontWeight:'normal'}}>
                       Get one notification daily for all
                       interests received
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
        }} >
        {/* <View style={[styles.radioButtonInner, isSelected && styles.radioButtonSelected]} /> */}
      </TouchableOpacity>
        </View>
        <View style={{ justifyContent: 'center',
      borderBottomWidth: 1,
      borderColor: 'black',
      borderRadius: 30,
      width:'95%',
      marginTop:20,
      marginLeft:10,
      marginRight:10}}></View>

<Text style={{fontSize: 14,
                    marginTop:20,marginLeft:20,fontWeight:300}}>Profile View </Text>

        <Text style={{fontSize:12,
                      marginTop:0,marginLeft:20,fontWeight:400}}>When members view your profile</Text>

<View style={{flexDirection:'row'}}>
        <Text style={{fontSize:14,
                      marginTop:20,marginLeft:20,fontWeight:'normal'}}>
                        Get notified instantly
                      </Text> 
        <TouchableOpacity style={styles.radioButton} onPress={handleSelectOption}>
        <View style={[styles.radioButtonInner, isSelected && styles.radioButtonSelected]} />
      </TouchableOpacity>
        </View>

        <View style={{flexDirection:'row'}}>
        <Text numberOfLines={2}
        style={{fontSize:14,
                      marginTop:20,marginLeft:20,marginRight:40,fontWeight:'normal'}}>
                       Get one notification daily for all
                       interests received
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
        }} >
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
      marginLeft:165
    },
    radioButtonInner: {
      height: 12,
      width: 12,
      borderRadius: 6,
      backgroundColor: 'green',
      display: 'none', // Initially hide the inner circle
    },
    radioButtonSelected: {
      display: 'flex', // Show the inner circle when selected
    },

});