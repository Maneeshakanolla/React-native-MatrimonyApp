import React from 'react';
import { View, Text, StyleSheet, 
  Image ,TextInput,TouchableOpacity,
  SafeAreaProvider,useSafeAreaInsets, 
  ImageBackground,
   ScrollView,
   Pressable,Alert,
   Modal,
   ViewComponent} from 'react-native';

import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import HomeScreen from './Home';
import ProgressBar from '../ProgressBar';
import { useEffect } from 'react';
import { Entypo } from '@expo/vector-icons';

export default function HelpCenter(){
  const navigation = useNavigation();
  const [press,setPress]=useState(false)
  
const navigateToNestedScreen = () => {
      navigation.navigate('NestedStackNavigator', { screen: 'NestedScreen' });
    };

    
        const [searchQuery, setSearchQuery] = useState('');
      
        const handleSearch = () => {
          // You can perform search operations here
          onSearch(searchQuery);
        };

  return (
     
        <View style={styles.container} >
            <View style={styles.sectionHeader}>
              
              <Feather
                 onPress={() => navigation.navigate(HomeScreen)}
                    name="arrow-left" 
                    size={27} 
                    color="black" 
                    style={{marginTop:20,marginLeft:10}} 
                />
                <Text style={{fontSize: 18,
                              flex: 1, 
                              textAlign: 'center', 
                               marginRight: 36,
                               marginTop:20,
                               color:'black'}}>Help center</Text>
                </View> 

         <TextInput
        style={styles.input}
        placeholder="Type Keywords to find answers......"
        onChangeText={(text) => setSearchQuery(text)}
        onSubmitEditing={handleSearch}
        value={searchQuery}
      />

    <ScrollView>
    <View style={styles.line}>
        <View style={{flexDirection:'row'}}>
    <Text style={{fontSize:14,
                   marginBottom:10,
                   marginRight:20,
                   marginLeft:20,
                   marginTop:10,
                   }}>I want to edit my profile</Text>                 
   <Feather 
   name="chevron-right" 
   size={25} 
   color="black" 
   style={{marginTop:0,marginLeft:70}}  />
  </View>
  </View>
  <View style={styles.line}>
        <View style={{flexDirection:'row'}}>
    <Text style={{fontSize:14,
                   marginBottom:10,
                   marginRight:20,
                   marginLeft:20,
                   marginTop:10,
                   }}>I want to update my contact details</Text>                 
   <Feather 
   name="chevron-right" 
   size={25} 
   color="black" 
   style={{marginTop:5  ,marginLeft:0}}  />
  </View>
  </View>
  <View style={styles.line}>
        <View style={{flexDirection:'row'}}>
    <Text style={{fontSize:14,
                   marginBottom:10,
                   marginRight:20,
                   marginLeft:20,
                   marginTop:10,
                   }}>I want to add my photos</Text>                 
   <Feather 
   name="chevron-right" 
   size={25} 
   color="black" 
   style={{marginTop:0,marginLeft:70}}  />
  </View>
  </View>
 
  <View style={styles.line}>
        <View style={{flexDirection:'row'}}>
    <Text style={{fontSize:14,
                   marginBottom:10,
                   //marginRight:20,
                   marginLeft:20,
                   marginTop:10,
                   }}>Uploaded photos are not visible in my
                   profile</Text>                 
   <Feather 
   name="chevron-right" 
   size={25} 
   color="black" 
   style={{marginTop:8,marginLeft:0}}  />
  </View>
  </View>

  <View style={styles.line}>
        <View style={{flexDirection:'row'}}>
    <Text style={{fontSize:14,
                   marginBottom:10,
                   marginRight:20,
                   marginLeft:20,
                   marginTop:10,
                   }}>I want to edit my profile</Text>                 
   <Feather 
   name="chevron-right" 
   size={25} 
   color="black" 
   style={{marginTop:0,marginLeft:80}}  />
  </View>
  </View>

  <Text style={{fontSize:18,
                              // marginRight:20,
                               marginLeft:20,
                               marginTop:20,
                               fontWeight:500,
                               //color:'#C80FC0'
                         }}>Recommended topics</Text>

<View style={{
        height:120,
        width:'95%',
        backgroundColor: '#379F93',
        borderRadius:5,
       // borderWidth: 2,
       // borderColor:'#000000',
        marginTop:10,
        marginLeft:10
      }}>
        <Entypo name="v-card" size={35} color="white" 
        style={{marginLeft:20,marginTop:10}}/>
   
      <View style={{flexDirection:'row'}} >
             <Text style={{fontSize:14,
                               //textAlign:'center',
                               marginTop:5,
                               marginLeft:20,
                               fontWeight: 'bold',
                               color:'white',
                               marginRight:10}}>My Profile and Photos</Text>
             <Feather 
                name="chevron-right" 
                size={25} 
                color="white" 
               style={{marginTop:0,marginLeft:100}}  />
        </View>
        <Text style={{fontSize:14,
                               marginTop:5,
                               marginLeft:20,
                               fontWeight: 'bold',
                               color:'white',
                               marginRight:50}}>Update latest information about yourself and
                               add your most recent photos</Text>
      </View>

      <View style={{
        height:120,
        width:'95%',
        backgroundColor: '#446CA8',
        borderRadius:5,
       // borderWidth: 2,
       // borderColor:'#000000',
        marginTop:10,
        marginLeft:10
      }}>
        <Entypo name="v-card" size={35} color="white" 
        style={{marginLeft:20,marginTop:10}}/>
   
      <View style={{flexDirection:'row'}} >
             <Text style={{fontSize:14,
                               //textAlign:'center',
                               marginTop:5,
                               marginLeft:20,
                               fontWeight: 'bold',
                               color:'white',
                               marginRight:10}}>Matches that i see</Text>
             <Feather 
                name="chevron-right" 
                size={25} 
                color="white" 
               style={{marginTop:0,marginLeft:100}}  />
        </View>
        <Text style={{fontSize:14,
                               marginTop:5,
                               marginLeft:20,
                               fontWeight: 'bold',
                               color:'white',
                               marginRight:50}}>Know how to fine-tune the matches you see by
                               editing your partner preferences.</Text>
      </View>

      <View style={{
        height:120,
        width:'95%',
        backgroundColor: '#C2617E',
        borderRadius:5,
       // borderWidth: 2,
       // borderColor:'#000000',
        marginTop:10,
        marginLeft:10
      }}>
        <Entypo name="v-card" size={35} color="white" 
        style={{marginLeft:20,marginTop:10}}/>
   
      <View style={{flexDirection:'row'}} >
             <Text style={{fontSize:14,
                               //textAlign:'center',
                               marginTop:5,
                               marginLeft:20,
                               fontWeight: 'bold',
                               color:'white',
                               marginRight:10}}>Membership & Payments</Text>
             <Feather 
                name="chevron-right" 
                size={25} 
                color="white" 
               style={{marginTop:0,marginLeft:100}}  />
        </View>
        <Text style={{fontSize:14,
                               marginTop:5,
                               marginLeft:20,
                               fontWeight: 'bold',
                               color:'white',
                               marginRight:50}}>Know our different premium membership
                               offers,benefits and exclusive pakages</Text>
      </View>

      <View style={{
        height:120,
        width:'95%',
        backgroundColor: '#8972BA',
        borderRadius:5,
       // borderWidth: 2,
       // borderColor:'#000000',
        marginTop:10,
        marginLeft:10
      }}>
        <Entypo name="v-card" size={35} color="white" 
        style={{marginLeft:20,marginTop:10}}/>
   
      <View style={{flexDirection:'row'}} >
             <Text style={{fontSize:14,
                               //textAlign:'center',
                               marginTop:5,
                               marginLeft:20,
                               fontWeight: 'bold',
                               color:'white',
                               marginRight:10}}>Report a Member</Text>
             <Feather 
                name="chevron-right" 
                size={25} 
                color="white" 
               style={{marginTop:0,marginLeft:100}}  />
        </View>
        <Text style={{fontSize:14,
                               marginTop:5,
                               marginLeft:20,
                               fontWeight: 'bold',
                               color:'white',
                               marginRight:50}}>Anonymously report suspicious profiles.</Text>
      </View>

      <View style={{
        height:120,
        width:'95%',
        backgroundColor: '#379F93',
        borderRadius:5,
       // borderWidth: 2,
       // borderColor:'#000000',
        marginTop:10,
        marginLeft:10
      }}>
        <Entypo name="v-card" size={35} color="white" 
        style={{marginLeft:20,marginTop:10}}/>
   
      <View style={{flexDirection:'row'}} >
             <Text style={{fontSize:14,
                               //textAlign:'center',
                               marginTop:5,
                               marginLeft:20,
                               fontWeight: 'bold',
                               color:'white',
                               marginRight:10}}>Settings</Text>
             <Feather 
                name="chevron-right" 
                size={25} 
                color="white" 
               style={{marginTop:0,marginLeft:100}}  />
        </View>
        <Text style={{fontSize:14,
                               marginTop:5,
                               marginLeft:20,
                               fontWeight: 'bold',
                               color:'white',
                               marginRight:50}}>Manage your account related information</Text>
      </View>

      <Text style={{fontSize:18,
                              // marginRight:20,
                               marginLeft:20,
                               marginTop:20,
                               fontWeight:500,
                               //color:'#C80FC0'
                         }}>Facing technical difficulties with the application?</Text>

   <TouchableOpacity style={{
        backgroundColor: 'white',
        borderRadius: 30,
        height:30,
        width:180,
        marginTop:10,
        marginLeft:20,
        marginRight:10,
        borderColor:'black',
        borderWidth:1,
       // alignSelf: 'center',
        justifyContent: 'center'
      }} 
      //onPress={EditPreferences}
      >
        <Text style={{ color: 'black', alignSelf: 'center' }}>Report technical error</Text>
      </TouchableOpacity>


    
    </ScrollView>
   </View>
       
       
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white',
        marginBottom:20
    },
    sectionHeader: {
      flexDirection:'row',
      height:70,
      width:'100%',
      backgroundColor: 'white',
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
    button: {
        backgroundColor: '#DA5E74',
        borderRadius: 30,
        height:30,
        width:150,
        marginTop:5,
        marginRight:10,
        alignSelf: 'center',
        justifyContent: 'center'
      },
   
        line: {
        position: 'relative',
        //flexDirection: 'row',
        //alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderColor: 'black',
        borderRadius: 30,
        width:'95%',
        marginTop:15,
        marginLeft:10,
        marginRight:10
      },
      input: {
        height: 40,
        width:'90%',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius:10,
        marginLeft:20,
        paddingHorizontal: 10,
      },
     
    
});