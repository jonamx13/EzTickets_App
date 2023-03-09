import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react';


const {width} = Dimensions.get('screen');

const EventTitle = ({title}) => {
  return (
            title.map((word, index) => (
              <Text key={word.key}
              style={ 
                index == 0 || index % 2 == 0 
                ? styles.textRegular 
                : styles.textBold}>
                {word}
                </Text>
            ))
  );
}

const styles = StyleSheet.create({
    wrapper: {
      flex:1,
      width,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    },
    container: {
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',

      backgroundColor: 'red',
      borderColor: 'white',
      borderWidth: 3,

      width: '80%',
      height: '10%',
      padding: 10,
    },
    textRegular: {
      color: 'white',
      fontSize: 25,
    },
    textBold: {
      color: 'black',
      fontSize: 25,
      fontWeight: 'bold'
    }
  }
);

export default EventTitle