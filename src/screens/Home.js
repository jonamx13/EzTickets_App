import Container from '../gradientStyles/Container'
import {Text} from 'react-native';
import EventsCarousel from './HomeComponents/EventsCarousel';
import EventData from '../tickets/stubElements/EventData';

const HomeScreen = () => {
  return (
    <Container>
      {/* <EventsCarousel/> */}
      <EventData
      eventTitle={'Hackaton Etherfuse Bonito'}
      />
    </Container>
    
  );
}

export default HomeScreen; 