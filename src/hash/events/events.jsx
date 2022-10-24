import Carousel from '../../components/carousel/carousel';
import EventCard from './components/eventcard';
import './events.css';


function Events() {
    const events = [
        {
            name: 'Define.',
            event: 'Hackathon',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias atque eligendi' ,
            date: {
                day: 5,
                month: 'nov',
            },
            time: '6:00PM',
        },
        {
            name: 'Rising',
            event: 'Valorant Tournament',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias atque eligendi' ,
            date: {
                day: 6,
                month: 'nov',
            },
            time: '2:50PM',
        },
        {
            name: 'Battle of Codes',
            event: 'Competitive Coding',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias atque eligendi' ,
            date: {
                day: 6,
                month: 'nov',
            },
            time: '2:50PM',
        },
        {
            name: 'Experia',
            event: 'Project Expo',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias atque eligendi' ,
            date: {
                day: 6,
                month: 'nov',
            },
            time: '2:50PM',
        },
        {
            name: 'Spark',
            event: 'Idea Presentation',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias atque eligendi' ,
            date: {
                day: 6,
                month: 'nov',
            },
            time: '2:50PM',
        },
    ];


    return (
        <div className="events">
            <h1>Here's How.</h1>
            <div>
                <Carousel>
                    {events.map((e) => (
                        <div>
                            <EventCard event={e} />
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    );
}

export default Events;
