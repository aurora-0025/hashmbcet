function EventCard({ event }) {
    return (
        <div className="eventCard">
            {event.name}
            <div className="datecontainer">
                {event.date.month}
                <div className="datenumbers">
                    <div className="date">{event.date.day}</div>
                </div>
            </div>
            <div className="timecontainer">{event.time}</div>
        </div>
    );
}

export default EventCard;
