import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export function splitTitle(titleStr) {
  const str = titleStr;
  const arr = str.split(' ');
  return arr;
}

const EventData = ({ eventTitle, eventDate, locationEvent, cityEvent }) => {
  const titleWord = splitTitle(eventTitle);
  return (
    <View style={styles.title}>
      {
        titleWord.map((word, index) => (
          <Text 
          style={ 
            index == 0 || index % 2 == 0 
            ? styles.textRegular 
            : styles.textBold}>
            {word}
            </Text>
        ))
      }
    </View>
  )
}

const styles = {
  title: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    margin: 0,
  },
  textRegular: {
    fontSize: 25,
  },
  textBold: {
    fontSize: 25,
    fontWeight: 'bold'
  }
}
export default EventData