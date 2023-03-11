import { View, Text, Dimensions } from 'react-native'
import React from 'react'

import EventDataStub from './EventDataStub';

import LinearGradient from 'react-native-linear-gradient';
import RadialGradient from 'react-native-radial-gradient';
import { ScaledSheet } from 'react-native-size-matters';

const {width} = Dimensions.get('screen');
const borderRadius = '15@s';
const colors = {
  lightPurple: 'rgba(27, 20, 100, 1)',
  darkPurple: 'rgba(27, 20, 100, 1)',
  alphaPurple: 'rgba(121, 119, 255, .5)',
  alphaPink: 'rgba(219, 31, 255, .5)',
};

const Stub = (props) => {
  return (
    
    <LinearGradient
    colors={[colors.lightPurple, colors.darkPurple]}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 0 }}
    style= {styles.OuterWrapper}
    >
        <RadialGradient
      colors={[colors.alphaPurple, colors.alphaPink, colors.alphaPurple]}
      radius={width}
      style= {styles.InnerWrapper}
      >
        <View style={styles.titleContainer}>
          <EventDataStub 
          {...props}
          />
        </View>

      </RadialGradient>
    </LinearGradient>
  )
}

const styles = ScaledSheet.create({
    OuterWrapper: {
      width,
      justifyContent: 'center',
      alignItems: 'center',

      borderBottomLeftRadius: borderRadius,
      borderBottomRightRadius: borderRadius
  },
    InnerWrapper: {
      marginVertical: '2%',
      width: '97%',
      justifyContent: 'center',
      alignItems: 'center',

      borderColor: 'white',
      borderWidth: '2@s',
      borderRadius,
      
  },
  titleContainer: {

      justifyContent: 'center',
      flexDirection: 'row',

      width: '100%',
      paddingHorizontal: '4%',
      paddingVertical:'2%',

      borderRadius,

  },
});
export default Stub