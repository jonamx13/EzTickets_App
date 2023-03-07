import React, {useState} from 'react';
import ReactNative, { View, StyleSheet, Dimensions } from 'react-native';
import { responsiveHeight, responsiveScreenHeight } from 'react-native-responsive-dimensions';
import Tab from './Tab';

const {width} = Dimensions.get('screen');

const TabBar = ({state,navigation}) => {
    //Tab bar Height
    const [height, setHeight] = useState('');
    const [parent_reference, setParent_Reference] = useState(null);
    const [child_reference, setChild_Reference] = useState(null);

    const {Height} = height;
    const getTabHeight = () => {
        child_reference.measureLayout(
            ReactNative.findNodeHandle
            (parent_reference), (Y,Height) => {
                setHeight(Height);
            });
            height = setHeight;
    }

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
            <View style={styles.container} ref={(ref) => { setParent_Reference(ref) }}>
                {routes.map((route, index) => (
                    <Tab ref={(ref) => { setChild_Reference(ref) }}
                        tab={route}
                        // icon={}
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
       height: responsiveScreenHeight(13),
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