import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import { ScaledSheet } from 'react-native-size-matters';


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

const styles = ScaledSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        height:'100%',
        width: '100%',
        resizeMode: 'contain'
    },
    bgButton: {
        borderColor: 'white',
        borderWidth: '1.8@s',
        backgroundColor: '#b400e9',
        height: '40@s',
        width: '40@s',
        borderRadius: 200, // must be a Number
        alignItems: 'center',
    }
});
export default Tab;