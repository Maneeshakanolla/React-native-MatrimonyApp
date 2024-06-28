
import * as React from "react";
import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from '@expo/vector-icons';
import { Entypo, Fontisto, FontAwesome, Ionicons } from '@expo/vector-icons';
import { NativeBaseProvider, Button, Box, Center, Text, VStack, Pressable, HStack, Divider, Icon, Image, View, Accordion,} from "native-base";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Home from "../drawer/Home";
import EditPreferences from "../drawer/EditPreferences";
import EditProfile from "../drawer/EditProfile";
import HelpCenter from "../drawer/HelpCenter";
import SettingsScreen from "../settings/SeetingsScreens";
import WeddingServices from "../drawer/WeddingServices";
import PrivacyPolicy from "../drawer/PrivacyPolicy";
import SafeMatrimony from "../drawer/SafeMatrimony";
import BasicDetails from "../EditSub/BasicDetails";
import Matches from "../Home/Matches";
import Mailbox from "../Home/Mailbox";
import Chat from "../Home/Chat";
import Search from "../Home/Search";
import BottomTabHome from "../Home/BottomTabHome";
import YourCalls from "../drawer/YourCalls";
import DailyRecommendations from "../drawer/DailyRecommendations";
import VerifyYourProfile from "../drawer/VerifyYourProfile";

// Create navigator instances
const Tab = createMaterialBottomTabNavigator();
const Stack=createNativeStackNavigator();
  global.__reanimatedWorkletInit = () => {};
const Drawer = createDrawerNavigator();
const dataArray = [
  { title: "Section 1", content: "Content of Section 1" },
  { title: "Section 2", content: "Content of Section 2" },
  { title: "Section 3", content: "Content of Section 3" }
];
 
function Component(props) {
  return (
    <Center>
      <Text mt="12" fontSize="18">
        This is {props.route.name} page.
      </Text>
    </Center>
  );
}

function CustomDrawerContent(props) {
  const [expanded, setExpanded] = useState(false);
  //plus expand
  const [items, setItems] = useState([
    { id: 1, name: 'Wedding Services', selected: false },
    { id: 2, name: 'More', selected: false },
    { id: 3, name: 'Item 3', selected: false },
    // Add more items as needed
  ]);

  const toggleSelectAll = () => {
    const updatedItems = items.map(item => ({ ...item, selected: true }));
    setItems(updatedItems);
  };

  const toggleItem = itemId => {
    const updatedItems = items.map(item =>
      item.id === itemId ? { ...item, selected: !item.selected } : item
    );
    setItems(updatedItems);
  };
  
  const toggleExpand = () => {
    setExpanded(!expanded);
  }

    return (
      <DrawerContentScrollView {...props} safeArea>
        <Center>
        <Pressable
                  px="5"
                  py="3"
                  rounded="md"
                   onPress={(event) => {
                    props.navigation.navigate("");
                  }}
                >
          {/* <Image
            source={require('../assets/person1.png')}
            style={{ width: 100, height: 100 }}
          /> */}
          <Image
         source={{uri: 'https://www.lensmen.ie/wp-content/uploads/2015/02/Profile-Portrait-Photographer-in-Dublin-Ireland..jpg'}}
         style={{width: 130, height: 130,borderRadius:100}}
         />
        </Pressable>
        </Center>
       <VStack space="6" my="2" mx="1">
         <Box px="4">
          <Center>
          <Text bold color="gray.700">
              Krishna
            </Text>
            <Text bold color="gray.700">
            H13048716
            </Text>
            </Center>
            <Text fontSize="12" mt="1" color="gray.500" fontWeight="500" alignSelf="flex-start">
    Special offer only for you. Flat <Icon as={MaterialCommunityIcons} name="currency-inr" size="14" color="gray.500" />3200 off on 3 month Gold
  </Text>
  <Center>
        <Button  style={{backgroundColor:'orange',width: 150, height: 40,borderRadius:100}}>
            <Text style={{color:'white'}}>Upgrade  Now</Text>
          </Button>
          </Center>
           </Box>
          
    <VStack divider={<Divider />} space="4">
            <VStack space="3">
              {props.state.routeNames.map((name, index) => (
                <Pressable
                  px="5"
                  py="3"
                  rounded="md"
                  bg={
                    index === props.state.index
                      ? "rgba(6, 182, 212, 0.1)"
                      : "transparent"
                  }
                  onPress={(event) => {
                    props.navigation.navigate(name);
                  }}
                >
                  <HStack space="7" alignItems="center">
                    <Icon
                      color={
                        index === props.state.index ? "primary.500" : "gray.500"
                      }
                      size="5"
                      as={<MaterialCommunityIcons name={getIcon(name)} />}
                    />
                    <Text
                      fontWeight="500"
                      color={
                        index === props.state.index ? "primary.500" : "gray.700"
                      }
                    >
                      {name}
                    </Text>
                  </HStack>
                </Pressable>
              ))}
            </VStack>
            <VStack space="5">
              <Text fontWeight="500" fontSize="14" px="5" color="gray.500">
                Labels
              </Text>
              <VStack space="3">
                <Pressable px="5" py="3" onPress={toggleExpand}>
                  <HStack space="7" alignItems="center">
                    <Icon
                      color="gray.500"
                      size="5"
                      as={<MaterialCommunityIcons name="ring" />}
                    />
                    <Text color="gray.700" fontWeight="500">
                    Wedding Services
                     
                    </Text>
                    
                    
                  <Icon
                  color="gray.500"
                  size="5"
                  as={<MaterialCommunityIcons name={expanded ? 'minus' : 'plus'}/>} 
                 />
                
                  </HStack>
                  </Pressable>
                
                {expanded && (
                  <View>
                  <Pressable onPress={(event) => {
                    props.navigation.navigate(WeddingServices);
                    //props.navigation.jumpTo('WeddingServices', { owner: 'OurWeddingServices' });
                  }}>
                <Text style={{marginLeft:60}}>Our Wedding Services</Text>
                </Pressable>  

                
                </View>
 )}
                  
               
                
                <Pressable px="5" py="2">
                  <HStack space="7" alignItems="center" >
                    <Icon
                      color="gray.500"
                      size="5"
                      as={<MaterialCommunityIcons name="bookmark" />}
                    />
                    <Text color="gray.700" fontWeight="500">
                    Success Stories
                    </Text>
                    
                  </HStack>
                </Pressable>
               
                
                  <HStack space="7" px="5" alignItems="center" >
                    <Icon
                      color="gray.500"
                      size="5"
                      as={<MaterialCommunityIcons name="bookmark" />}
                    />
                    <Text fontWeight="500" color="gray.700">
                      More
                    </Text>
                  <Pressable px="5" py="3" onPress={toggleExpand}>
                  <Icon
                  color="gray.500"
                  size="5"
                  as={<MaterialCommunityIcons name={expanded ? 'minus' : 'plus'}/>} 
                 />
                   </Pressable> 
            </HStack>
            {expanded && (
              <View style={{marginLeft:40}}>
             <Pressable onPress={(event) => {
                    props.navigation.navigate(PrivacyPolicy);}}>
              <Text>Privacy Policy</Text>
              </Pressable>
              <Pressable onPress={(event) => {
                    props.navigation.navigate(SafeMatrimony);}}>
              <Text style={{marginTop:10,}}>Safe Matrimony</Text>
              </Pressable>
        </View>
      )}
            
             
               
              </VStack>
              
            </VStack>
          </VStack>
        </VStack>
        
      </DrawerContentScrollView>
      
    );
  }


  

  const StackNavigator = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="WeddingServices" component={WeddingServices} 
        options={{
          headerShown:false,
          
         }}/>
       <Stack.Screen name="EditPreferences" component={EditPreferences} 
        options={{
          headerShown:false,
          
         }}/>

      <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} 
        options={{
          headerShown:false,
          
         }}/>

      <Stack.Screen name="SafeMatrimony" component={SafeMatrimony} 
        options={{
          headerShown:false,
          
         }}/>
         <Stack.Screen name="BasicDetails" component={BasicDetails} 
        options={{
          headerShown:false,
          
         }}/>
      </Stack.Navigator>
    );
  };


  function TabNavigation(){
    return(
  
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Home" component={BottomTabHome}
        options={{tabBarIcon: ()=><Entypo name="home" size={24} color="black" /> }}/>
        <Tab.Screen name="Matches" component={Matches} 
        options={{tabBarIcon: ()=> <Fontisto name="persons" size={24} color="black" />}}/>
        <Tab.Screen name="Mailbox" component={Mailbox} 
        options={{tabBarIcon: () => <Ionicons name="mail" size={24} color="black" />}}/>
        <Tab.Screen name="Chat" component={Chat} 
        options={{tabBarIcon: () => <Entypo name="chat" size={24} color="black" />}}/>
        <Tab.Screen name="Search" component={Search} 
        options={{tabBarIcon: () => <FontAwesome name="search" size={24} color="black" />}}/>
      </Tab.Navigator>
    )
  }
  
  function StackNavigation1(){
    return(
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="TabNavigation" component={TabNavigation}/>
      </Stack.Navigator>
    )
  }
  




  
  
 const getIcon = (screenName) => {
    switch (screenName) {
      case "Home":
        return "home";
      case "Edit Profile":
        return "book-edit-outline";
      case "Edit Preferences":
        return "account-edit-outline";
      case "Verify Your Profile":
        return "checkbox-marked-circle-outline";
      case "Daily Recommendation":
        return "calendar-month";
      case "Your Chats":
        return "chat-processing-outline";
        case "Your Calls":
          return "phone";
        case "Settings":
        return "cog";
        case "Help":
          return "hand-extended-outline";
        case "Feedback":
          return "content-save-edit-outline";
        // case "Wedding Services":
        //   return "ring";
         
      default:
        return undefined;
    }
  };

  

  

  

  export default function MyDrawer() {
    const [expanded, setExpanded] = useState(false);
  //plus expand
 
     const toggleExpand = () => {
    setExpanded(!expanded);
  }

    return (
      <Box safeArea flex={1}>
        <Drawer.Navigator
          drawerContent={(props) => <CustomDrawerContent {...props} />}
          >
          <Drawer.Screen name="Home" component={StackNavigation1}
          
          />
          <Drawer.Screen name="Edit Profile" component={EditProfile} 
         options={{
          headerShown: false,
          
          }}/>
          
          <Drawer.Screen name="Edit Preferences" component={EditPreferences}
           options={{ headerShown: false }} />
          <Drawer.Screen name="Verify Your Profile" component={VerifyYourProfile}
          options={{headerShown:false}}/>
          <Drawer.Screen name="Daily Recommendation" component={DailyRecommendations}
          options={{
            headerShown: false,
            
            }} 
          />
       

          <Drawer.Screen name="Your Chats" component={Component} />
          <Drawer.Screen name="Your Calls" component={YourCalls} 
          options={{headerShown:false}}/>
          <Drawer.Screen name="Settings" component={SettingsScreen}
          options={{headerShown:false} }/>
          <Drawer.Screen name="Help" component={HelpCenter}
           options={{
            headerShown:false,
             drawerLabel: 'Profile' 
            
           }}
           />
         
          <Drawer.Screen name="Feedback" component={Component} />
          <Drawer.Screen name="Wedding Services" component={StackNavigator} 
          options={{ drawerLabel:false,
            headerShown:false
          }} />
          
        {/* Nested stack navigator for expandable item */}
     
        </Drawer.Navigator>
        
        <View>
        <Accordion dataArray={dataArray} />
      </View>
      </Box>
    );
  }

 