import Carousel from '../../components/carousel/carousel';
import EventCard from './components/eventcard';
import './events.css';
import gamepad from '../../assets/images/events/gamepad.png';

function Events() {
    const events = [
        {
            //TODO: Fix dates, time, description and images
            name: 'Define.',
            eventType: 'Hackathon',
            image: gamepad,
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias atque eligendi',
            date: {
                day: 5,
                month: 'nov',
            },
            time: '6:00PM',
            link: 'https://define.hashmbcet.tech/',
        },
        {
            name: 'Rising',
            eventType: 'Valorant Tournament',
            image: gamepad,
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias atque eligendi',
            date: {
                day: 6,
                month: 'nov',
            },
            time: '2:50PM',
            link: 'https://docs.google.com/forms/d/e/1FAIpQLScE0jBk4gvz3RwDfNUn-73nkOgQmcAjAsbZJpHTwzz7AyodtA/viewform',
        },
        {
            name: 'Battle of Codes',
            eventType: 'Competitive Coding',
            image: gamepad,
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias atque eligendi',
            date: {
                day: 6,
                month: 'nov',
            },
            time: '2:50PM',
            link: 'https://docs.google.com/forms/d/e/1FAIpQLSfz3duZo4qQI7XgM5EnYKuvJVv569gdnWE6_4mrmVOer1p1pw/viewform',
        },
        {
            name: 'Spark',
            eventType: 'Idea Presentation',
            image: gamepad,
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias atque eligendi',
            date: {
                day: 6,
                month: 'nov',
            },
            time: '2:50PM',
            link: 'https://docs.google.com/forms/d/e/1FAIpQLSeYAEFFwsMpCOLj1BDaQdJIMqvSI4diyX8pomUBP_Un6wI2pg/viewform',
        },
        {
            name: 'Experia',
            eventType: 'Project Expo',
            image: gamepad,
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias atque eligendi',
            date: {
                day: 6,
                month: 'nov',
            },
            time: '2:50PM',
            link: 'https://docs.google.com/forms/d/e/1FAIpQLSdOourb47QerTfZ61DldPk1uAQP_Nk4Tl4wzetftuj5I2eLXQ/viewform',
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
