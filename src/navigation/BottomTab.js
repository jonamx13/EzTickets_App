import React from "react";
import { TouchableOpacity, Image } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/Home";
import TicketsScreen from "../screens/Tickets";
import SavedScreen from "../screens/Saved";
import MyNFTsScreen from "../screens/MyNFTs";

//icons
import { i_Home, i_Tickets, i_Saved, i_MyNFTs } from "../assets/index";

const Tab = createBottomTabNavigator();

export const BottomTab = () => {

    const CustomButton = () => {
        const { customButton, icon } = styles;
        return(
            <TouchableOpacity style={customButton}>
                <Image style={icon} source={i_Home}/>
            </TouchableOpacity>
        )
    }

    const { icon } = styles;

    return (
        <Tab.Navigator screenOptions = {screenOptions}>
            <Tab.Screen name = 'Home' component = {HomeScreen} options= {{
                tabBarButton: () => <CustomButton/>
            }}/>
            <Tab.Screen name = 'Tickets' component = {TicketsScreen} options= {{
                tabBarIcon: () => <Image style={icon} source={i_Tickets}/>
            }}/>
            <Tab.Screen name = 'Saved' component = {SavedScreen} options= {{
                tabBarIcon: () => <Image style={icon} source={i_Saved}/>
            }}/>
            <Tab.Screen name = "My NFT's" component = {MyNFTsScreen} options= {{
                tabBarIcon: () => <Image style={icon} source={i_MyNFTs}/>
            }}/>
        </Tab.Navigator>
    );
}

const styles = {
    customButton: {
        backgroundColor: 'red',
        height: 60,
        width: 60,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        height: 32,
        width: 32
    }
}

const screenOptions = {
    headerShown:false,
    tabBarStyle: {
        height: 70,
        paddingHorizontal: 30,
        paddingBottom: 10,
        backgroundColor: 'rgba(34,36,40,1)',
        position: 'absolute',
        borderTopWidth: 0,
    },
}
export default BottomTab