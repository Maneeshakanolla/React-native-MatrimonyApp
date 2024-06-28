import { StyleSheet, View,Text,TouchableOpacity } from "react-native";
import Settings from "../drawer/Settings";
import { useNavigation } from "@react-navigation/native";

import { Feather } from '@expo/vector-icons';
export default function PhotoSetting(){
    const navigation=useNavigation();
    return(
        <View style={styles.container} >
         <Text style={{marginLeft:10,marginRight:10}}>Photos or the  first thing  matches look for in a profile</Text>
         <TouchableOpacity style={{
        backgroundColor: 'orange',
        borderRadius: 30,
        height:30,
        width:120,
        marginTop:20,
        marginLeft:30,
        marginRight:10,
        borderColor:'orange',
        borderWidth:2,
       // alignSelf: 'center',
        justifyContent: 'center'
      }} >
      <Text style={{ color: 'white', alignSelf: 'center' }}>Add Photo</Text>
      </TouchableOpacity>
        </View>
    )
}

 const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white',
        marginBottom:20,
        alignItems:'center',
        justifyContent:'center'
    },
   
});