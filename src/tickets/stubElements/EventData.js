import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

import EventTitle from './EventDataComponents/EventTitle';
import EventDate from './EventDataComponents/EventDate';
import EventHour from "./EventDataComponents/EventHour";
import EventLocation from './EventDataComponents/EventLocation';
import EventCity from './EventDataComponents/EventCity';

import { ScaledSheet } from 'react-native-size-matters';

const {width} = Dimensions.get('screen');

export function wordSplitter(stringSplitter) {
  const str = stringSplitter;
  const arr = str.split(' ');

  return arr;
}


export function dateSplitter(stringSplitter) {
  const str = stringSplitter;
  let obj = str.split('/');

  return obj;
}

const EventData = ({ eventTitle, eventDate, eventHour, locationEvent, cityEvent, stubFormat = false }) => {
  const titleWord = wordSplitter(eventTitle);
  const date = dateSplitter(eventDate);

  //TODO: Make vertical and horizontal structure
  //TODO: Calculcate fontsize with 100% - (container - padding - (gap * (number of words minus 1)))
  return (
    <View style={styles.wrapper}>

      <View style={styles.titleContainer}>
        <EventTitle
        title={titleWord}
        />
      </View>

      <View style={styles.dateContainer}>  
        <EventDate
        date={date}
        />
        <EventHour

        hour={eventHour}
        />
      </View>

      <View style={styles.placeContainer}>
        <EventLocation
        location={locationEvent}
        />

        <EventCity
        city={cityEvent}
        />
      </View>

    </View>
    
  )
}

const styles = ScaledSheet.create({
    wrapper: {
      flex:1,
      width,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    },

    titleContainer: {
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',

      backgroundColor: 'red',
      borderColor: 'white',
      borderWidth: '3@s',

      width: '80%',
      padding: '2%',
    },

    dateContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',

      backgroundColor: 'green',
      borderColor: 'white',
      borderWidth: 3,

      width: '80%',
      height: '10%',
      padding: 10,
    },

    placeContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',

      backgroundColor: 'blue',
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
export default EventData;