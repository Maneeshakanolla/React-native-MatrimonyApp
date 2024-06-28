import { useNavigation, useNavigationState } from '@react-navigation/native';
import * as React from 'react';
import { View, Text, Button } from 'react-native';
import Settings from './Settings';

export default function HomeScreen() {
  const navigation=useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen</Text>
      <Button title="Go to Settings" onPress={() => navigation.navigate(Settings)} />
    </View>
  );
}
