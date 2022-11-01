import React from 'react'
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

function TimelineEvent({total, index, setCompleted, name, time, description}) {

    const { ref, inView } = useInView({
        /* Optional options */
        threshold: 0,
        triggerOnce: true,
      });

    useEffect(() => {
      if(inView) {
        setCompleted((((index + 1)/total)*100));
      }
    }, [inView, setCompleted, total, index])

  return (
    <div className="TimelineEvent">
      <div className="eventContainer" data-id={index} ref={ref}>
        <div style={{opacity: inView ? "1" : "0", transition: "all 1s ease-in-out"}}>
          <div className="activePoint"></div>
        </div>
        <div className='detailsContainer' style={{opacity: inView ? "1" : "0", transition: "all 1s ease-in-out", transitionDelay: "0.5s"}}>
          <h4 className="time">{time}</h4>
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default TimelineEvent