import React from 'react';
import styled from 'styled-components';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Journey.css';

const InnerIcon = styled.div`
    width: 20px;
    height: 20px;
    border: 2px solid black;
    background-color: black;
    position: absolute;
    bottom: 10%;
    right: 9%;
    border-radius: 30px;
`;

const Title = styled.div`
    color: white;
    text-align: center;
    font-size: 4.25rem;
`;

const Timeline = () => {
    return(
        <>
        <Title id="Journey">My Journey</Title>

        <VerticalTimeline className="root">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: '#30302e', color: '#fff', boxShadow: 'none' }}
              dateClassName="date"
              contentArrowStyle={{ borderRight: '7px solid #fff' }}
              date="December 2019 - March 2021"
              iconClassName="journeyIcon"
              iconClassName="OutaIcon"
              icon={<InnerIcon />}
            >
              <h1 className="vertical-timeline-element-title">Start learning how to code</h1>
              <p>              
                  Learning Web Development using many online tutorial like Udemy, FreeCodeCamp. Building many personal projects using different technologies and then later on specialized in React.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: '#30302e', color: '#fff', boxShadow: 'none' }}
              contentArrowStyle={{ borderRight: '7px solid #fff' }}
              date="March 2021 - Present"
              dateClassName="date"
              iconClassName="journeyIcon"
              iconClassName="OutaIcon"
              icon={<InnerIcon />}
            >
              <h1 className="vertical-timeline-element-title">FullStack Developer</h1>
              <h4 className="vertical-timeline-element-subtitle">SendFX Gold Coast</h4>
              <p>
                Working with a team of developers and a UX/UI designer, Product Owner to develop complicated web-applications using Scrum & Agile
              </p>
            </VerticalTimelineElement>
        </VerticalTimeline>
        </>
    );
}

export default Timeline;