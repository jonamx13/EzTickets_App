import React from 'react';
import { Text } from 'react-native';

import { ScaledSheet } from 'react-native-size-matters';
import { TextStroke } from "react-native-textstroke";

const fontSize = `${35}@s`;

const EntranceType = ({type}) => {
  return (
      <TextStroke stroke={2} color={'white'}>
        {
          <Text 
          style={styles.textBold}>
          {type}
          </Text>
        }
      </TextStroke>
      )
}

const styles = ScaledSheet.create({
    textBold: {
      paddingHorizontal: '5@s',
      color: 'gold',
      fontWeight: '900', // Black
      fontSize,
    },
    textStroke: {
      stroke:'1@s',
      color: 'white'
    }
  }
);
export default EntranceType;