import { StyleSheet, View,Text ,TouchableOpacity} from "react-native";
import Settings from "../drawer/Settings";
import { useNavigation } from "@react-navigation/native";

import { Feather } from '@expo/vector-icons';
export default function VedioProfileSetting(){
    const navigation=useNavigation();
    return(
        <View style={styles.container} >
         <Text style={{marginLeft:10,marginRight:10}}>Add vedio to your profile</Text>
         <TouchableOpacity style={{
        backgroundColor: 'orange',
        borderRadius: 30,
        height:30,
        width:120,
        marginTop:20,
        borderColor:'orange',
        borderWidth:2,
       // alignSelf: 'center',
        justifyContent: 'center'
      }} >
      <Text style={{ color: 'white', alignSelf: 'center' }}>Add Vedio</Text>
      </TouchableOpacity>
        </View>
    )
}

 const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white',
       justifyContent:'center',
       alignItems:'center'
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