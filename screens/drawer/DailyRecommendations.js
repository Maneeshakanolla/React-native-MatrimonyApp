import { View,Text, Button ,StyleSheet, TextInput, Pressable,Image,TouchableOpacity,Animated, ScrollView} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Fontisto } from '@expo/vector-icons';
import { Entypo ,Feather} from "@expo/vector-icons";
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import EditPreferences from "./EditPreferences";
import HomeScreen from "./Home";
//import DateTimePickerModal from "react-native-modal-datetime-picker";




const AnimatedIcon = Animated.createAnimatedComponent(Icon);

function DailyRecommendations () {
    const navigation = useNavigation()

    const [spinAnim, setSpinAnim] = useState(new Animated.Value(0));
  const [iconPressed, setIconPressed] = useState(false);
  const spin = spinAnim.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ['0deg', '15deg', '0deg'],
  });

  function rotate() {
    Animated.spring(spinAnim, {
      toValue: iconPressed ? 0 : 1,
      bounciness: 0,
      useNativeDriver: true,
    }).start();
  }
//Date Picker
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setSelectedDate(date);
    hideDatePicker();
  };

  return(
    
      <View style={styles.container}>
       
 <View style={{
      height:400,
      width:360,
      marginTop:0,
      backgroundColor:'#09E153',
     // borderRadius:20,
      shadowColor:'#000',
      shadowOffset:{
          width:0,
          height:2,
      }
 }}>
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
                             color:'white'}}>Daily Recommendations</Text>
                </View> 
    
     <View style={{
         height:300,
         width:280,
         marginTop:180,
         marginLeft:50,
         backgroundColor:'#EEEEEE',
         borderColor:'#EEEEEE', // Border color
         //borderWidth :1, // Bor
         borderRadius:20,
     }}>
            <Text style={{marginLeft:20,marginTop:20}} >Your next set of matches will
                   load  in</Text>
        
           < View style={{flexDirection:'row'}}>
           <Text style={{marginLeft:90,marginTop:10,fontWeight:500,fontSize:40}} >:</Text>
           <Text style={{marginLeft:60,marginTop:10,fontWeight:500,fontSize:40}} >:</Text>
           </View>
          < View style={{flexDirection:'row'}}>
           <Text style={{marginLeft:40,marginTop:10}} >hours</Text>
           <Text style={{marginLeft:40,marginTop:10}} >mins</Text>
           <Text style={{marginLeft:40,marginTop:10}} >secs</Text>
            </View>
            {/* <Button title="Show Date Picker" onPress={showDatePicker} />
      <Text>{selectedDate.toLocaleString()}</Text>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="datetime"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      /> */}

            <View style={{
                height: 40,
                width: '80%',
                //paddingHorizontal:10,
                marginBottom:10,
                marginLeft:20,
                borderRadius:30,
                marginTop:30,
                }}>
           
    </View>

    <View style={{
         height:120,
         width:280,
         marginTop:10,
         marginLeft:0,
         backgroundColor:'white',
         borderColor:'#EEEEEE', // Border color
         borderWidth :1, // Bor
         borderRadius:20,
     }}>
          <Text style={{marginLeft:20,marginTop:20}} >Broaden your preferences to get more matching profiless</Text>
          <TouchableOpacity style={{
        backgroundColor: '#FFA500',
        borderRadius: 30,
        height:30,
        width:150,
        marginTop:10,
        marginLeft:20,
        marginRight:10,
        alignSelf: 'center',
        justifyContent: 'center'
      }} onPress={EditPreferences}>
        <Text style={{ color: 'white', alignSelf: 'center' }}>Edit Preferences</Text>
      </TouchableOpacity>
         
           
          </View>
           
    </View>
    </View>
         
         
   
    
        </View>
 
    )
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
     backgroundColor: '#14F2CD',
     //paddingTop: 20
    },
    sectionHeader: {
        flexDirection:'row',
        height:70,
        width:'100%',
        backgroundColor: '#09E153',
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
   
  inputContainer: {
      position: 'relative',
      flexDirection: 'row',
      alignItems: 'center',
      margin: 10,
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: 'black',
      padding: 10,
      borderRadius: 30,
      marginBottom: 20,
    },
    input: {
        flex: 1,
        paddingLeft: 10,
        fontSize: 16,
        height: 30,
      },
      overlappingText: {
        position: 'absolute',
        top: -8,
        left: 20,
        backgroundColor: 'white',
        paddingHorizontal: 5,
        color: '#A9A9A9',
      },
      button: {
        height: 40,
        width: '80%',
        paddingHorizontal:10,
        marginBottom:10,
        borderRadius: 30,
        marginTop:20,
        color:'red'
       
      },
      circle: {
        width:50,
        height: 50,
        borderRadius: 50, // half of the width/height to make it a circle
        backgroundColor: 'red', // any color you want
      },
  });

 
export default DailyRecommendations;