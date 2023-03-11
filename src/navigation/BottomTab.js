import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/Home";
import TicketsScreen from "../screens/Tickets";
import SavedScreen from "../screens/Saved";
import MyNFTsScreen from "../screens/MyNFTs";
import TabBar from "./TabBar";

//icons
import { i_Home, i_Tickets, i_Saved, i_MyNFTs } from "../../assets/index";

const Tab = createBottomTabNavigator();

export const BottomTab = () => {

    return (
        // <Tab.Navigator screenOptions = {screenOptions}>
        <Tab.Navigator tabBar={(props) => <TabBar {...props}/> }>
            <Tab.Screen
            options={screenOptions}
            name = 'Home'
            component = {HomeScreen}
            initialParams={{ icon: i_Home }}
            />

            <Tab.Screen
            name = 'Tickets'
            component = {TicketsScreen}
            initialParams = {{ icon: i_Tickets }}
            />

            <Tab.Screen
            name = 'Saved'
            component = { SavedScreen }
            initialParams = {{ icon: i_Saved }}
            />
            
            <Tab.Screen
            name = "My NFT's"
            component = {MyNFTsScreen}
            initialParams = {{ icon: i_MyNFTs }}
            />
        </Tab.Navigator>
    );
}

const screenOptions = {
    headerShown:false,
}
export default BottomTab