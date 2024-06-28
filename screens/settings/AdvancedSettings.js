// SettingsScreen.js
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { View, Text, Button } from 'react-native';



import AdvSetting from '../AdvancedSetting/AdvSetting';
import BlockedProfiles from '../AdvancedSetting/BlockedProfiles';
import ProfilesYou from '../AdvancedSetting/ProfilesYou';
import ActionConfirmation from '../AdvancedSetting/ActionConfirm';
import PhonePermissions from '../AdvancedSetting/PhonePermissions';
import CallPreferences from '../AdvancedSetting/CallPreferences';


const Stack=createNativeStackNavigator();


export default function AdvancedSettings({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="AdvSetting"
    screenOptions={{
     headerShown:false
    }}>
       <Stack.Screen name="AdvSetting" component={AdvSetting} />
       <Stack.Screen name="CallPreferences" component={CallPreferences}/>
       <Stack.Screen name="BlockedProfiles" component={BlockedProfiles} />
       <Stack.Screen name="ProfilesYou" component={ProfilesYou} />
       {/* <Stack.Screen name="ActionConfirmation" component={ActionConfirmation} /> */}
       <Stack.Screen name="PhonePermissions" component={PhonePermissions} />
     </Stack.Navigator>
     
  );
}
