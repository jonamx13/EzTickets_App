import Container from '../gradientStyles/Container'
import EventsCarousel from './HomeComponents/EventsCarousel';
import  EventDataTicket from "../tickets/EventDataTicket/EventDataTicket";
import EventDataStub from '../tickets/EventDataStub/EventDataStub';

const HomeScreen = () => {
  return (
    <Container>
      <EventsCarousel/>

      <EventDataTicket
      eventTitle={'Hackaton Etherfuse'}
      eventDate = {'MARCH 23'}
      eventHour = {'20:00HRS'}
      locationEvent = {'FORO ALGO'}
      cityEvent = {'CDMX'}
      />

      {/* <EventDataStub
      eventTitle={'Hackaton Etherfuse'}
      eventDate = {'13/March/23'}
      eventHour = {'20:00HRS'}
      locationEvent = {'Foro Algo,'}
      cityEvent = {'CDMX'}
      typeTicket = {'PLATINUM PASS'}
      /> */}

    </Container>
    
  );
}

export default HomeScreen; 