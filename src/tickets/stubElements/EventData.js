import { View, Text, StyleSheet, Dimensions } from 'react-native';
import React from 'react';
import { responsiveHeight } from 'react-native-responsive-dimensions';

/* A way to get the width of the screen. */
const {width} = Dimensions.get('screen');

export function wordSplitter(stringSplitter) {
  const str = stringSplitter;
  const arr = str.split(' ');

  return arr;
}


//TODO: Make dateSplitter function
export function dateSplitter(stringSplitter) {
  const str = stringSplitter;
  let obj = str.split('/');




  return obj;
}

const EventData = ({ eventTitle, eventDate, locationEvent, cityEvent }) => {
  const titleWord = wordSplitter(eventTitle);
  const date = wordSplitter(eventDate);

  return (
    <View style={styles.wrapper}>
      {/* eventTitle */}
        <View style={styles.container}> 
        {
          titleWord.map((word, index) => (
            <Text key={word.key}
            style={ 
              index == 0 || index % 2 == 0 
              ? styles.textRegular 
              : styles.textBold}>
              {word}
              </Text>
          ))
        }
      </View>

      {/* eventDate */}
      <View style={styles.container}> 
        {
          date.map((word, index) => (
            <Text key={word.key}
            style={ 
              index == 0 || index % 2 == 0 
              ? styles.textRegular 
              : styles.textBold}>
              {word}
              </Text>
          ))
        }
      </View>

      {/* locationEvent */}
      <Text>{locationEvent}</Text>

      {/* cityEvent */}
      <Text>{cityEvent}</Text>

    </View>
    
  )
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
export default EventData