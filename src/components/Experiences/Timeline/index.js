import React, { useState } from 'react';
import './index.scss';

const Timeline = () => {
  const [events, setEvents] = useState([
    {
      date: 'September 2024 - Present',
      title: 'Software Engineering Resident, Headstarter AI',
      description: [
        'Built <b>14+ Machine Learning, AI-Engineering and full-stack projects</b> in fast-paced software team environments.',
        'Developed <b>5+ Neural Networks</b> in Python and 11 apps in Typescript on <b>AWS/Vercel</b> with dev and production environments',
        'Implemented <b>LLM-chaining, Hyperparameter tuning, and Fine-tuning</b> on 10+ LLM Models controlling for <b>latency & accuracy.</b>',
      ],
      expanded: false,
    },
    {
      date: 'November 2024 - Present ',
      title: 'Co-Founder/AI Engineer',
      description: [
        'Co-designed and developed Dawlad AI, an innovative platform leveraging machine learning to provide real-time financial insights and recommendations',
        'Developed advanced speech AI models to enhance user interaction and accessibility on the Dawlad AI platform.',
        'Optimized conversational AI workflows, improving the accuracy of speech-to-text and text-to-speech systems'
      ],
      expanded: false,
    },
    {
      date: 'October 2024 - Present ',
      title: 'TMU AI Founder & President',
      description: [
        'Led the TMU AI Club as President, fostering an innovative environment by designing and guiding hands-on AI projects while mentoring members on fundamental and advanced AI concepts, including Machine Learning, Neural Networks, and Gen AI apps.'
      ],
      expanded: false,
    },
    {
      date: 'May-September 2023',
      title: 'Software Engineering Fellow, ColorStack',
      description: [
        'Building a <b>personalized education app</b> with a team of engineers across the world for <b>students with restricted access to education</b>',
        'Engaged in career development and networking to support diversity in tech, enhancing my professional growth and networking'
      ],
      expanded: false,
    },
    {
      date: 'December 2023 - Present',
      title: 'Software Engineering Tutor, CS CLUB',
      description: [
        "Hosted 100+ lessons, teaching students Math, Physics, and Coding with several reporting <b>improved grades</b>, including <b>A+ performances</b>, directly result from personalized instruction and mentorship",
      ],
      expanded: false,
    },
  ]);

  const handleItemClick = (index) => {
    setEvents((prevEvents) => {
      const updatedEvents = prevEvents.map((event, idx) => {
        if (idx === index) {
          return { ...event, expanded: !event.expanded };
        }
        return event;
      });
      return updatedEvents;
    });
  };

  return (
    <div className="timeline-container">
      {events.map((event, index) => (
        <div
          className={`timeline-item ${event.expanded ? 'expanded' : ''}`}
          key={index}
          onClick={() => handleItemClick(index)}
        >
          <div className="timeline-marker"></div>
          <div className="timeline-content">
            <h2>{event.title}</h2>
            {event.expanded ? (
              <div>
                {event.description.map((desc, descIndex) => (
                  <p key={descIndex} dangerouslySetInnerHTML={{ __html: desc }} />
                ))}
              </div>
            ) : (
              <>
                <div className="more">
                  <p>Click for more</p>
                </div>
                <div className="date">{event.date}</div>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
