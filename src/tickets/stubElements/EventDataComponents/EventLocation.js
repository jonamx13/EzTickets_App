import React from 'react';
import { Text, StyleSheet } from 'react-native';

import { ScaledSheet } from 'react-native-size-matters';

const EventLocation = ({location}) => {
  return (
        <Text
          adjustsFontSizeToFit
          style={styles.textBold}>
          {location}
        </Text>
  )
}

const styles = ScaledSheet.create({
    textBold: {
      color: 'black',
      fontSize: '50@s',
      fontWeight: 'bold'
    }
  }
);
export default EventLocation;