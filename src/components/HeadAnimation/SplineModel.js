import React, { useState } from 'react';
import Spline from '@splinetool/react-spline';
import styled from 'styled-components';

const SplineContainer = styled.div`
  width: 100%;
  height: 70vh;
  position: relative;
  margin: 0 auto;
`;

const LoadingMessage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--background);
  color: var(--accent);
  font-size: 1.2rem;
  z-index: 1;
  opacity: ${props => props.isLoading ? '1' : '0'};
  transition: opacity 0.5s ease;
  pointer-events: none;
`;

const InfoPoints = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

const InfoPoint = styled.div`
  position: absolute;
  width: 120px;
  height: 120px;
  transform: translate(-50%, -50%);
  pointer-events: auto;
  
  &:hover .info-content {
    opacity: 1;
    transform: translateY(0);
  }
`;

const InfoButton = styled.button`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: rgba(60, 145, 230, 0.3);
  border: 2px solid var(--accent);
  color: white;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  z-index: 10;
  transition: all 0.3s ease;
  
  &:hover {
    background: var(--accent);
    transform: scale(1.1);
  }
`;

const InfoContent = styled.div`
  position: absolute;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  padding: 1rem;
  border-radius: 8px;
  width: 280px;
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.3s ease;
  color: white;
  pointer-events: auto;
  z-index: 5;
  
  h3 {
    font-size: 1rem;
    margin-bottom: 0.5rem;
    color: var(--accent);
  }
  
  p {
    font-size: 0.9rem;
    line-height: 1.5;
    margin: 0;
  }
`;

const SplineModel = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  // Information point data specific to AI Engineer profile
  const infoPoints = [
    {
      id: 'who',
      title: 'Who I Am',
      position: { top: '35%', left: '30%' },
      contentPosition: 'left',
      text: 'A creator of AI solutions, I specialize in merging machine learning, data science, and software engineering to craft intelligent systems that solve complex problems.'
    },
    {
      id: 'how',
      title: 'How I Work',
      position: { top: '35%', left: '70%' },
      contentPosition: 'right',
      text: 'Collaboration fuels my process, innovation drives my vision, and iteration ensures every detail evolves to perfection.'
    },
    {
      id: 'what',
      title: 'What I Bring',
      position: { top: '75%', left: '50%' },
      contentPosition: 'bottom',
      text: 'With a foundation in machine learning algorithms, data engineering, and model deployment, I thrive at the intersection of technical expertise and creative problem-solving.'
    }
  ];
  
  const handleSplineLoad = () => {
    setIsLoading(false);
  };

  return (
    <SplineContainer>
      <LoadingMessage isLoading={isLoading}>
        Loading 3D Model...
      </LoadingMessage>
      
      <Spline 
        scene="https://my.spline.design/3dmoxrwip-7174954df1cf53c2974f15e0e781ac59/" 
        onLoad={handleSplineLoad}
      />
      
      {/* Information Points Overlay */}
      <InfoPoints>
        {infoPoints.map((point) => (
          <InfoPoint 
            key={point.id} 
            style={{ 
              top: point.position.top, 
              left: point.position.left 
            }}
          >
            <InfoButton>{point.title.split(' ')[0]}</InfoButton>
            <InfoContent 
              className="info-content"
              style={{ 
                left: point.contentPosition === 'left' ? '-280px' : 
                      point.contentPosition === 'right' ? '50px' : '-120px',
                top: point.contentPosition === 'bottom' ? '60px' : '0px'
              }}
            >
              <h3>{point.title}</h3>
              <p>{point.text}</p>
            </InfoContent>
          </InfoPoint>
        ))}
      </InfoPoints>
    </SplineContainer>
  );
};

export default SplineModel;
