import { StyleSheet, View,Text } from "react-native";
import Settings from "../drawer/Settings";
import { useNavigation } from "@react-navigation/native";

import { Feather } from '@expo/vector-icons';
export default function CallPreferences(){
    const navigation=useNavigation();
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
                           color:'white'}}>Call Preferences</Text>

           
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

});