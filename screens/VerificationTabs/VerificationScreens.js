import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import IDVerification from './IDVerification';
import PhotoVerifaction from './PhotoVerification';
import SalaryVerification from './SalaryVerification';


const Tab = createMaterialTopTabNavigator();

const VerificatioScreens = () => {
  return (
    
      <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'blue',
        inactiveTintColor: 'gray',
        indicatorStyle: { backgroundColor: 'green' },
        style: { backgroundColor: 'white' },}}>
        <Tab.Screen name="IDVerification" component={IDVerification} />
        <Tab.Screen name="PhotoVerifaction" component={PhotoVerifaction} />
        <Tab.Screen name="SalaryVerification" component={SalaryVerification}/>
      </Tab.Navigator>
   
  );
};

export default VerificatioScreens;
