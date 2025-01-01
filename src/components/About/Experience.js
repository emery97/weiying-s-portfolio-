import React from 'react';

function Experience() {
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
                <div key={index} className="timeline-event">
                    <div className="timeline-year">{event.year}</div>
                    <div className="timeline-content">
                        <h3>{event.company}</h3>
                        <h4>{event.role}</h4>
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