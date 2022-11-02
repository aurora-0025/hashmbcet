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
            image: battleofcodes,
            description: 'Push the boundaries of innovation, reality and technology to create solutions and concepts that can change the world – all in just 24 hours! ',
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
            description: 'Show your talents at Valorant. As a squad of five, come and join this gaming experience! Register now.',
            date: {
                day: 6,
                month: 'nov',
            },
            time: '2:50PM',
            link: 'https://docs.google.com/forms/d/e/1FAIpQLScE0jBk4gvz3RwDfNUn-73nkOgQmcAjAsbZJpHTwzz7AyodtA/viewform',
        },
        {
            name: 'Tech Hunter',
            eventType: 'Treasure Hunt Contest',
            image: techhunter,
            description: 'A fun packed hunt consisting of 4 phases, be ready to get brain tickled at Tech Hunter’22! Join us and hunt down the treaure.',
            date: {
                day: 5,
                month: 'nov',
            },
            time: '3:00PM',
            link: 'https://docs.google.com/forms/d/e/1FAIpQLScE0jBk4gvz3RwDfNUn-73nkOgQmcAjAsbZJpHTwzz7AyodtA/viewform',
        },
        {
            name: 'Battle of Codes',
            eventType: 'Competitive Coding',
            image: battleofcodes,
            description: 'Show case your coding skills and win prizes at this two level coding competition consisting of both beginner and advanced track.',
            date: {
                day: 5,
                month: 'nov',
            },
            time: '10:30AM',
            link: 'https://docs.google.com/forms/d/e/1FAIpQLSfz3duZo4qQI7XgM5EnYKuvJVv569gdnWE6_4mrmVOer1p1pw/viewform',
        },
        {
            name: 'Spark',
            eventType: 'Idea Presentation',
            image: spark,
            description: ' Bring out your creativity and problem-solving capabilities to win over the panel and snag great prizes! Come away as a team of 4 and join us now.',
            date: {
                day: 5,
                month: 'nov',
            },
            time: '10:00AM',
            link: 'https://docs.google.com/forms/d/e/1FAIpQLSeYAEFFwsMpCOLj1BDaQdJIMqvSI4diyX8pomUBP_Un6wI2pg/viewform',
        },
        {
            name: 'Experia',
            eventType: 'Project Expo',
            image: projectexpo,
            description: 'Flaunt the pioneer in you and show the world what you&rsquo;ve been working on.',
            date: {
                day: 5,
                month: 'nov',
            },
            time: '2:00PM',
            link: 'https://docs.google.com/forms/d/e/1FAIpQLSdOourb47QerTfZ61DldPk1uAQP_Nk4Tl4wzetftuj5I2eLXQ/viewform',
        },
        {
            name: 'Kick Off',
            eventType: 'Futsal Tournament',
            image: footsal,
            description: 'Flaunt the pioneer in you and show the world what you&rsquo;ve been working on.',
            date: {
                day: 5,
                month: 'nov',
            },
            time: '9:00AM',
            link: 'https://docs.google.com/forms/d/e/1FAIpQLSdOourb47QerTfZ61DldPk1uAQP_Nk4Tl4wzetftuj5I2eLXQ/viewform',
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