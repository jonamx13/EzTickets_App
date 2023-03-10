import React from 'react';
import { View, Text, Dimensions } from 'react-native';

import { ScaledSheet } from 'react-native-size-matters';

const fontSize = `${25}@s`;

const EventDate = ({date}) => {
  return (
          <View style={styles.wrapper}> 
            {date.map((word, index) => (
              <Text key={index} style={[
                styles.textGeneralStyle,

              ]}>
  
                {/*Date slash separator*/}
                { index == 1
                ? `/${word}/`
                : word }
  
              </Text>
            ))}
          </View>
  )
}

const styles = ScaledSheet.create({
    wrapper: {
      paddingHorizontal: '5@s',
      flexDirection: 'row',
    },
    textGeneralStyle: {
      color: 'white',
      fontSize,
      fontWeight: '700', // Light
    },
  }
);

export default EventDate;