import Carousel from '../../components/carousel/carousel';
import EventCard from './components/eventcard';
import './events.css';
import gamepad from '../../assets/images/events/gamepad.png';
import footsal from '../../assets/images/events/footsal.png';
import battleofcodes from '../../assets/images/events/battleofcodes.png';
import projectexpo from '../../assets/images/events/projectexpo.png';
import spark from '../../assets/images/events/spark.png';
import techhunter from '../../assets/images/events/techhunter.png';


function Events() {
    const events = [
        {
            //TODO: Fix dates, time, description and images
            name: 'Define.',
            eventType: 'Hackathon',
            image:battleofcodes,
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
            image: battleofcodes,
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
            image: spark,
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
            image: projectexpo,
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias atque eligendi',
            date: {
                day: 6,
                month: 'nov',
            },
            time: '2:50PM',
            link: 'https://docs.google.com/forms/d/e/1FAIpQLSdOourb47QerTfZ61DldPk1uAQP_Nk4Tl4wzetftuj5I2eLXQ/viewform',
        },
        {
            name: 'Kick off',
            eventType: 'Futsal',
            image: footsal,
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias atque eligendi',
            date: {
                day: 6,
                month: 'nov',
            },
            time: '9 AM',
            link: 'https://docs.google.com/forms/d/e/1FAIpQLSdOourb47QerTfZ61DldPk1uAQP_Nk4Tl4wzetftuj5I2eLXQ/viewform',
        },
        {
            name: 'Tech Hunter',
            eventType: 'Tressure Hunt',
            image: techhunter,
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias atque eligendi',
            date: {
                day: 6,
                month: 'nov',
            },
            time: '2:50PM',
            link: 'https://docs.google.com/forms/d/e/1FAIpQLSeYAEFFwsMpCOLj1BDaQdJIMqvSI4diyX8pomUBP_Un6wI2pg/viewform',
        },

    ];

    return (
        <div className="events" id="events">
            <div className="heading">
                <h1>Here's How.</h1>
            </div>
            <div className="carousel-wrapper">
                <div>
                    <Carousel>
                        {events.map((e, index) => (
                            <div key={index}>
                                <EventCard event={e} />
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
        </div>
    );
}

export default Events;