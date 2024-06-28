import React, { useState } from 'react';
import {  StyleSheet, TouchableOpacity, Text } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
//import CollapsibleView from '@eliav2/react-native-collapsible-view';
import CollapsibleView from '@eliav2/react-native-collapsible-view';

const CustomDrawer = (props) => {
  const [expandedItems, setExpandedItems] = useState([]);

  const toggleExpand = (item) => {
    if (expandedItems.includes(item)) {
      setExpandedItems(expandedItems.filter((i) => i !== item));
    } else {
      setExpandedItems([...expandedItems, item]);
    }
  };

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.expandableItem}
          onPress={() => toggleExpand('hidden1')}
        >
          <Text>Hidden 1</Text>
        </TouchableOpacity>
        <CollapsibleView collapsed={!expandedItems.includes('hidden1')}>
          <View style={styles.subItems}>
            <TouchableOpacity
              style={styles.subItem}
              onPress={() => props.navigation.navigate('HiddenA')}
            >
              <Text>Hidden A</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.subItem}
              onPress={() => props.navigation.navigate('HiddenB')}
            >
              <Text>Hidden B</Text>
            </TouchableOpacity>
          </View>
        </CollapsibleView>

        <TouchableOpacity
          style={styles.expandableItem}
          onPress={() => toggleExpand('hidden2')}
        >
          <Text>Hidden 2</Text>
        </TouchableOpacity>
        <CollapsibleView collapsed={!expandedItems.includes('hidden2')}>
          <View style={styles.subItems}>
            <TouchableOpacity
              style={styles.subItem}
              onPress={() => props.navigation.navigate('HiddenC')}
            >
              <Text>Hidden C</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.subItem}
              onPress={() => props.navigation.navigate('HiddenD')}
            >
              <Text>Hidden D</Text>
            </TouchableOpacity>
          </View>
        </CollapsibleView>

        <DrawerItemList {...props} />
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  expandableItem: {
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  subItems: {
    paddingLeft: 16,
  },
  subItem: {
    padding: 8,
  },
});

export default CustomDrawer;