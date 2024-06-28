import { StyleSheet, View,Text,Dimensions } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Feather } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import HoroscopeSetting from "../PrivacySettings/HoroscopeSetting";
import VedioProfileSetting from "../PrivacySettings/VedioProfileSetting";
import PhotoSetting from "../PrivacySettings/PhotoSettings";
import MobileSetting from "../PrivacySettings/MobilePrivacySettings";
import VedioChatSetting from "../PrivacySettings/VedioChatScreen";


const Tab = createMaterialTopTabNavigator();
const { width } = Dimensions.get('window');
export default function PrivacySettings(){
  const navigation=useNavigation();
    return(
        <View style={styles.container} >
       
        <View style={styles.sectionHeader}>
        <View style={{flexDirection:'row'}}>
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
                           color:'white'}}>Privacy Settings</Text>
</View>  
</View>
<Tab.Navigator
      tabBarOptions={{
        //tabBarScrollEnabled:true,
        scrollEnabled: true,
      //  tabStyle: { width: 6}, // Adjust width as per your requirement
        activeTintColor: '#FF71CD',
        inactiveTintColor: 'white',
        indicatorStyle: { backgroundColor: '#FF71CD' },
        style: { marginTop:0 , backgroundColor: '#5755FE',},}}>
        <Tab.Screen name="Mobile" component={MobileSetting}
        options={{ 
          tabBarOptions: { tabStyle: { width: width / 3 } } }} 
      />
        <Tab.Screen name="Photo" component={PhotoSetting}
        options={{ 
          tabBarOptions: { tabStyle: { width: width /3 } } }} 
      
        />
        <Tab.Screen name="VedioProfile" component={VedioProfileSetting}/>
        <Tab.Screen name="HoroScope" component={HoroscopeSetting}/>
        <Tab.Screen name="VedioChat" component={VedioChatSetting}/>
      </Tab.Navigator>
       
      
           
      
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
     
      height:70,
      width:'100%',
      backgroundColor: '#5755FE',
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