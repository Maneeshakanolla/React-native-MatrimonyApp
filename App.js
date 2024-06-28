

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {NativeBaseProvider,} from "native-base";
import MyDrawer from "./screens/myDrawer/MyDrawer";
// import HomeScreen from "./screens/drawer/Home";
// import HiddenAScreen from "./screens/other/HiddenA";
// import HiddenBScreen from "./screens/other/HiddenB";
// import HiddencScreen from "./screens/other/HiddenC";
// import HiddenDScreen from "./screens/other/HiddenD";
// import { createDrawerNavigator } from "@react-navigation/drawer";
// import CustomDrawer from "./screens/other/DrawerNavigation";

// const Drawer=createDrawerNavigator();


export default function App() {
  return (
    //  <DrawerNavigator/>
    <NavigationContainer>
      <NativeBaseProvider>
        <MyDrawer />
        {/* <DrawerNavigator/> */}
      </NativeBaseProvider>
    </NavigationContainer>

  );
}


