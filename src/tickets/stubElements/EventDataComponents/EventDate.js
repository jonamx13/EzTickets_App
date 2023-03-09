import React from 'react';
import { Text, StyleSheet } from 'react-native';

import { scale } from 'react-native-size-matters';

const EventDate = ({date}) => {
  return ( 
        
          date.map((word, index) => (
            <Text 
            style={ 
              index == 0 || index % 2 == 0 
              ? styles.textRegular 
              : styles.textBold}>
              {index == 1
              ? `/${word}/`
              : word
            }</Text>
          ))
  )
}

const styles = StyleSheet.create({
    textRegular: {
      color: 'white',
      fontSize: scale(20),
    },
    textBold: {
      color: 'black',
      fontSize: scale(20),
      fontWeight: 'bold'
    }
  }
);

export default EventDate;