import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react';

const {width} = Dimensions.get('screen');

const EventLocation = ({city}) => {
  return (
        <Text
          style={styles.textBold}>
          {city}
        </Text>
  )
}

const styles = StyleSheet.create({
    textBold: {
      color: 'black',
      fontSize: 25,
      fontWeight: 'bold'
    }
  }
);
export default EventLocation