import Container from '../gradientStyles/Container'
import {Text} from 'react-native';
import EventsCarousel from './HomeComponents/EventsCarousel';

const HomeScreen = () => {
  return (
    <Container>
      <EventsCarousel/>
    </Container>
    
  );
}

export default HomeScreen; 