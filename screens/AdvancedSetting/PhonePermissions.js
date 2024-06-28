import { StyleSheet, View,Text, ScrollView } from "react-native";
import Settings from "../drawer/Settings";
import { useNavigation } from "@react-navigation/native";

import { Feather } from '@expo/vector-icons';
export default function PhonePermissions(){
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
                           color:'white'}}>Phone Permissions</Text>

        </View>
        <ScrollView>
        <Text style={{fontSize:20,marginTop:20,marginLeft:10,fontWeight:'bold'}}>Power Usage</Text>
        <Text style={{fontSize:16,marginTop:10,marginLeft:20,fontWeight:200}}>
        Use the following steps to allow Telugu Matrimony app to
        continue running in the background.  
           </Text>
       <Text style={{fontSize:16,marginTop:20,marginLeft:25,fontWeight:300}}>
       1. Go to 'Settings'
           </Text>
           <Text style={{fontSize:16,marginTop:10,marginLeft:25,fontWeight:300}}>
           2. Choose 'Battery' option
           </Text>
           <Text style={{fontSize:16,marginTop:10,marginLeft:25,fontWeight:300}}>
           3. Click 'High Background Power Consumption
           </Text>
           <Text style={{fontSize:16,marginTop:10,marginLeft:25,fontWeight:300}}>
           4. Select and enable Telugu Matrimony app from the list  
           </Text>
           <Text style={{fontSize:16,marginTop:10,marginLeft:25,fontWeight:300}}>
          Note:
           </Text>
           <Text style={{fontSize:12,marginTop:0,marginLeft:25,fontWeight:300}}>
           Depending on your mobile phone's model, the above steps may vary.
           </Text>
           <View style={{ justifyContent: 'center',
      borderBottomWidth: 1,
      borderColor: 'black',
      borderRadius: 30,
      width:'95%',
      marginTop:20,
      marginLeft:10,
      marginRight:10}}/>
      <Text style={{fontSize:20,marginTop:20,marginLeft:10,fontWeight:'bold'}}>Autostart</Text>
        <Text style={{fontSize:16,marginTop:10,marginLeft:20,fontWeight:200}}>
        You need to enable the autostart option to allow
Telugu Matrimony app to start and run in the background.
Use the following steps to enable autostart.
           </Text>
       <Text style={{fontSize:16,marginTop:20,marginLeft:25,fontWeight:300}}>
       1. Go to 'Settings'
           </Text>
           <Text style={{fontSize:16,marginTop:10,marginLeft:25,fontWeight:300}}>
           2. Choose 'More Settings'
           </Text>
           <Text style={{fontSize:16,marginTop:10,marginLeft:25,fontWeight:300}}>
           3. Click 'Applications'
           </Text>
           <Text style={{fontSize:16,marginTop:10,marginLeft:25,fontWeight:300}}>
           4. Select 'Autostart' 
           </Text>
           <Text style={{fontSize:16,marginTop:10,marginLeft:25,fontWeight:300}}>
           5. Enable Telugu Matrimony app
           </Text>
           <Text style={{fontSize:16,marginTop:10,marginLeft:25,fontWeight:300}}>
          Note:
           </Text>
           <Text style={{fontSize:12,marginTop:0,marginLeft:25,fontWeight:300}}>
           Depending on your mobile phone's model, the above steps may vary.
           </Text>

      </ScrollView>
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