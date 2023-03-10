import React from 'react';
import { Text } from 'react-native';

import { ScaledSheet } from 'react-native-size-matters';

const fontSize = `${25}@s`;

const EventHour = ({hour}) => {
  return (
          <Text 
          style={styles.textBold}>
          {hour}
          </Text>
      )
}

const styles = ScaledSheet.create({
    textBold: {
      paddingHorizontal: '5@s',
      color: 'white',
      fontWeight: '300', // Light
      fontSize,
    }
  }
);
export default EventHour;