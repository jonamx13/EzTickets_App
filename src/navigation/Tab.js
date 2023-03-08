import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { i_Home, i_Tickets, i_Saved, i_MyNFTs } from '../assets/index';

const Tab = ({color, tab, onPress, icon}) => {

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>

            <View style={styles.bgButton}>
                {icon && <Image source={icon} style={styles.icon}/>}
            </View>
            <Text style={{ color }}>{tab.name}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
    },
    icon: {
        height:responsiveHeight(7),
        width: responsiveWidth(7),
        resizeMode: 'contain'
    },
    bgButton: {
        backgroundColor: 'red',
        height: responsiveHeight(7),
        width: responsiveHeight(7),
        borderRadius: 200,
        alignItems: 'center',
    }
});
export default Tab;