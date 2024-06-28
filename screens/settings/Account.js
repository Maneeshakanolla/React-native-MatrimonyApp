import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, TouchableOpacity,Switch,Modal, TextInput,Alert
  } from 'react-native';

import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign,Entypo ,Icon} from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';


export default function Account(){
  const navigation=useNavigation();
 // const navigation=useNavigationState
  const [press,setPress]=useState(false);
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const [expanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };
  const toggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  const [add, setAdd] = useState(false);
  const [psw, setPsw] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  const handleSelectOption = () => {
    setIsSelected(!isSelected);
  };
  //password
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const [text, setText] = useState('');
  const [selection, setSelection] = useState({ start: 0, end: 0 });

  const handleSelectionChange = ({ nativeEvent: { selection } }) => {
    setSelection(selection);
  };

  const handleTextChange = (inputText) => {
    setText(inputText);
  };

  const isAllTextSelected = selection.start === 0 && selection.end === text.length;

  const handleTextSelected = () => {
    if (isAllTextSelected) {
      // Perform your action here
      console.log('All text selected!');
    }
  };
 
  const [confirmPassword, setConfirmPassword] = useState('');

  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  const handleConfirmPasswordChange = (value) => {
    setConfirmPassword(value);
  };

  const handleSubmit = () => {
    if (password === confirmPassword) {
      // Passwords match, you can proceed
      Alert.alert('Success', 'Passwords matched!');
    } else {
      // Passwords don't match, show an error message
      Alert.alert('Error', 'Passwords do not match!');
    }
  };

  

  const showAlert = () => {
    Alert.alert(
      'Do you want to exit?',
       [
        {
          text: 'No',
          onPress: () => console.log('No Pressed'),
          style: 'no',
        },
        { text: 'Exit', onPress: () => console.log('Exit Pressed') },
      ],
      { cancelable: false }
    );
  };
  

  return (
     
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
                               color:'white'}}>Account</Text>
                </View> 
        <View style={{flexDirection:'row'}}>
                <MaterialIcons name="lock-reset" size={27}  color="gray"
                 style={{marginTop:20,marginLeft:22}} />
               
                <TouchableOpacity onPress={() => setPsw(true)}>
                        <Text style={{fontSize: 18,
                              textAlign: 'center', 
                               marginRight: 36,
                               marginTop:20,
                               marginLeft:20,
                               color:'gray'}}>Change Password</Text>
               </TouchableOpacity>
        </View>
        <Modal visible={psw} onRequestClose={() => setPsw(false)}>
                <View style={styles.container}>
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
                               color:'white'}}>Change Password</Text>
                </View> 
                    
    <Text style={{fontSize:18,
    marginTop:40,marginLeft:20,fontWeight:'normal'}}>Change Password</Text>
   
   <View style={[styles.inputContainer,{marginTop:50}]}>
           <TextInput
          style={styles.input}
          placeholder="Enter Your Password"
          placeholderTextColor="#A9A9A9"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={handlePasswordChange}
          onSelectionChange={handleSelectionChange}
          onFocus={handleTextSelected} // This handles the scenario when the text is already selected when the component receives focus
          />
        <Text style={styles.overlappingText}>PASSWORD</Text>
        <TouchableOpacity onPress={togglePasswordVisibility}>
        <Entypo name={showPassword ? 'eye' : 'eye-with-line'} size={24} color="#999" style={styles.icon} />
       
        </TouchableOpacity>
      </View>

      <View style={[styles.inputContainer,{marginTop:10}]}>
          <TextInput
          style={styles.input}
          placeholder="Enter Your confirm Password"
          placeholderTextColor="#A9A9A9"
          secureTextEntry={!showConfirmPassword}
          value={confirmPassword}
          onChangeText={handleConfirmPasswordChange}
          onSelectionChange={handleSelectionChange}
          onFocus={handleTextSelected}
          />
        <Text style={styles.overlappingText}>Confirm PASSWORD</Text>
        <TouchableOpacity onPress={toggleConfirmPasswordVisibility}>
        <Entypo name={showConfirmPassword ? 'eye' : 'eye-with-line'} size={24} color="#999" style={styles.icon} />
       
        </TouchableOpacity>
      </View>
<TouchableOpacity style={{
       borderRadius: 30,
        height:30,
        width:'30%',
        marginTop:20,
        marginLeft:0,
        marginRight:10,
        borderColor:'#17F0BC',
        backgroundColor:'orange',
        alignSelf: 'center',
        justifyContent: 'center'
      }} 
      onPress={handleSubmit} >
      <Text style={{ color: 'white', alignSelf: 'center' }}>Submit</Text>
      </TouchableOpacity>
      </View>
      </Modal>
    <View style={{flexDirection:'row'}}>
 <MaterialCommunityIcons name="logout"  size={27} color="gray"
    style={{marginTop:20,marginLeft:25}} />
                <Pressable onPress={showAlert}>
                        <Text style={{fontSize: 18,
                              textAlign: 'center', 
                               marginRight: 36,
                               marginTop:20,
                               marginLeft:20,
                               color:'gray'}}>Logout</Text>
               </Pressable>

    </View>
    
   
   

    <View style={{flexDirection:'row'}}>
    <AntDesign name="delete" 
    size={24} color="gray" 
    style={{marginTop:20,marginLeft:25}} 
    />
              <TouchableOpacity onPress={() => setAdd(true)}> 
                <Text style={{fontSize: 18,
                              textAlign: 'center', 
                               marginRight: 36,
                               marginTop:20,
                               marginLeft:20,
                               color:'gray'}}>Delete Account</Text>
                </TouchableOpacity>
      </View> 
      <Modal visible={add} onRequestClose={() => setAdd(false)}>
                <View style={styles.container}>
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
                               color:'white'}}>Delete Account</Text>
                </View> 
                    
    <Text style={{fontSize:16,
    marginTop:20,marginLeft:10,fontWeight:'bold'}}>Please choose a reason for profile deletion</Text>

<View style={{flexDirection:'row'}}>
<Text style={{fontSize:14,
    marginTop:20,marginLeft:20,fontWeight:'normal'}}>
     Marriage Fixed
    </Text> 
<TouchableOpacity style={styles.radioButton} onPress={handleSelectOption}>
<View style={[styles.radioButtonInner, isSelected && styles.radioButtonSelected]} />
</TouchableOpacity>
</View>

<View style={{flexDirection:'row'}}>
<Text style={{fontSize:14,
    marginTop:20,marginLeft:20,fontWeight:'normal'}}>
    Married
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
marginLeft:200
}} onPress={handleSelectOption}>
{/* <View style={[styles.radioButtonInner, isSelected && styles.radioButtonSelected]} /> */}
</TouchableOpacity>
</View>
<View style={{flexDirection:'row'}}>
<Text style={{fontSize:14,
    marginTop:20,marginLeft:20,marginRight:50,fontWeight:'normal'}}>
     Others Reasons
    </Text> 
 
<TouchableOpacity style={{
height: 24,
width: 24,
borderRadius: 12,
borderWidth: 2,
borderColor: 'gray',
alignItems: 'center',
justifyContent: 'center',
marginRight: 10,
marginTop:20,
marginLeft:100
}} onPress={handleSelectOption}>
{/* <View style={[styles.radioButtonInner, isSelected && styles.radioButtonSelected]} /> */}
</TouchableOpacity>

</View>
<TouchableOpacity style={{
       borderRadius: 30,
        height:30,
        width:'80%',
        marginTop:20,
        marginLeft:0,
        marginRight:10,
        borderColor:'#17F0BC',
        backgroundColor:'orange',
        alignSelf: 'center',
        justifyContent: 'center'
      }} >
      <Text style={{ color: 'white', alignSelf: 'center' }}>Next</Text>
      </TouchableOpacity>



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
marginLeft:155
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
inputContainer: {
  position: 'relative',
  flexDirection: 'row',
  alignItems: 'center',
  margin: 10,
  justifyContent: 'center',
  borderWidth: 1,
  borderColor: 'black',
  padding: 10,
  borderRadius:10,
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

});