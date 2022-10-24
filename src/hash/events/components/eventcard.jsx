import HUIButton from "../../../components/button/button";

function EventCard({ event }) {
    return (

        <div className="eventCard">
            <div className="dateTimeContainer">
                <div className="datecontainer">
                    {event.date.month}
                    <div className="datenumbers">
                        <div className="date">{event.date.day}</div>
                    </div>
                </div>
                <div className="timecontainer">{event.time}</div>
            </div>
            <div className="eventdata">
                <h3 className="eventname">{event.name}</h3>
                <p className="eventevent"> {event.event}</p>
                <p className="eventdescription">{event.description}</p>
                <HUIButton
                    text="Register Now"
                    icon="go"
                    event="hash"
                    type="primary"
                    variant="2"
                    color="var(--beurocratic-blue)"
                    // link="https://www.rebrand.ly/define_sponsorguide"
                ></HUIButton>
            </div>
        </div>
    );
}

export default EventCard;
