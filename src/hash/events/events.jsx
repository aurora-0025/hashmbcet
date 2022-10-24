import EventCard from './components/eventcard';
import './events.css';

const events = [
    //TODO: Fix dates and time
    {
        name: 'Define Hack',
        description: 'Redefine yourself',
        date: {
            day: `5-6`,
            month: 'nov',
        },
        time: '2:50 PM',
        link: 'https://define.hashmbcet.tech/',
    },
    {
        name: 'Rising',
        description: 'Valorant Tournament',
        date: {
            day: 5,
            month: 'nov',
        },
        time: '6 PM',
        link: 'https://docs.google.com/forms/d/e/1FAIpQLScE0jBk4gvz3RwDfNUn-73nkOgQmcAjAsbZJpHTwzz7AyodtA/viewform',
    },

    {
        name: 'Battle of Codes',
        description: 'Competitive Coding',
        date: {
            day: `5-6`,
            month: 'nov',
        },
        time: '2:50 PM',
        link: 'https://docs.google.com/forms/d/e/1FAIpQLSfz3duZo4qQI7XgM5EnYKuvJVv569gdnWE6_4mrmVOer1p1pw/viewform',
    },
    {
        name: 'Spark',
        description: 'Idea Presentation',
        date: {
            day: `5-6`,
            month: 'nov',
        },
        time: '2:50 PM',
        link: 'https://docs.google.com/forms/d/e/1FAIpQLSeYAEFFwsMpCOLj1BDaQdJIMqvSI4diyX8pomUBP_Un6wI2pg/viewform',
    },
    {
        name: 'Experia',
        description: 'Project Expo',
        date: {
            day: `5-6`,
            month: 'nov',
        },
        time: '2:50 PM',
        link: 'https://docs.google.com/forms/d/e/1FAIpQLSdOourb47QerTfZ61DldPk1uAQP_Nk4Tl4wzetftuj5I2eLXQ/viewform',
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
