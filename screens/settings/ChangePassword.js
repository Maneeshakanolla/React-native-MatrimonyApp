


import {View,TouchableOpacity} from 'react-native';
import{Feather} from 'react-native-vector-icons';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function ChangePassword(){
    const navigation=useNavigation();
 // const navigation=useNavigationState
  const [press,setPress]=useState(false);
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const [expanded, setExpanded] = useState(false);
 const [add, setAdd] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  const handleSelectOption = () => {
    setIsSelected(!isSelected);
  };
return(

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
);
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
        
        });