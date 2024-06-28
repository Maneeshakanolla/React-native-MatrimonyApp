import React from 'react';
import { View, Text, StyleSheet, 
  Image ,TextInput,TouchableOpacity,
  SafeAreaProvider,useSafeAreaInsets, 
  ImageBackground,
   ScrollView,
   Pressable,Alert,
   Modal,
   ViewComponent} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
//import { Feather } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import HomeScreen from './Home';
import LinearGradient from 'react-native-linear-gradient';
import { PRIMARY_COLOR,SECONDARY_COLOR } from './Colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProgressBar from '../ProgressBar';
import { useEffect } from 'react';
import EditPreferences from './EditPreferences';
import BasicDetails from '../EditSub/BasicDetails';



export default function EditProfile(props){
  const navigation = useNavigation();
  const [press,setPress]=useState(false)
  
const navigateToNestedScreen = () => {
      navigation.navigate('NestedStackNavigator', { screen: 'NestedScreen' });
    };
  //Progress Bar
  const [progress, setProgress] = useState(50);

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress > 50) {          // if u want 100% mention <100
        setProgress(progress - 10);   // +10
      }
    }, 1000);
    // useEffect(() => {
    //   const interval = setInterval(() => {
    //     if (progress>0) {
    //       setProgress(progress - 10);
    //     }
    //   }, 1000);

    return () => clearInterval(interval);
  }, [progress]);

  //Expend 
  const [expanded, setExpanded] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false); 
  const [selectedMenuItem, setSelectedMenuItem] = useState(null); // State to track selected menu item


  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
  const toggleModalMenu = () => {
    setModalVisible(!modalVisible);
  };

  const handleInputChange = (text) => {
    setInputValue(text);
  };

  const handleAlert = () => {
    toggleModal(); // Close modal when OK is pressed
    // Handle input value, for example, you can log it to the console
    console.log('Input Value:', inputValue);
  };
  const handleOkPress = () => {
    toggleModal(); // Close modal when OK is pressed
    // Handle input value, for example, you can log it to the console
    console.log('Input Value:', inputValue);
  };

  const handleCancelPress = () => {
    toggleModal(); // Close modal when Cancel is pressed
  };

  const handleMenuItemPress = (menuItem) => {
    setSelectedMenuItem(menuItem);
    toggleModalMenu(); // Close modal after selecting a menu item
  };

   const showAlert = () => {
    Alert.alert(
      'Add Body Tpye',
      'Alert Message',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
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
                               color:'white'}}>Edit Profile</Text>

                <MaterialCommunityIcons
                 onPress={() => navigation.navigate(HomeScreen)}
                    name="account-box-outline" 
                    size={27} 
                    color="gold" 
                    style={{marginTop:40, marginRight:5}} 
                />
                <Text style={{fontSize: 18,
                               textAlign: 'center', 
                               marginRight: 20,
                               color:'gold',
                               marginTop:40}}>Preview</Text>
            </View> 
<ScrollView>
            <View>
            <ImageBackground
         source={{uri: 'https://www.lensmen.ie/wp-content/uploads/2015/02/Profile-Portrait-Photographer-in-Dublin-Ireland..jpg'}}
         style={{width:'100%', height:250,borderRadius:5}}
         >
         <Text style={{fontSize: 18,
                        marginLeft: 40,
                        color:'black',
                        marginTop:150}}>Profile Completeness</Text>
                        <View style={{marginTop:20,alignItems:'center',}}>
                        <ProgressBar 
                         progress={progress}/>
                       </View>  
          </ImageBackground>
          </View>
          
          <ScrollView 
          horizontal={true}
          contentContainerStyle={{flexDirection:'row'}}
          >
            <View style={styles.box1}>
            <Pressable onPress={() => navigation.navigate('NestedStackNavigator', {EditPreferences})}>
               <Text style={{fontSize:14,
                             // flex: 1, 
                              textAlign: 'center', 
                               marginTop:8,
                               marginLeft:7,
                               marginRight:5}}>Edit Profile</Text>
                               </Pressable>
                               </View>
            
            <View style={styles.box2}>
            <Pressable 
          onPress={()=> navigation.navigate()}>
               <Text style={{fontSize:14,
                             // flex: 1, 
                              textAlign: 'center', 
                               marginTop:8,
                               marginLeft:7,
                               marginRight:5}}>Edit Contact</Text>
                               </Pressable>
       </View>
       <View style={styles.box3}>
       <Pressable 
          onPress={()=> navigation.navigate(EditPreferences)}>
               <Text style={{fontSize:14,
                             textAlign: 'center', 
                               marginTop:8,
                               marginLeft:7,
                               marginRight:5}}>Add Horoscope</Text>
                               </Pressable>
       </View>
       </ScrollView>

       <View style={styles.box4}>
        <View style={{width:40,height:40,borderRadius:30,backgroundColor:'#EC7388',marginLeft:5}}>
       <MaterialCommunityIcons
                 onPress={() => navigation.navigate(HomeScreen)}
                    name="account-plus-outline" 
                    size={27} 
                    color="gold" 
                    style={{marginTop:5, marginLeft:3,alignItems:'center',justifyContent:'center'}} 
                />
                </View>
                        <Text style={{fontSize:14,
                              flex: 1, 
                              textAlign: 'center', 
                               marginTop:0,
                               marginLeft:7,
                               marginRight:10}}>put a face to your profile</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={{ color: 'white', alignSelf: 'center' }}>UPLOAD PHOTO</Text>
      </TouchableOpacity>
    </View>
    <Text style={{ fontSize:16,
                               marginTop:10,
                               marginLeft:7,
                               marginRight:10,
                               color:'green'}}>PERSONAL INFORMATION</Text>
      <View style={styles.box5}>
        <View style={{flexDirection:'row'}}>
        <Feather
                 onPress={() => navigation.navigate(HomeScreen)}
                    name="edit-2" 
                    size={27} 
                    color="#85B6FF" 
                    style={{marginTop:10, marginLeft:12}} 
                />
                        <Text style={{fontSize:16,
                               textAlign:'center',
                               marginTop:10,
                               marginLeft:20,
                               fontWeight: 'bold',
                               marginRight:10}}>A few words about my brother</Text>
                <Feather
                 onPress={() => navigation.goBack()}
                    name="edit-2" 
                    size={27} 
                    color="black" 
                    style={{marginTop:10, marginLeft:10}} 
                />
      </View>
      <Text style={{fontSize:12,
                               marginTop:10,
                               marginLeft:20,
                               marginRight:10}}>i am creating this profile  on behalf  of my brother. 
                               He is currently working  in private sector as a software professional ,
                                after having completed his master’s degree. 
                                we come from an upper middle class family with moderate family values. 
                               we belong to nuclear family currently living in Hyderabad.</Text>
     </View> 
     <View style={{flexDirection:'row'}}>
        <Feather
                 onPress={() => navigation.goBack()}
                    name="file-text" 
                    size={27} 
                    color="#85B6FF" 
                    style={{marginTop:20, marginLeft:12}} 
                />
                        <Text style={{fontSize:16,
                               textAlign:'center',
                               marginTop:20,
                               marginLeft:20,
                               fontWeight: 'bold',
                               marginRight:10}}>Basic Details</Text>
                <Feather
                 onPress={() =>props.navigation.navigate(BasicDetails)}
                    name="edit-2" 
                    size={24} 
                    color="black" 
                    style={{marginTop:20,marginLeft:140}} 
                />
      </View>
      <View style={{
      flexDirection:'row',
      height:40,
      width:'95%',
      alignItems:'center',
      backgroundColor: 'white',
      borderRadius:5,
      borderWidth: 2,
      borderColor:'white',
      marginTop:10,
      marginLeft:10}}>
         <Text style={{fontSize:14,
                              flex: 1, 
                              textAlign: 'center', 
                               marginTop:0,
                               marginLeft:7,
                               fontWeight:'200',
                               marginRight:10}}>Get More responses by verifying you name and age</Text>
      <View style={{
        flexDirection:'row',
        backgroundColor: '#DA5E74',
        borderRadius: 30,
        height:30,
        width:150,
        marginTop:5,
        marginRight:10,
        alignSelf: 'center',
        justifyContent: 'center'
      }}>
        <TouchableOpacity>
        <Text style={{ color: 'white', alignSelf: 'center',marginTop:5 }}>UPLOAD PHOTO</Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <Feather name="chevron-right"
        size={24}
        color='white'
        style={{marginTop:2,alignItems:'center'}}/>
      </TouchableOpacity>
      </View>
    </View>
     
      <View style={styles.box6}>
      <View style={{flexDirection:'row'}}>
             <Text style={{fontSize:16,
                               marginTop:10,
                               marginLeft:20,
                               fontWeight: 'bold',
                               marginRight:10}}>Name</Text>
              <Text style={{fontSize:16,
                               marginTop:10,
                               marginLeft:88,
                               fontWeight: 'normal',
                               marginRight:10}}>Krishna</Text>                  
      </View>
      <View style={{flexDirection:'row'}}>
             <Text style={{fontSize:16,
                               marginTop:5,
                               marginLeft:20,
                               fontWeight: 'bold',
                               marginRight:10}}>Age</Text>
              <Text style={{fontSize:16,
                               marginTop:5,
                               marginLeft:100,
                               fontWeight: 'normal',
                               marginRight:10}}>33yrs</Text>  
              <Text style={{fontSize:16,
                               marginTop:5,
                               marginLeft:5,
                               fontWeight: 'normal',
                               color:'#FFC700',
                               marginRight:10}}>- verify</Text>                                    
      </View>

      <View style={{flexDirection:'row'}}>
             <Text style={{fontSize:16,
                               marginTop:5,
                               marginLeft:20,
                               fontWeight: 'bold',
                               marginRight:10}}>Height</Text>
              <Text style={{fontSize:16,
                               marginTop:5,
                               marginLeft:80,
                               fontWeight: 'normal',
                               marginRight:10}}>5 ft 5 in/ 165 cms</Text>                  
      </View>
      <View style={{flexDirection:'row'}}>
             <Text style={{fontSize:16,
                               marginTop:5,
                               marginLeft:20,
                               fontWeight: 'bold',
                               marginRight:10}}>Weight</Text>
              <Text style={{fontSize:16,
                               marginTop:5,
                               marginLeft:78,
                               fontWeight: 'normal',
                               marginRight:10}}>65Kgs/143Ibs</Text>                  
      </View>
      <View style={{flexDirection:'row'}}>
             <Text style={{fontSize:16,
                               marginTop:5,
                               marginLeft:20,
                               fontWeight: 'bold',
                               marginRight:10}}>Marital Status</Text>
              <Text style={{fontSize:16,
                               marginTop:5,
                               marginLeft:28,
                               fontWeight: 'normal',
                               marginRight:10}}>Never Married</Text>                  
      </View>
      <View style={{flexDirection:'row'}}>
             <Text style={{fontSize:16,
                               marginTop:5,
                               marginLeft:20,
                               fontWeight: 'bold',
                               marginRight:10}}>Mother Tongue</Text>
              <Text style={{fontSize:16,
                               marginTop:5,
                               marginLeft:22,
                               fontWeight: 'normal',
                               marginRight:10}}>Hindi</Text>                  
      </View>
      <View style={{flexDirection:'row'}}>
             <Text style={{fontSize:16,
                               marginTop:5,
                               marginLeft:20,
                               fontWeight: 'bold',
                               marginRight:10}}>physical Status</Text>
              <Text style={{fontSize:16,
                               marginTop:5,
                               marginLeft:20,
                               fontWeight: 'normal',
                               marginRight:10}}>Normal</Text>                  
      </View>
      <View style={{flexDirection:'row'}}>
             <Text style={{fontSize:16,
                               marginTop:5,
                               marginLeft:20,
                               fontWeight: 'bold',
                               marginRight:10}}>Body Type</Text>
                               
          <TouchableOpacity style={{flexDirection:'row'}} onPress={toggleExpand}>  
          <Text style={{fontSize:16,
                               marginTop:5,
                               marginLeft:53,
                               fontWeight: 'normal',
                               color:'#FFC700',
                               marginRight:10}}>{expanded ? '-' : '+'}
                              </Text>
                               
    {expanded && (
       <TouchableOpacity onPress={toggleModal}>
                  
              <Text style={{fontSize:16,
                               marginTop:5,
                               marginLeft:0,
                               fontWeight: 'normal',
                               color:'#FFC700',
                               marginRight:10}}>Add More</Text>
    </TouchableOpacity>
    )}                             
          </TouchableOpacity>
    {/* Alert */}
    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={toggleModal}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 0 ,width:250,height:200}}>
            <Text style={{fontSize:16,
                               marginTop:5,
                               marginLeft:20,
                               fontWeight: 'bold',
                            marginRight:10}}>Add Body Type</Text>
          
<View style={styles.inputContainer}>
   <TextInput  
        onChangeText={handleInputChange}
        value={inputValue}
        placeholder="Type here..."
        placeholderTextColor="#888"></TextInput>
                    
   <Feather 
   onPress={toggleModalMenu}
   name="chevron-down" 
   size={27} 
   color="black" 
   style={{marginTop:0,marginLeft:30}}  />
  </View>
            
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 40 }}>
              <TouchableOpacity onPress={handleCancelPress}>
                <Text style={{ color: 'red', }}>CANCEL</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleOkPress}>
                <Text style={{ color: 'green' }}>ADD</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal> 
       </View> 
         {/* Dropdown menu */} 
       <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={toggleModalMenu}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
            <TouchableOpacity onPress={() => handleMenuItemPress('Option 1')}>
              <Text>Option 1</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleMenuItemPress('Option 2')}>
              <Text>Option 2</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleMenuItemPress('Option 3')}>
              <Text>Option 3</Text>
            </TouchableOpacity>
          </View>
          </View>
          </Modal>
      
      <View style={{flexDirection:'row'}}>
             <Text style={{fontSize:16,
                               marginTop:5,
                               marginLeft:18,
                               fontWeight: 'bold',
                               marginRight:10}}>Profile Created By</Text>
              <Text style={{fontSize:16,
                               marginTop:5,
                               marginLeft:5,
                               fontWeight: 'normal',
                               marginRight:10}}>Sibling</Text>                  
      </View>

      <View style={{flexDirection:'row'}}>
        
             <Text style={{fontSize:16,
                               marginTop:5,
                               marginLeft:20,
                               fontWeight: 'bold',
                            marginRight:10}}>Eating Habits</Text>
        <TouchableOpacity style={{flexDirection:'row'}} onPress={toggleExpand}>  
          <Text style={{fontSize:16,
                               marginTop:5,
                               marginLeft:30,
                               fontWeight: 'normal',
                               color:'#FFC700',
                               marginRight:10}}>{expanded ? '-' : '+'}
                              </Text>
                              <TouchableOpacity onPress={() => 
                                showAlert('Alert Title', 'This is an alert message.')}>   
                   <Text style={{fontSize:16,
                               marginTop:5,
                               marginLeft:2,
                               fontWeight: 'normal',
                               color:'#FFC700',
                               marginRight:10}}>Add More</Text>
         </TouchableOpacity>
    </TouchableOpacity> 
                     
      </View>

      <View style={{flexDirection:'row'}}>
             <Text style={{fontSize:16,
                               marginTop:5,
                               marginLeft:20,
                               fontWeight: 'bold',
                               marginRight:10}}>Drinking Habits</Text>
              <Text style={{fontSize:16,
                               marginTop:5,
                               marginLeft:15,
                               fontWeight: 'normal',
                               color:'#FFC700',
                               marginRight:10}}>+Add More</Text>                  
      </View>
      <View style={{flexDirection:'row'}}>
             <Text style={{fontSize:16,
                               marginTop:5,
                               marginLeft:20,
                               fontWeight: 'bold',
                               marginRight:10}}>Somking Habits</Text>
              <Text style={{fontSize:16,
                               marginTop:5,
                               marginLeft:12,
                               fontWeight: 'normal',
                               color:'#FFC700',
                               marginRight:10}}>+Add More</Text>                  
      </View>
      </View>
      <View style={{flexDirection:'row'}}>
        <MaterialCommunityIcons
                 onPress={() => navigation.navigate(HomeScreen)}
                    name="book-open" 
                    size={27} 
                    color="#85B6FF" 
                    style={{marginTop:20, marginLeft:12}} 
                />
                        <Text style={{fontSize:16,
                               textAlign:'center',
                               marginTop:20,
                               marginLeft:20,
                               fontWeight: 'bold',
                               marginRight:10}}>Religion Information</Text>
                <Feather
                 onPress={() => navigation.navigate(HomeScreen)}
                    name="edit-2" 
                    size={24} 
                    color="black" 
                    style={{marginTop:20,marginLeft:80}} 
                />
      </View>
      <View style={styles.box7}>
      <View style={{flexDirection:'row'}}>
             <Text style={{fontSize:16,
                               marginTop:10,
                               marginLeft:20,
                               fontWeight: 'bold',
                               marginRight:10}}>Religion</Text>
              <Text style={{fontSize:16,
                               marginTop:10,
                               marginLeft:88,
                               fontWeight: 'normal',
                               marginRight:10}}>Hindhu</Text>                  
      </View>
      

      <View style={{flexDirection:'row'}}>
             <Text style={{fontSize:16,
                               marginTop:5,
                               marginLeft:20,
                               fontWeight: 'bold',
                               marginRight:10}}>Caste</Text>
              <Text style={{fontSize:16,
                               marginTop:5,
                               marginLeft:100,
                               fontWeight: 'normal',
                               marginRight:10}}>Sagara (Uppara)</Text>                  
      </View>
      <View style={{flexDirection:'row'}}>
             <Text style={{fontSize:16,
                               marginTop:5,
                               marginLeft:20,
                               fontWeight: 'bold',
                               marginRight:10}}>Sub Caste</Text>
              <Text style={{fontSize:16,
                               marginTop:5,
                               marginLeft:68,
                               fontWeight: 'normal',
                               marginRight:10}}>Chowdary</Text>                  
      </View>
      <View style={{flexDirection:'row'}}>
             <Text style={{fontSize:16,
                               marginTop:5,
                               marginLeft:20,
                               fontWeight: 'bold',
                               marginRight:10}}>Gothram</Text>
              <Text style={{fontSize:16,
                               marginTop:5,
                               marginLeft:80,
                               fontWeight: 'normal',
                               marginRight:10}}>Palakaya</Text>                  
      </View>
      
      <View style={{flexDirection:'row'}}>
          <Text style={{fontSize:16,
                               marginTop:5,
                               marginLeft:20,
                               fontWeight: 'bold',
                            marginRight:10}}>Zodiac</Text>
        <TouchableOpacity style={{flexDirection:'row'}} onPress={toggleExpand}>  
          <Text style={{fontSize:16,
                               marginTop:5,
                               marginLeft:90,
                               fontWeight: 'normal',
                               color:'#FFC700',
                               marginRight:10}}>{expanded ? '-' : '+'}
                              </Text>
                              <TouchableOpacity onPress={() => 
                                showAlert('Alert Title', 'This is an alert message.')}>   
                   <Text style={{fontSize:16,
                               marginTop:5,
                               marginLeft:0,
                               fontWeight: 'normal',
                               color:'#FFC700',
                               marginRight:10}}>Add More</Text>
         </TouchableOpacity>
    </TouchableOpacity> 
                     
      </View>

      <View style={{flexDirection:'row'}}>
             <Text style={{fontSize:16,
                               marginTop:5,
                               marginLeft:20,
                               fontWeight: 'bold',
                               marginRight:10}}>Star</Text>
              <Text style={{fontSize:16,
                               marginTop:5,
                               marginLeft:110,
                               fontWeight: 'normal',
                               color:'#FFC700',
                               marginRight:10}}>+Add More</Text>                  
      </View>
      <View style={{flexDirection:'row'}}>
             <Text style={{fontSize:16,
                               marginTop:5,
                               marginLeft:20,
                               fontWeight: 'bold',
                               marginRight:10}}>Raasi</Text>
              <Text style={{fontSize:16,
                               marginTop:5,
                               marginLeft:100,
                               fontWeight: 'normal',
                               color:'#FFC700',
                               marginRight:10}}>+Add More</Text>                  
      </View>
      <View style={{flexDirection:'row'}}>
             <Text style={{fontSize:16,
                               marginTop:5,
                               marginLeft:20,
                               fontWeight: 'bold',
                               marginRight:10}}>Dosh</Text>
              <Text style={{fontSize:16,
                               marginTop:5,
                               marginLeft:105,
                               fontWeight: 'normal',
                               
                               marginRight:10}}>No</Text>                  
      </View>
      </View>
      <View style={{flexDirection:'row'}}>
        <MaterialCommunityIcons
                 onPress={() => navigation.navigate(HomeScreen)}
                    name="professional-hexagon" 
                    size={27} 
                    color="#85B6FF" 
                    style={{marginTop:20, marginLeft:12}} 
                />
                        <Text style={{fontSize:16,
                               textAlign:'center',
                               marginTop:20,
                               marginLeft:20,
                               fontWeight: 'bold',
                               marginRight:10}}>Professional Information</Text>
                <MaterialCommunityIcons
                 onPress={() => navigation.navigate(HomeScreen)}
                    name="pencil-outline" 
                    size={24} 
                    color="black" 
                    style={{marginTop:20,marginLeft:50}} 
                />
      </View>
      <View style={{
        height:200,
        width:'95%',
        backgroundColor: '#FFFFFF',
        borderRadius:5,
        borderWidth: 2,
        borderColor:'#000000',
        marginTop:10,
        marginLeft:10
      }}>
      <View style={{flexDirection:'row'}}>
             <Text style={{fontSize:16,
                               marginTop:5,
                               marginLeft:20,
                               fontWeight: 'bold',
                               marginRight:10}}>Education Category</Text>
              <Text style={{fontSize:16,
                               marginTop:5,
                               marginLeft:40,
                               fontWeight: 'normal',
                               marginRight:10}}>M.Tech</Text>                  
      </View>
      <View style={{flexDirection:'row'}}>
             <Text style={{fontSize:16,
                               marginTop:5,
                               marginLeft:20,
                               fontWeight: 'bold',
                               marginRight:10}}>College/ Institution</Text>
              <Text style={{fontSize:16,
                               marginTop:5,
                               marginLeft:38,
                               fontWeight: 'normal',
                               color:'#FFC700',
                               marginRight:10}}>+ Add More</Text>                  
      </View>
      <View style={{flexDirection:'row'}}>
             <Text style={{fontSize:16,
                               marginTop:5,
                               marginLeft:20,
                               fontWeight: 'bold',
                               marginRight:10}}>Occupation</Text>
              <Text style={{fontSize:16,
                               marginTop:5,
                               marginLeft:95,
                               fontWeight: 'normal',
                               marginRight:10}}>Software</Text>                  
      </View>
      
      <View style={{flexDirection:'row'}}>
          <Text style={{fontSize:16,
                               marginTop:5,
                               marginLeft:20,
                               fontWeight: 'bold',
                            marginRight:10}}>Oraganization</Text>
        <TouchableOpacity style={{flexDirection:'row'}} onPress={toggleExpand}>  
          <Text style={{fontSize:16,
                               marginTop:5,
                               marginLeft:78,
                               fontWeight: 'normal',
                               color:'#FFC700',
                               marginRight:10}}>{expanded ? '-' : '+'}
                              </Text>
                              <TouchableOpacity onPress={() => 
                                showAlert('Alert Title', 'This is an alert message.')}>   
                   <Text style={{fontSize:16,
                               marginTop:5,
                               marginLeft:0,
                               fontWeight: 'normal',
                               color:'#FFC700',
                               marginRight:10}}>Add More</Text>
         </TouchableOpacity>
    </TouchableOpacity> 
                     
      </View>

      <View style={{flexDirection:'row'}}>
             <Text style={{fontSize:16,
                               marginTop:5,
                               marginLeft:20,
                               fontWeight: 'bold',
                               marginRight:10}}>Employee In</Text>
              <Text style={{fontSize:16,
                               marginTop:5,
                               marginLeft:90,
                               fontWeight: 'normal',
                               //color:'#FFC700',
                               marginRight:10}}>Private</Text>                  
      </View>
      <View style={{flexDirection:'row'}}>
             <Text style={{fontSize:16,
                               marginTop:5,
                               marginLeft:20,
                               fontWeight: 'bold',
                               marginRight:10}}>Annual Income</Text>
              <Text style={{fontSize:16,
                               marginTop:5,
                               marginLeft:70,
                               fontWeight: 'normal',
                              
                               marginRight:10}}>7-8 LPA</Text>                  
      </View>
      <View style={{flexDirection:'row'}}>
             <Text style={{fontSize:16,
                               marginTop:5,
                               marginLeft:20,
                               fontWeight: 'bold',
                               marginRight:10}}>Additional Degree</Text>
              <Text style={{fontSize:16,
                               marginTop:5,
                               marginLeft:50,
                               fontWeight: 'normal',
                               marginRight:10}}>B.Tech</Text>                  
      </View>
      </View>

      <View style={{flexDirection:'row'}}>
        <Feather
                 onPress={() => navigation.navigate(HomeScreen)}
                    name="map-pin" 
                    size={27} 
                    color="#85B6FF" 
                    style={{marginTop:20, marginLeft:12}} 
                />
                        <Text style={{fontSize:16,
                               textAlign:'center',
                               marginTop:20,
                               marginLeft:20,
                               fontWeight: 'bold',
                               marginRight:10}}>Location</Text>
                <MaterialCommunityIcons
                 onPress={() => navigation.navigate(HomeScreen)}
                    name="pencil-outline" 
                    size={24} 
                    color="black" 
                    style={{marginTop:20,marginLeft:150}} 
                />
      </View>

      <View style={{
        height:150,
        width:'95%',
        backgroundColor: '#FFFFFF',
        borderRadius:5,
        borderWidth: 2,
        borderColor:'#000000',
        marginTop:10,
        marginLeft:10
      }}>
      <View style={{flexDirection:'row'}}>
             <Text style={{fontSize:16,
                               marginTop:5,
                               marginLeft:20,
                               fontWeight: 'bold',
                               marginRight:10}}>Country</Text>
              <Text style={{fontSize:16,
                               marginTop:5,
                               marginLeft:80,
                               fontWeight: 'normal',
                               marginRight:10}}>India</Text>                  
      </View>
      
      <View style={{flexDirection:'row'}}>
             <Text style={{fontSize:16,
                               marginTop:5,
                               marginLeft:20,
                               fontWeight: 'bold',
                               marginRight:10}}>State</Text>
              <Text style={{fontSize:16,
                               marginTop:5,
                               marginLeft:95,
                               fontWeight: 'normal',
                               marginRight:10}}>Telangana</Text>                  
      </View>
      
      

      <View style={{flexDirection:'row'}}>
             <Text style={{fontSize:16,
                               marginTop:5,
                               marginLeft:20,
                               fontWeight: 'bold',
                               marginRight:10}}>City</Text>
              <Text style={{fontSize:16,
                               marginTop:5,
                               marginLeft:110,
                               fontWeight: 'normal',
                               //color:'#FFC700',
                               marginRight:10}}>Hyderabad</Text>                  
      </View>
      <View style={{flexDirection:'row'}}>
             <Text style={{fontSize:16,
                               marginTop:5,
                               marginLeft:20,
                               fontWeight: 'bold',
                               marginRight:10}}>CitizenShip</Text>
              <Text style={{fontSize:16,
                               marginTop:5,
                               marginLeft:55,
                               fontWeight: 'normal',
                              
                               marginRight:10}}>India</Text>                  
      </View>
      <View style={{flexDirection:'row'}}>
             <Text style={{fontSize:16,
                               marginTop:5,
                               marginLeft:20,
                               fontWeight: 'bold',
                               marginRight:10}}>Ancestral Origin</Text>
              <Text style={{fontSize:16,
                               marginTop:5,
                               marginLeft:20,
                               fontWeight: 'normal',
                               marginRight:10}}>Others(Telangana)</Text>                  
      </View>
      </View>

      <View style={{flexDirection:'row'}}>
        <MaterialCommunityIcons
                 onPress={() => navigation.navigate(HomeScreen)}
                    name="account-group-outline" 
                    size={27} 
                    color="green" 
                    style={{marginTop:20, marginLeft:12}} 
                />
                        <Text style={{fontSize:16,
                               textAlign:'center',
                               marginTop:20,
                               marginLeft:20,
                               fontWeight: 'bold',
                               marginRight:10}}>Family Details</Text>
                <MaterialCommunityIcons
                 onPress={() => navigation.navigate(HomeScreen)}
                    name="pencil-outline" 
                    size={24} 
                    color="black" 
                    style={{marginTop:20,marginLeft:100}} 
                />
      </View>

      <View style={{
        height:260,
        width:'95%',
        backgroundColor: '#FFFFFF',
        borderRadius:5,
        borderWidth: 2,
        borderColor:'#000000',
        marginTop:10,
        marginLeft:10
      }}>
      <View style={{flexDirection:'row'}}>
             <Text style={{fontSize:16,
                               marginTop:5,
                               marginLeft:20,
                               fontWeight: 'bold',
                               marginRight:10}}>Family Values</Text>
              <Text style={{fontSize:16,
                               marginTop:5,
                               marginLeft:80,
                               fontWeight: 'normal',
                               marginRight:10}}>Moderate</Text>                  
      </View>
      
      <View style={{flexDirection:'row'}}>
             <Text style={{fontSize:16,
                               marginTop:5,
                               marginLeft:20,
                               fontWeight: 'bold',
                               marginRight:10}}>Family Type</Text>
              <Text style={{fontSize:16,
                               marginTop:5,
                               marginLeft:95,
                               fontWeight: 'normal',
                               marginRight:10}}>Nuclear</Text>                  
      </View>
      
      

      <View style={{flexDirection:'row'}}>
             <Text style={{fontSize:16,
                               marginTop:5,
                               marginLeft:20,
                               fontWeight: 'bold',
                               marginRight:10}}>Family Status</Text>
              <Text style={{fontSize:16,
                               marginTop:5,
                               marginLeft:85,
                               fontWeight: 'normal',
                               //color:'#FFC700',
                               marginRight:10}}>Upper Middle Class</Text>                  
      </View>
      <View style={{flexDirection:'row'}}>
             <Text style={{fontSize:16,
                               marginTop:5,
                               marginLeft:20,
                               fontWeight: 'bold',
                               marginRight:10}}>Father’s Occupation</Text>
              <Text style={{fontSize:16,
                               marginTop:5,
                               marginLeft:40,
                               fontWeight: 'normal',
                              
                               marginRight:10}}>Business Man</Text>                  
      </View>
      <View style={{flexDirection:'row'}}>
             <Text style={{fontSize:16,
                               marginTop:5,
                               marginLeft:20,
                               fontWeight: 'bold',
                               marginRight:10}}>Mother’s Occupation</Text>
              <Text style={{fontSize:16,
                               marginTop:5,
                               marginLeft:30,
                               fontWeight: 'normal',
                               marginRight:10}}>Homemaker</Text>                  
      </View>

      <View style={{flexDirection:'row'}}>
             <Text style={{fontSize:16,
                               marginTop:5,
                               marginLeft:20,
                               fontWeight: 'bold',
                               marginRight:10}}>Brother(s)</Text>
              <Text style={{fontSize:16,
                               marginTop:5,
                               marginLeft:110,
                               fontWeight: 'normal',
                               marginRight:10}}>1</Text>                  
      </View>
      <View style={{flexDirection:'row'}}>
             <Text style={{fontSize:16,
                               marginTop:5,
                               marginLeft:20,
                               fontWeight: 'bold',
                               marginRight:10}}>Brother(s) Married</Text>
              <Text style={{fontSize:16,
                               marginTop:5,
                               marginLeft:50,
                               fontWeight: 'normal',
                               marginRight:10}}>1</Text>                  
      </View>
      <View style={{flexDirection:'row'}}>
             <Text style={{fontSize:16,
                               marginTop:5,
                               marginLeft:20,
                               fontWeight: 'bold',
                               marginRight:10}}>Sister(s)</Text>
              <Text style={{fontSize:16,
                               marginTop:5,
                               marginLeft:122,
                               fontWeight: 'normal',
                               marginRight:10}}>1</Text>                  
      </View>
      <View style={{flexDirection:'row'}}>
             <Text style={{fontSize:16,
                               marginTop:5,
                               marginLeft:20,
                               fontWeight: 'bold',
                               marginRight:10}}>Sister(s) Married</Text>
              <Text style={{fontSize:16,
                               marginTop:5,
                               marginLeft:60,
                               fontWeight: 'normal',
                               marginRight:10}}>1</Text>                  
      </View>
      </View>

      <View style={{flexDirection:'row'}}>
        <MaterialCommunityIcons
                 onPress={() => navigation.navigate(HomeScreen)}
                    name="account-group-outline" 
                    size={27} 
                    color="green" 
                    style={{marginTop:20, marginLeft:12}} 
                />
                        <Text style={{fontSize:16,
                               textAlign:'center',
                               marginTop:20,
                               marginLeft:20,
                               fontWeight: 'bold',
                               marginRight:10}}>About Our Family</Text>
                <MaterialCommunityIcons
                 onPress={() => navigation.navigate(HomeScreen)}
                    name="pencil-outline" 
                    size={24} 
                    color="black" 
                    style={{marginTop:20,marginLeft:80}} 
                />
      </View>

      <View style={{
        height:40,
        width:'95%',
        backgroundColor: '#FFFFFF',
        borderRadius:5,
        borderWidth: 2,
        borderColor:'#000000',
        marginTop:10,
        marginLeft:10
      }}>
      <View >
             <Text style={{fontSize:16,
                               textAlign:'center',
                               marginTop:5,
                               marginLeft:20,
                               fontWeight: 'bold',
                               color:'#FFA500',
                               marginRight:10}}>+Add Details</Text>
                             
      </View>
      </View>

      
      <View style={{flexDirection:'row'}}>
        <MaterialCommunityIcons
                 onPress={() => navigation.navigate(HomeScreen)}
                    name="headset" 
                    size={27} 
                    color="#85B6FF" 
                    style={{marginTop:20, marginLeft:12}} 
                />
                        <Text style={{fontSize:16,
                               textAlign:'center',
                               marginTop:20,
                               marginLeft:20,
                               fontWeight: 'bold',
                               marginRight:10}}>Hobbies & Interests</Text>
                <MaterialCommunityIcons
                 onPress={() => navigation.navigate(HomeScreen)}
                    name="pencil-outline" 
                    size={24} 
                    color="black" 
                    style={{marginTop:20,marginLeft:80}} 
                />
      </View>

      <View style={{
        height:40,
        width:'95%',
        backgroundColor: '#FFFFFF',
        borderRadius:5,
        borderWidth: 2,
        borderColor:'#000000',
        marginTop:10,
        marginLeft:10
      }}>
      <View >
             <Text style={{fontSize:16,
                               textAlign:'center',
                               marginTop:5,
                               marginLeft:20,
                               fontWeight: 'bold',
                               color:'#FFA500',
                               marginRight:10}}>+Add Details</Text>
                             
      </View>
      </View>
      <View style={{
        height:60,
        width:'95%',
        backgroundColor: '#FFFFFF',
        borderRadius:5,
        borderWidth: 2,
        borderColor:'#000000',
        marginTop:10,
        marginLeft:10
      }}>
      <View style={{flexDirection:'row'}}>
      <Text style={{fontSize:14,
                              flex: 1, 
                              textAlign: 'center', 
                               marginTop:5,
                               marginLeft:7,
                               marginRight:10}}>Your Views on an equal relationship</Text>
      <TouchableOpacity style={{
        backgroundColor: '#FFA500',
        borderRadius: 30,
        height:30,
        width:150,
        marginTop:10,
        marginRight:10,
        alignSelf: 'center',
        justifyContent: 'center'
      }}>
        <Text style={{ color: 'white', alignSelf: 'center' }}>Add Opinion</Text>
      </TouchableOpacity>
      </View>
      </View>

      <View style={{
        height:100,
        width:'95%',
        backgroundColor: '#FFFFFF',
        borderRadius:5,
        borderWidth: 2,
        borderColor:'#000000',
        marginTop:10,
        marginLeft:10
      }}>
      <View >
      <Text style={{fontSize:14,
                              
                               marginTop:5,
                               marginLeft:7,
                               marginRight:10}}>Edit Your Partners Preferences to get relevant matches</Text>
      <TouchableOpacity style={{
        backgroundColor: '#FFA500',
        borderRadius: 30,
        height:30,
        width:150,
        marginTop:10,
        marginLeft:20,
        marginRight:10,
       // alignSelf: 'center',
        justifyContent: 'center'
      }} onPress={()=> navigation.navigate(EditPreferences)}>
        <Text style={{ color: 'white', alignSelf: 'center' }}>Edit Preferences</Text>
      </TouchableOpacity>
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
    

    box1: {
     
height:40,
      width:90,
      backgroundColor: 'white',
      borderRadius: 20,
      borderWidth: 2,
      borderColor:'black',
      marginLeft:20,
      marginTop:20
    },
    box2: {
      height:40,
      width:105,
      backgroundColor: 'white',
      borderRadius: 20,
      borderWidth: 2,
      borderColor:'black',
      marginLeft:20,
      marginTop:20
    },
    box3: {
     height:40,
      width:120,
      backgroundColor: 'white',
      borderRadius: 20,
      borderWidth: 2,
      borderColor:'black',
      marginLeft:20,
      marginTop:20
    },
    box4: {
      flexDirection:'row',
      height:70,
      width:'95%',
      alignItems:'center',
      backgroundColor: '#FFB6C1',
      borderRadius:5,
      borderWidth: 2,
      borderColor:'black',
      marginTop:10,
      marginLeft:10
    },
    box5: {
      height:150,
      width:'95%',
      backgroundColor: '#D9D9D9',
      borderRadius:5,
      borderWidth: 2,
      borderColor:'#000000',
      marginTop:10,
      marginLeft:10
    },
    box6: {
      height:340,
      width:'95%',
      backgroundColor: '#FFFFFF',
      borderRadius:5,
      borderWidth: 2,
      borderColor:'#000000',
      marginTop:10,
      marginLeft:10
    },
    box7: {
      height:240,
      width:'95%',
      backgroundColor: '#FFFFFF',
      borderRadius:5,
      borderWidth: 2,
      borderColor:'#000000',
      marginTop:10,
      marginLeft:10
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
    overlappingText: {
        position: 'absolute',
        top: -8,
        left: 20,
        backgroundColor: 'white',
        paddingHorizontal: 5,
        color: '#A9A9A9',
      },
      inputContainer: {
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderColor: 'black',
        borderRadius: 30,
        marginTop:15
      },
      input: {
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        paddingVertical: 5,
        paddingHorizontal: 10,
      },
    
});