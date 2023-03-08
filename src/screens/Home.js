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
      eventDate = {'13/March/23'}
      locationEvent = {'Foro Algo'}
      cityEvent = {'CDMX'}
      />
    </Container>
    
  );
}

export default HomeScreen; 