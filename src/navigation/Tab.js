import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import { responsiveHeight } from 'react-native-responsive-dimensions';

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
    },
    icon: {
        height:'100%',
        width: '100%',
        resizeMode: 'contain'
    },
    bgButton: {
        borderColor: 'white',
        borderWidth: 2,
        backgroundColor: '#b400e9',
        height: responsiveHeight(7),
        width: responsiveHeight(7),
        borderRadius: 200,
        alignItems: 'center',
    }
});
export default Tab;