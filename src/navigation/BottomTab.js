import React from "react";
import { TouchableOpacity, Image } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { responsiveFontSize, responsiveHeight, responsiveScreenWidth, responsiveWidth} from "react-native-responsive-dimensions";

import HomeScreen from "../screens/Home";
import TicketsScreen from "../screens/Tickets";
import SavedScreen from "../screens/Saved";
import MyNFTsScreen from "../screens/MyNFTs";
import TabBar from "./TabBar";

//icons
import { i_Home, i_Tickets, i_Saved, i_MyNFTs } from "../../assets/index";

const Tab = createBottomTabNavigator();

export const BottomTab = () => {

    const { icon } = styles;

    return (
        // <Tab.Navigator screenOptions = {screenOptions}>
        <Tab.Navigator tabBar={(props) => <TabBar {...props}/>}>
            <Tab.Screen 
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

const styles = {
    customButton: {
        backgroundColor: 'red',
        height: 50,
        width: 50,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: responsiveFontSize(2)
    },
    icon: {
        height: responsiveHeight(7),
        width: responsiveWidth(7),
        resizeMode: 'contain'
    }
}

const screenOptions = {
    headerShown:false,
    tabBarStyle: {
        height: responsiveHeight(13),
        paddingHorizontal: 30,
        paddingBottom: 10,
        backgroundColor: '#1b1464',
        position: 'absolute',
        borderTopWidth: 0,
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
}
export default BottomTab