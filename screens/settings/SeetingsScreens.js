// SettingsScreen.js
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { View, Text, Button } from 'react-native';
import Settings from '../drawer/Settings';
import Notification from './Notification';
import PrivacySettings from './PrivacySettings';
import Account from './Account';
import AdvancedSettings from './AdvancedSettings';
import MoreAlerts from './MoreAlert';


const Stack=createNativeStackNavigator();

const SubStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Notification" component={Notification} />
      <Stack.Screen name="MoreAlerts" component={MoreAlerts } />
      
    </Stack.Navigator>
  );
};

export default function SettingsScreen({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="Settings"
    screenOptions={{
     headerShown:false
    }}>
       <Stack.Screen name="Settings" component={Settings} />
       <Stack.Screen name="Notification" component={Notification} />
       {/* <Stack.Screen name="MoreAlerts" component={MoreAlerts } /> */}
       {/* <Stack.Screen name="SubStackNavigator" component={SubStackNavigator} /> */}
       <Stack.Screen name="PrivacySettings" component={PrivacySettings} />
       <Stack.Screen name="Account" component={Account} />
       <Stack.Screen name="AdvancedSettings" component={AdvancedSettings} />
     </Stack.Navigator>
     
  );
}
