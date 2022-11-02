import React from 'react';
import { useState } from 'react';
import './timeline.css';
import TimelineEvent from './components/timelineevent';

function Timeline() {
    const [completed, setCompleted] = useState(0);

    var data = [
        {
            name: "Kick Off",
            time: "9:00AM",
            description: "Futsal Tournament"
        },
        {
            name: "Spark",
            time: "10:00AM - 12:00PM",
            description: "Idea Presentation"
        },
        {
            name: "Battle Of Codes",
            time: "10:30AM - 12:30PM",
            description: "Competitive Coding"
        },
        {
            name: "Experia",
            time: "2:00PM - 4:00PM",
            description: "Project Expo"

        },
        {
            name: "Tech Hunter",
            time: "3:00PM - 5:00PM",
            description: "Treasure Hunt Contest"
        },
    ]

    const timelineStyle = {
        width: '15px',
        borderRadius: 50,
    };

    const timelineProgressStyle = {
        width: '100%',
        height: `${completed}%`,
        borderRadius: 'inherit',
        textAlign: 'right',
    };



    return (
        <div className="HashTimeline" id="timeline">
            <h2>Timeline</h2>
            <div className="timelineContainer">
                <div className="timeline" style={timelineStyle}>
                    <div style={timelineProgressStyle} className="timelineProgress"></div>
                </div>
                <div className="timelineEvents">
                    {data.map((evnt, index)=> <TimelineEvent key={index} total={data.length} index={index} setCompleted={setCompleted} {...evnt} />
                    )}
                </div>
            </div>
        </div>
    );
}

export default Timeline;
