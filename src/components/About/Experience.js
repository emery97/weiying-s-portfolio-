import React , { useEffect } from 'react';

function Experience() {
    useEffect(() => {
        const timeline = document.querySelector('.timeline');
        
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              timeline.classList.add('start-animation');
            }
          },
          { threshold: 0.5 } // Trigger the animation when 50% of the timeline is visible
        );
        
        observer.observe(timeline);
        
        return () => {
          observer.disconnect();
        };
      }, []);

    const events = [
    { company: 'AR Robotics and Automation', year: 'Dec 2023 - Feb 2024', role:"Indoor Sales Associate", 
      description:["Composed persuasive email campaigns to target companies", "Promoting robotic solutions",
            "Utilized Apollo.io and Hunter.io to efficiently source and compile contact information.",
            "Optimized outreach strategies to enhance productivity and effectiveness."]},
    { company: 'McDonald’s, Singapore', year: 'Nov 2020 – Nov 2023', role:"Crew", 
        description: [
        "Cross-trained in multiple positions within the store as needed.",
        "Demonstrated excellent communication skills when dealing with customer inquired and complaints."
    ]}];

    return (
        <div className="timeline">
            {events.map((event, index) => (
                <div 
                    key={index} 
                    className={`timeline-event ${index % 2 === 0 ? 'left-container' : 'right-container'}`}
                >
                    <div className="timeline-middle">
                        <div className="timeline-circle"></div>
                    </div>
                    <div className="f raleway-body">{event.year}</div>
                    <div className="timeline-content">
                        <h3>{event.company}</h3>
                        <h4 className='montserrat-head'>{event.role}</h4>
                        <p className='event-description raleway-body'>
                            { Array.isArray(event.description) ? 
                            (
                                <ul>
                                    {event.description.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            ) : (
                                <p>{event.description}</p>
                            )
                        }
                        </p>
                    </div>
                </div>
                
            ))}
        </div>
    );
};

export default Experience;