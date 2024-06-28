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

export default function EditPreferences(){
  const navigation = useNavigation();
  const [press,setPress]=useState(false)
  
const navigateToNestedScreen = () => {
      navigation.navigate('NestedStackNavigator', { screen: 'NestedScreen' });
    };
  return (
     
        <View style={styles.container} >
            <View style={styles.sectionHeader}>
              
              <Feather
                 onPress={() => navigation.navigate(HomeScreen)}
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
                               color:'white'}}>Edit Preferences</Text>
                </View> 
    <ScrollView>
                <Text style={{fontSize:16,
                               marginRight:20,
                               marginLeft:20,
                               marginTop:10,
                               fontWeight:500
                         }}>Matches recommended by us are based on 
                               Acceptable matches criteria and at times 
                               might go slightly beyond your preferences. </Text>

               <Text style={{fontSize:14,
                               marginRight:20,
                               marginLeft:20,
                               marginTop:10,
                         }}>Turn on “Compulsory” to get matches exactly as per your preferences. </Text>
               <Text style={{fontSize:18,
                               marginRight:20,
                               marginLeft:15,
                               marginTop:10,
                               fontWeight:200
                         }}>*Patent pending</Text>
                <Text style={{fontSize:18,
                              // marginRight:20,
                               marginLeft:20,
                               marginTop:10,
                               fontWeight:500,
                               color:'#C80FC0'
                         }}>Basic Preferences</Text>
    
    <View style={styles.line}>
        <Text style={{fontSize:14,
                 marginRight:20,
                 marginLeft:40,
                 marginTop:10,
                 
                 fontWeight:500
                         }}>Age</Text>
    <View style={{flexDirection:'row'}}>
    <Text style={{fontSize:14,
                   marginBottom:10,
                   marginRight:20,
                   marginLeft:40,
                   marginTop:10,
                   }}>25-33 yrs</Text>                 
   <MaterialCommunityIcons 
   name="pencil-outline" 
   size={25} 
   color="black" 
   style={{marginTop:0,marginLeft:150}}  />
  </View>
  </View>

  <View style={styles.line}>
        <Text style={{fontSize:14,
                 marginRight:20,
                 marginLeft:40,
                 marginTop:10,
                 
                 fontWeight:500
                         }}>Height</Text>
    <View style={{flexDirection:'row'}}>
    <Text style={{fontSize:14,
                   marginBottom:10,
                   marginRight:20,
                   marginLeft:40,
                   marginTop:10,
                   }}>4'6"-5'5"</Text>                 
   <MaterialCommunityIcons 
   name="pencil-outline" 
   size={25} 
   color="black" 
   style={{marginTop:0,marginLeft:150}}  />
  </View>
  </View> 
 <View style={styles.line}>
        <Text style={{fontSize:14,
                 marginRight:20,
                 marginLeft:40,
                 marginTop:10,
                 
                 fontWeight:500
                         }}>Marital Status</Text>
    <View style={{flexDirection:'row'}}>
    <Text style={{fontSize:14,
                   marginBottom:10,
                   marginRight:20,
                   marginLeft:40,
                   marginTop:10,
                   }}>any</Text>                 
   <MaterialCommunityIcons 
   name="pencil-outline" 
   size={25} 
   color="black" 
   style={{marginTop:0,marginLeft:180}}  />
  </View>
  </View>

  <View style={styles.line}>
        <Text style={{fontSize:14,
                 marginRight:20,
                 marginLeft:40,
                 marginTop:10,
                 
                 fontWeight:500
                         }}>Mother Tongue</Text>
    <View style={{flexDirection:'row'}}>
    <Text style={{fontSize:14,
                   marginBottom:10,
                   marginRight:20,
                   marginLeft:40,
                   marginTop:10,
                   }}>Hindi</Text>                 
   <MaterialCommunityIcons 
   name="pencil-outline" 
   size={25} 
   color="black" 
   style={{marginTop:0,marginLeft:170}}  />
  </View>
  </View>

  <View style={styles.line}>
        <Text style={{fontSize:14,
                 marginRight:20,
                 marginLeft:40,
                 marginTop:10,
                 
                 fontWeight:500
                         }}>Eating Habits</Text>
    <View style={{flexDirection:'row'}}>
    <Text style={{fontSize:14,
                   marginBottom:10,
                   marginRight:20,
                   marginLeft:40,
                   marginTop:10,
                   }}>Doesn’t matter</Text>                 
   <MaterialCommunityIcons 
   name="pencil-outline" 
   size={25} 
   color="black" 
   style={{marginTop:0,marginLeft:110}}  />
  </View>
  </View>

  <View style={styles.line}>
        <Text style={{fontSize:14,
                 marginRight:20,
                 marginLeft:40,
                 marginTop:10,
                 
                 fontWeight:500
                         }}>Drinking Habits</Text>
    <View style={{flexDirection:'row'}}>
    <Text style={{fontSize:14,
                   marginBottom:10,
                   marginRight:20,
                   marginLeft:40,
                   marginTop:10,
                   }}>Doesn’t matter</Text>                 
   <MaterialCommunityIcons 
   name="pencil-outline" 
   size={25} 
   color="black" 
   style={{marginTop:0,marginLeft:110}}  />
  </View>
  </View>

  <View style={styles.line}>
        <Text style={{fontSize:14,
                 marginRight:20,
                 marginLeft:40,
                 marginTop:10,
                 
                 fontWeight:500
                         }}>Smoking Habits</Text>
    <View style={{flexDirection:'row'}}>
    <Text style={{fontSize:14,
                   marginBottom:10,
                   marginRight:20,
                   marginLeft:40,
                   marginTop:10,
                   }}>Doesn’t matter</Text>                 
   <MaterialCommunityIcons 
   name="pencil-outline" 
   size={25} 
   color="black" 
   style={{marginTop:0,marginLeft:110}}  />
  </View>
  </View>

  <Text style={{fontSize:18,
                              // marginRight:20,
                               marginLeft:20,
                               marginTop:20,
                               fontWeight:500,
                               color:'#C80FC0'
                         }}>Basic Preferences</Text>
    
    <View style={styles.line}>
        <Text style={{fontSize:14,
                 marginRight:20,
                 marginLeft:40,
                 marginTop:10,
                 
                 fontWeight:500
                         }}>Religion</Text>
    <View style={{flexDirection:'row'}}>
    <Text style={{fontSize:14,
                   marginBottom:10,
                   marginRight:20,
                   marginLeft:40,
                   marginTop:10,
                   }}>Hindhu</Text>                 
   <MaterialCommunityIcons 
   name="pencil-outline" 
   size={25} 
   color="black" 
   style={{marginTop:0,marginLeft:150}}  />
  </View>
  </View>

  <View style={styles.line}>
        <Text style={{fontSize:14,
                 marginRight:20,
                 marginLeft:40,
                 marginTop:10,
                 
                 fontWeight:500
                         }}>Caste</Text>
    <View style={{flexDirection:'row'}}>
    <Text style={{fontSize:14,
                   marginBottom:10,
                   marginRight:20,
                   marginLeft:40,
                   marginTop:10,
                   }}>Sagara (Uppara)</Text>                 
   <MaterialCommunityIcons 
   name="pencil-outline" 
   size={25} 
   color="black" 
   style={{marginTop:0,marginLeft:90}}  />
  </View>
  </View>

  <View style={styles.line}>
        <Text style={{fontSize:14,
                 marginRight:20,
                 marginLeft:40,
                 marginTop:10,
                 
                 fontWeight:500
                         }}>Star</Text>
    <View style={{flexDirection:'row'}}>
    <Text style={{fontSize:14,
                   marginBottom:10,
                   marginRight:20,
                   marginLeft:40,
                   marginTop:10,
                   }}>Any</Text>                 
   <MaterialCommunityIcons 
   name="pencil-outline" 
   size={25} 
   color="black" 
   style={{marginTop:0,marginLeft:170}}  />
  </View>
  </View>

  <View style={styles.line}>
        <Text style={{fontSize:14,
                 marginRight:20,
                 marginLeft:40,
                 marginTop:10,
                 
                 fontWeight:500
                         }}>Dosh</Text>
    <View style={{flexDirection:'row'}}>
    <Text style={{fontSize:14,
                   marginBottom:10,
                   marginRight:20,
                   marginLeft:40,
                   marginTop:10,
                   }}>Doesn’t matter</Text>                 
   <MaterialCommunityIcons 
   name="pencil-outline" 
   size={25} 
   color="black" 
   style={{marginTop:0,marginLeft:100}}  />
  </View>
  </View>
 
  <Text style={{fontSize:18,
                              // marginRight:20,
                               marginLeft:20,
                               marginTop:20,
                               fontWeight:500,
                               color:'#C80FC0'
                         }}>Professional Preferences</Text>
    
    <View style={styles.line}>
        <Text style={{fontSize:14,
                 marginRight:20,
                 marginLeft:40,
                 marginTop:10,
                 
                 fontWeight:500
                         }}>Education</Text>
    <View style={{flexDirection:'row'}}>
    <Text numberOfLines={2}
    style={{fontSize:14,
                  // marginBottom:10,
                   //marginRight:20,
                   marginLeft:40,
                   marginTop:10,
                   }}>Bachelors- Engineering/Computers/Ot</Text> 
                     
   <MaterialCommunityIcons 
   name="pencil-outline" 
   size={25} 
   color="black" 
   style={{marginTop:5,marginLeft:4}}  />
  </View>
  <Text style={{fontSize:14,
                   marginBottom:10,
                   marginRight:20,
                   marginLeft:40,
                   color:'#FFA500'
                   }}> Read more</Text> 
  </View>


  <View style={styles.line}>
        <Text style={{fontSize:14,
                 marginRight:20,
                 marginLeft:40,
                 marginTop:10,
                 
                 fontWeight:500
                         }}>Employed In</Text>
    <View style={{flexDirection:'row'}}>
    <Text style={{fontSize:14,
                   marginBottom:10,
                   marginRight:20,
                   marginLeft:40,
                   marginTop:10,
                   }}>Any</Text>                 
   <MaterialCommunityIcons 
   name="pencil-outline" 
   size={25} 
   color="black" 
   style={{marginTop:0,marginLeft:170}}  />
  </View>
  </View>

  <View style={styles.line}>
        <Text style={{fontSize:14,
                 marginRight:20,
                 marginLeft:40,
                 marginTop:10,
                 
                 fontWeight:500
                         }}>Occupation</Text>
    <View style={{flexDirection:'row'}}>
    <Text style={{fontSize:14,
                   marginBottom:10,
                   marginRight:20,
                   marginLeft:40,
                   marginTop:10,
                   }}>Any</Text>                 
   <MaterialCommunityIcons 
   name="pencil-outline" 
   size={25} 
   color="black" 
   style={{marginTop:0,marginLeft:170}}  />
  </View>
  </View>

  <View style={styles.line}>
        <Text style={{fontSize:14,
                 marginRight:20,
                 marginLeft:40,
                 marginTop:10,
                 
                 fontWeight:500
                         }}>Annual Income</Text>
    <View style={{flexDirection:'row'}}>
    <Text style={{fontSize:14,
                   marginBottom:10,
                   marginRight:20,
                   marginLeft:40,
                   marginTop:10,
                   }}>Any</Text>                 
   <MaterialCommunityIcons 
   name="pencil-outline" 
   size={25} 
   color="black" 
   style={{marginTop:0,marginLeft:170}}  />
  </View>
  </View>

  
 
  <Text style={{fontSize:18,
                              // marginRight:20,
                               marginLeft:20,
                               marginTop:20,
                               fontWeight:500,
                               color:'#C80FC0'
                         }}>Location Preferences</Text>
    
    <View style={styles.line}>
        <Text style={{fontSize:14,
                 marginRight:20,
                 marginLeft:40,
                 marginTop:10,
                 
                 fontWeight:500
                         }}>Country</Text>
    <View style={{flexDirection:'row'}}>
    <Text style={{fontSize:14,
                   marginBottom:10,
                   marginRight:20,
                   marginLeft:40,
                   marginTop:10,
                   }}>Any</Text>                 
   <MaterialCommunityIcons 
   name="pencil-outline" 
   size={25} 
   color="black" 
   style={{marginTop:0,marginLeft:170}}  />
  </View>
  </View>

  <View style={styles.line}>
        <Text style={{fontSize:14,
                 marginRight:20,
                 marginLeft:40,
                 marginTop:10,
                 
                 fontWeight:500
                         }}>Ancestral origin</Text>
    <View style={{flexDirection:'row'}}>
    <Text style={{fontSize:14,
                   marginBottom:10,
                   marginRight:20,
                   marginLeft:40,
                   marginTop:10,
                   }}>Hindi-All</Text>                 
   <MaterialCommunityIcons 
   name="pencil-outline" 
   size={25} 
   color="black" 
   style={{marginTop:0,marginLeft:140}}  />
  </View>
  </View>

  <View style={styles.line}>
        <Text style={{fontSize:14,
                 marginRight:20,
                 marginLeft:40,
                 marginTop:10,
                 
                 fontWeight:500
                         }}>What we are looking for</Text>
    <View style={{flexDirection:'row'}}>
    <Text style={{fontSize:14,
                   marginBottom:10,
                   marginRight:20,
                   marginLeft:40,
                   marginTop:10,
                   }}>Not Specified</Text>                 
   <MaterialCommunityIcons 
   name="pencil-outline" 
   size={25} 
   color="black" 
   style={{marginTop:0,marginLeft:110}}  />
  </View>
  </View>

         

         

         

         

         

         
      

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
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        paddingVertical: 5,
        paddingHorizontal: 10,
      },
    
});