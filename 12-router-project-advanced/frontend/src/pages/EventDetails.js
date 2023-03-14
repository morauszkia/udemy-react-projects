import { useParams } from 'react-router-dom';

const EventDetailsPage = () => {
  const { eventId } = useParams();

  return <h1>Event: {eventId}</h1>;
};

export default EventDetailsPage;

export async function loader({}) {
  fetch('http://localhost:8080/events/');
}
