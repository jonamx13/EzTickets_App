import React, {useState, useRef} from 'react';
import {Text, View, Dimensions, Image} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

//Get url's
const data = [
  {
    id: 1,
    name: 'Event 1',
    url: 'https://source.unsplash.com/1024x768/?nature',
  },
  {
    id: 2,
    name: 'Event 2',
    url: 'https://source.unsplash.com/1024x768/?water',
  },
  {
    id: 3,
    name: 'Event 3',
    url: 'https://source.unsplash.com/1024x768/?girl',
  },
  {
    id: 3,
    name: 'Event 4',
    url: 'https://source.unsplash.com/1024x768/?tree',
  },
];

//Individual Item rendering
const renderItem = ({item}) => {
  return (
    <View style={{alignItems: 'center'}}>
      <Image source={{uri: item.url}} style={{width: '100%', height: '100%'}} />
      <Text style={{marginVertical: 10, fontSize: 20, fontWeight: 'bold'}}>
        {item.name}
      </Text>
    </View>
  );
};

const EventsCarousel = () => {
  const[index, setIndex] = useState(0);
  const isCarousel = useRef(null);
  const width = Dimensions.get('window').width;
  return(
    <View>
      <Carousel
      loop
      width={width}
      height={width / 2}
      autoPlay={true}
      ref={isCarousel}
      data={data}
      scrollAnimationDuration ={1000}
      onSnapToItem={(index) => console.log('current index:', index)}
      renderItem={renderItem}
      />
    </View>
  );
}

export default EventsCarousel;