import React from 'react';
import { View, Dimensions } from 'react-native';

import EventTitle from './DataTicketElements/TicketTitle';
import EventDate from './DataTicketElements/TicketDate';
import EventLocation from './DataTicketElements/TicketLocation';
import EventCity from './DataTicketElements/TicketCity';

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
  return (
    <View style={styles.wrapper}>

      {/* First Line */}
      <View style={styles.titleContainer}>
        <EventTitle
        title={titleWord}
        />
      </View>

      {/* Second Line*/}
      <View style={styles.rowWrapper}>

        <View style={styles.locationContainer}>  
          <EventDate
          date={date}
          />
        </View>

        <View style={styles.locationContainer}>
          <EventLocation
          location={locationEvent}
          />

          <EventCity
          city={cityEvent}
          />
        </View>

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

    rowWrapper: {
      width,
      justifyContent: 'space-between',
      flexDirection: 'row',
      gap: '8@s'
    },

    locationContainer: {
      alignItems: 'center',
      
      flexGrow:2,

      borderColor: 'white',
      borderWidth: '3@s',

      padding: '1%',
      height: '100%',
    },

  }
);
export default EventDataStub;