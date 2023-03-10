import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

import EventTitle from './Stub/StubTitle';
import EventDate from './Stub/StubDate';
import EventHour from "./Stub/StubHour";
import EventLocation from './Stub/StubLocation';
import EventCity from './Stub/StubCity';
import EntranceType from "./Stub/StubEntranceType";

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

const EventDataStub = ({ eventTitle, eventDate, eventHour, locationEvent, cityEvent, typeTicket }) => {
  const titleWord = wordSplitter(eventTitle);
  const date = dateSplitter(eventDate);

  //TODO: Kind of ticket Bronze/Silver/Gold/Platinum
  //TODO: EventDataTicket arrange components
  //TODO: Stub & Ticket components
  return (
    <View style={styles.wrapper}>

      <View style={styles.titleContainer}>
        <EventTitle
        title={titleWord}
        />
      </View>

      <View style={styles.titleContainer}>  
        <EventDate
        date={date}
        />
        
        <EventHour
        hour={eventHour}
        />
      </View>

      <View style={styles.titleContainer}>
        <EventLocation
        location={locationEvent}
        />

        <EventCity
        city={cityEvent}
        />
      </View>

    <View style={styles.entranceTypeContainer}>
      <EntranceType
      type={typeTicket}
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
      gap: '8@s'
    },

    titleContainer: {
      justifyContent: 'center',
      flexDirection: 'row',

      borderColor: 'white',
      borderWidth: '3@s',

      width: '100%',
      padding: '1%',
    },

    entranceTypeContainer: {
      justifyContent: 'center',
      flexDirection: 'row',

      borderColor: 'white',
      borderWidth: '3@s',

      width: '100%',
      padding: '2%',
    },
  }
);
export default EventDataStub;