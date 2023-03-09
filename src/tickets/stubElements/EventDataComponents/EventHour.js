import React from 'react';
import { Text, StyleSheet } from 'react-native';

import { scale } from 'react-native-size-matters';

const EventHour = ({hour}) => {
  return (
        <Text
          style={styles.textBold}>
          {hour}
        </Text>
  )
}

const styles = StyleSheet.create({
    textBold: {
      color: 'black',
      fontSize: scale(20),
      fontWeight: 'bold'
    }
  }
);
export default EventHour;