import HUIButton from '../../../components/button/button';

function EventCard({ event }) {
    return (
        <div className="eventCard">
            <h4>{event.name}</h4>
            <p>{event.description}</p>
            <div className="datecontainer">
                {event.date.month}
                <div className="datenumbers">
                    <div className="date">{event.date.day}</div>
                </div>
            </div>
            <div className="timecontainer">{event.time}</div>
            <HUIButton
                text="Register now"
                icon="go"
                event="hash"
                type="primary"
                variant="2"
                color="var(--beurocratic-blue)"
                link={event.link}
            ></HUIButton>
        </div>
    );
}

export default EventCard;
