import { getTabBarHeight } from '@react-navigation/bottom-tabs/lib/typescript/src/views/BottomTabBar';
import React, {useState} from 'react';
import ReactNative, { View, StyleSheet, Dimensions,Text } from 'react-native';
import { responsiveHeight, responsiveScreenHeight } from 'react-native-responsive-dimensions';
import Tab from './Tab';

const {width} = Dimensions.get('screen');


export const TabBar = ({state,navigation}) => {

    //Tab Selection
    const [selected, setSelected] = useState('Home');
    const { routes } = state;
    const renderColor = (currentTab) => (currentTab === selected ? 'red': 'white');

    const handlePress = (activeTab, index) => {
        if(state.index !== index) {
            setSelected(activeTab);
            navigation.navigate(activeTab);
        }
    };

    return (
        <View style={styles.wrapper}>
            <View style={styles.container}>
                {routes.map((route, index) => (
                    <Tab
                        tab={route}
                        icon={route.params.icon}
                        onPress={ () => handlePress(route.name, index)}
                        color={renderColor(route.name)}
                        key={route.key}
                    />
                ))}
            </View>
        </View>
    );
    
};

const styles = StyleSheet.create({
    wrapper: {
       position: 'absolute',
       bottom: 0,
       width,
       alignItems: 'center',
       justifyContent: 'center',
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#000',
        width,
        height:responsiveHeight(14),
    },
});

export default TabBar;