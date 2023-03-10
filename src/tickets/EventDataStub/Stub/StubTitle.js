import React from 'react';
import { Text, View, Dimensions } from 'react-native';

import { ScaledSheet } from 'react-native-size-matters';

const {width} = Dimensions.get('screen');
const fontSize = `${37}@s`;

export const somefunction = 10;
const EventTitle = ({title, fontSize}) => {
  return (
        <View style={styles.wrapper}>{
            title.map((word, index) => (
              <Text key={index}
              numberOfLines={1}
              style={[
                  styles.textGeneralStyle,

                  index == 0 || index % 2 == 0 
                  ? styles.textRegular 
                  : styles.textBold
                  
                ]}>
                {word}
                </Text>
            ))
              }
        </View>
  );
}

const styles = ScaledSheet.create({
  wrapper: {
    flexWrap: 'wrap',
    flex:1,
    width,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: '5@s',
  },

    textGeneralStyle: {
      color: 'white',
      fontSize
    },

    textBold: {
      fontWeight: 'bold'
    },

  }
);

export default EventTitle;