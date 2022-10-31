import React, { useEffect } from 'react';
import { useState } from 'react';
import './timeline.css';
import TimelineEvent from './components/timelineevent';

function Timeline() {
    const [completed, setCompleted] = useState(0);

    var data = [
        {
            name: "Inaugration",
            time: "8:00",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum fugiat quas nihil id consectetur beatae"
        },
        {
            name: "Hello",
            time: "8:00"
        },
        {
            name: "Hello",
            time: "8:00"
        },
        {
            name: "Hello",
            time: "8:00"
        },
        {
            name: "Hello",
            time: "8:00"
        },
    ]

    const [buttonText, setButtonText] = useState("ON");

    function buttonClick() {
        if(buttonText == "ON")
            setButtonText("OFF");
        else setButtonText("ON");
    }

    useEffect(()=> {
        console.log(completed);
    }, [completed])

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
        <div className="HashTimeline">
            <h2>Timeline</h2>
            <div className="timelineContainer">
                <div className="timeline" style={timelineStyle}>
                    <div style={timelineProgressStyle} className="timelineProgress"></div>
                </div>
                <div className="timelineEvents">
                    {data.map((evnt, index)=> <TimelineEvent total={data.length} index={index} setCompleted={setCompleted} {...evnt} />
                    )}
                </div>
            </div>
        </div>
    );
}

export default Timeline;
