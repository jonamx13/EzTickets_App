import Container from '../gradientStyles/Container'
import EventsCarousel from './HomeComponents/EventsCarousel';
import EventDataStub from '../tickets/EventDataStub/EventDataStub';

const HomeScreen = () => {
  return (
    <Container>
      <EventsCarousel/>
      <EventDataStub
      eventTitle={'Hackaton Etherfuse'}
      eventDate = {'13/March/23'}
      eventHour = {'20:00HRS'}
      locationEvent = {'Foro Algo,'}
      cityEvent = {'CDMX'}
      typeTicket = {'PLATINUM PASS'}
      />
    </Container>
    
  );
}

export default HomeScreen; 