import React from 'react';
import { Text } from 'react-native';

import { ScaledSheet } from 'react-native-size-matters';

const fontSize = `${15}@s`;

const EventCity = ({city}) => {
  return (
    <Text 
    style={styles.textBold}>
    {city}
    </Text>
)
}

const styles = ScaledSheet.create({
    textBold: {
      paddingHorizontal: '5@s',
      color: 'white',
      fontWeight: 'bold',
      fontSize,
    }
  }
);
export default EventCity;