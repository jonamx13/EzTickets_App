import Container from '../gradientStyles/Container'
import {Text} from 'react-native';
import EventsCarousel from './HomeComponents/EventsCarousel';
import EventData from '../tickets/EventDataStub/EventDataStub';

const HomeScreen = () => {
  return (
    <Container>
      <EventsCarousel/>
      <EventData
      eventTitle={'Hackaton Etherfuse'}
      eventDate = {'13/March/23'}
      eventHour = {'20:00HRS'}
      locationEvent = {'Foro Algo,'}
      cityEvent = {'CDMX'}
      stubFormat = {true}
      />
    </Container>
    
  );
}

export default HomeScreen; 