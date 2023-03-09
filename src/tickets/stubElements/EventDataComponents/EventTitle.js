import React from 'react';
import { Text, View, Dimensions } from 'react-native';

import { ScaledSheet } from 'react-native-size-matters';

const {width} = Dimensions.get('screen');

const EventTitle = ({title}) => {
  return (
    
        <View style={styles.wrapper}>{
            title.map((word, index) => (
              <Text key={word.key}
              numberOfLines={1}
              style={ 
                index == 0 || index % 2 == 0 
                ? styles.textRegular 
                : styles.textBold}>
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
    backgroundColor: 'yellow',
    flex:1,
    width,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    
  },

    textRegular: {
      color: 'white',
      fontSize: '25@s',
    },
    textBold: {
      color: 'black',
      fontSize: '30@s',
      fontWeight: 'bold'
    }
  }
);

export default EventTitle;