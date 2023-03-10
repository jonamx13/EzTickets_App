import React, {useState} from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import { ScaledSheet } from 'react-native-size-matters';

import Tab from './Tab';

const {width} = Dimensions.get('screen');


export const TabBar = ({state,navigation}) => {

    //Tab Selection
    const [selected, setSelected] = useState('Home');
    const { routes } = state;
    const renderColor = (currentTab) => (currentTab === selected ? '#00ffa2': 'white');

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

const styles = ScaledSheet.create({
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
        backgroundColor: '#1b1464',
        width,
        paddingBottom: '5@s',
        paddingTop: '7@s'
    },
});

export default TabBar;