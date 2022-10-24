import EventCard from './components/eventcard';
import './events.css';

const events = [
    {
        name: 'Block Chain Workshop',
        date: {
            day: 5,
            month: 'nov',
        },
        time: '6PM',
    },
    {
        name: 'Valorant',
        date: {
            day: 6,
            month: 'nov',
        },
        time: '2:50PM',
    },
];

function Events() {
    return (
        <div className="events">
            {events.map((e) => (
                <EventCard event={e} />
            ))}
        </div>
    );
}

export default Events;
