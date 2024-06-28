import { StyleSheet, View,Text, ScrollView,Alert,Modal, Pressable,TouchableHighlight } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Switch } from "react-native-paper";
import { Feather,Ionicons } from '@expo/vector-icons';
import { useState,useEffect } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import MoreAlerts from "./MoreAlert";

export default function Notification({text, maxLines}){
  const navigation=useNavigation();
  const [add, setAdd] = useState(false);
  
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const [expanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(true);
  };


  


  const toggleSwitch = () => setIsSwitchOn(!isSwitchOn);
    return(
        <View style={styles.container} >
        <View style={styles.sectionHeader}>
          
          <Feather
             onPress={() => navigation.goBack()}
                name="arrow-left" 
                size={27} 
                color="black" 
                style={{marginTop:30,marginLeft:10}} 
            />
            <Text style={{fontSize: 18,
                          flex: 1, 
                          textAlign: 'center', 
                           marginRight: 36,
                           marginTop:30,
                           color:'black'}}>Notification</Text>
        </View>
  <ScrollView>
        <Text style={{marginTop:10,marginLeft:20,color:'green',fontSize:16}}>
        Member Activity
        </Text>
        <Text style={{marginTop:10,marginLeft:20,fontSize:12}}>
        If you turn these off, you won’t be notified of any member’s activity on your profile 
        </Text>
     <View style={styles.line}>
     <Text style={{marginTop:20,marginLeft:25,fontSize:14,fontWeight:'bold'}}>
        Phone Number Views 
        </Text>
    <View style={{flexDirection:'row'}}>
    <Text style={{fontSize:13,
                   marginBottom:10,
                   marginRight:20,
                   marginLeft:25,
                   marginTop:15,
                   }}>when members view your number</Text>
   
    <Switch 
    value={isSwitchOn}
     onValueChange={toggleSwitch} 
    color="green"
    style={{marginLeft:40,}}/>               
  
  
  </View>
  </View>
  <View style={styles.line}>
     <Text style={{marginTop:20,marginLeft:25,fontSize:14,fontWeight:'bold'}}>
       Requests
        </Text>
    <View style={{flexDirection:'row'}}>
    <Text style={{fontSize:13,
                   marginBottom:10,
                   marginRight:0,
                   marginLeft:25,
                   marginTop:15,
                   }}>when members request for your information</Text>
   
    <Switch 
    value={isSwitchOn}
     onValueChange={toggleSwitch} 
    color="green"
    style={{marginLeft:0,marginRight:20}}/>               
  
  
  </View>
  </View>

  <View style={styles.line}>
     <Text style={{marginTop:20,marginLeft:25,fontSize:14,fontWeight:'bold'}}>
        Shortlist 
        </Text>
    <View style={{flexDirection:'row'}}>
    <Text style={{fontSize:13,
                   marginBottom:10,
                   marginRight:20,
                   marginLeft:25,
                   marginTop:15,
                   }}>when members shortlist you</Text>
   
    <Switch 
    value={isSwitchOn}
     onValueChange={toggleSwitch} 
    color="green"
    style={{marginLeft:70,}}/>               
  </View>
  </View>

  <View style={styles.line}>
     <Text style={{marginTop:20,marginLeft:25,fontSize:14,fontWeight:'bold'}}>
        Chats 
        </Text>
    <View style={{flexDirection:'row'}}>
    <Text style={{fontSize:13,
                   marginBottom:10,
                   marginRight:20,
                   marginLeft:25,
                   marginTop:15,
                   }}>when members are online or initiate chat</Text>
   
    <Switch 
    value={isSwitchOn}
     onValueChange={toggleSwitch} 
    color="green"
    style={{marginLeft:0,}}/>               
  </View>
  </View>
  <TouchableHighlight onPress={() => 
    navigation.navigate(MoreAlerts)
  }>
  {/* <TouchableHighlight  onPress={() => setAdd(true)}> */}
  <Text style={{
    fontSize:16,
    marginBottom:10,
    marginRight:20,
    marginLeft:30,
    marginTop:15,
    color:'orange'
  }}>
  More Alerts
  </Text>
  </TouchableHighlight>
  {/* <Modal
        // animationType="slide"
        // transparent={true}
        // visible={modalVisible}
        // onRequestClose={closeModal}
      // visible={add} onRequestClose={() => setAdd(false)}
      >
        <View style={{
           flex: 1,
           justifyContent: 'center',
           alignItems: 'center',
           backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}>
          <View style={{
            backgroundColor: 'white',
            padding: 20,
            borderRadius: 10,
            elevation: 5,
          }}>
            <Text>This is the modal content</Text>
            <TouchableOpacity  onPress={() => setAdd(false)}>
              <Text style={{
                 marginTop: 10,
                 fontSize: 16,
                 color: 'blue',
              }}>Close Modal</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal> */}
      
        
  <Text style={{
    fontSize:16,
    marginRight:20,
    marginLeft:20,
    marginTop:15,
    color:'green'
  }}>
  Maches
  </Text> 
  <Text style={{
    fontSize:12,
    marginRight:20,
    marginLeft:30,
    marginTop:5,
    
  }}>
  if you turn these off,you might miss out on our recommendation based on yous preferences
  </Text> 

  <View style={styles.line}>
     <Text style={{marginTop:20,marginLeft:25,fontSize:14,fontWeight:'bold'}}>
     New Matches 
        </Text>
    <View style={{flexDirection:'row'}}>
    <Text style={{fontSize:10.2,
                   marginBottom:10,
                   marginRight:20,
                   marginLeft:25,
                   marginTop:15,
                   }}>Everyday</Text>
   
             
  </View>
  </View>

  <View style={styles.line}>
     <Text style={{marginTop:20,marginLeft:25,fontSize:14,fontWeight:'bold'}}>
     Daily Recommendations 
        </Text>
    <View style={{flexDirection:'row'}}>
    <Text style={{fontSize:10.2,
                   marginBottom:10,
                   marginRight:20,
                   marginLeft:25,
                   marginTop:15,
                   }}>Everyday</Text>
   
    <Switch 
    value={isSwitchOn}
     onValueChange={toggleSwitch} 
    color="green"
    style={{marginLeft:190,}}/>               
  </View>
  </View>

  <View style={styles.line}>
     <Text style={{marginTop:20,marginLeft:25,fontSize:14,fontWeight:'bold'}}>
     Based on your activity 
        </Text>
    <View style={{flexDirection:'row'}}>
    <Text numberOfLines={2} style={{fontSize:10.2,
                   marginBottom:10,
                   marginRight:0,
                   marginLeft:25,
                   marginTop:15,
                  }}>Get notified about profiles similar to the onces you like </Text>
   <Switch 
    value={isSwitchOn}
     onValueChange={toggleSwitch} 
    color="green"
    style={{marginLeft:0,marginTop:0}}/>               
  </View>
  </View>

  <TouchableOpacity onPress={toggleExpansion}>
  <Text style={{
    fontSize:16,
    marginBottom:10,
    marginRight:20,
    marginLeft:40,
    marginTop:15,
    color:'orange',
   
  }}>

 {expanded ? 'Show less' : 'Other Settings'}
  </Text>
 
 </TouchableOpacity>
 {expanded && (
              <View style={{marginTop:10}}>
              <Text style={{
                fontSize:16,
                marginBottom:10,
                marginRight:20,
                marginLeft:40,
                marginTop:0,
                color:'#0AFCC2',
              }}>Premium</Text>
              <Text style={{
                fontSize:12,
                marginBottom:0,
                marginRight:20,
                marginLeft:40,
                marginTop:0,
                
              }}>If you turn these off, you miss out on offers& promotions</Text>

<View style={styles.line}>
     <Text style={{marginTop:20,marginLeft:25,fontSize:14,fontWeight:'bold'}}>
     Membership Offers
        </Text>
    <View style={{flexDirection:'row'}}>
    <Text style={{fontSize:14,
                   marginBottom:10,
                   marginRight:20,
                   marginLeft:25,
                   marginTop:15,
                   }}>packages, Discounts, etc </Text>
   
    <Switch 
    value={isSwitchOn}
     onValueChange={toggleSwitch} 
    color="green"
    style={{marginLeft:60,}}/>               
  </View>
  </View>
        </View>
      )}

 
  </ScrollView>
  <Modal
visible={add} onRequestClose={() => setAdd(false)}
   >            
        <View style={styles.container} >
        <View style={styles.sectionHeader}>
          
          <Feather
              onPress={() => setAdd(false)}
                name="arrow-left" 
                size={27} 
                color="black" 
                style={{marginTop:30,marginLeft:10}} 
            />
            <Text style={{fontSize: 18,
                          flex: 1, 
                          textAlign: 'center', 
                           marginRight: 36,
                           marginTop:30,
                           color:'black'}}>More Alerts</Text>
           </View>
           </View>
            </Modal>
   

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
      height:80,
      width:'100%',
      backgroundColor: 'White',
      borderRadius: 10,
      shadowColor: 'black',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    line: {
      position: 'relative',
      //flexDirection: 'row',
      //alignItems: 'center',
      justifyContent: 'center',
      borderBottomWidth: 1,
      borderColor: 'black',
      borderRadius: 30,
      width:'100%',
      marginTop:0,
      marginLeft:10,
      marginRight:10
    },
   

});