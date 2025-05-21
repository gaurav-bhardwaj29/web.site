import React, { useState, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, Environment, OrbitControls } from '@react-three/drei';
import styled from 'styled-components';
import HeadModel from './HeadModel';

const SceneContainer = styled.div`
  width: 100%;
  height: 60vh;
  position: relative;
  margin: 0 auto;
  max-width: 1000px;
  @media (max-width: 768px) {
    height: 50vh;
  }
  
  @media (max-width: 480px) {
    height: 40vh;
  }
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
  transform: translate(-50%, -50%);
  pointer-events: auto;
  
  &:hover .info-content {
    opacity: 1;
    transform: translateY(0);
    visibility: visible;
  }
`;

const InfoButton = styled.button`
  width: 100px;
  height: 50px;
  border-radius: 25px; // Make them pill shaped
  background: rgba(60, 145, 230, 0.3);
  border: 2px solid var(--accent);
  color: white;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(4px);
  &:hover {
    background: var(--accent);
    box-shadow: 0 0 10px var(--accent), 0 0 20px var(--accent);
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
  visibility: hidden;
  
  p {
    font-size: 0.95rem;
    line-height: 1.5;
    margin: 0;
  }
`;

const InteractiveScene = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  

  const getCircularPosition = (angle, radius = 0.35) => {
    const responsiveRadius = window.innerWidth <= 768 ? 0.30 : 0.35;
    return { 
      left: `${50 + responsiveRadius * 100 * Math.cos(angle)}%`, 
      top: `${50 + responsiveRadius * 100 * Math.sin(angle)}%` 
    };
  };
  
 
  const infoPoints = [
    {
      id: 'who',
      shortTitle: 'Who I Am', 
      angle: -Math.PI/2,
      text: 'A creator of AI solutions, I specialize in merging machine learning, data science, and software engineering to craft intelligent systems that solve complex problems.'
    },
    {
      id: 'how',
      shortTitle: 'How I Work',
      angle: -Math.PI/2 + (2*Math.PI/3),
      text: 'Collaboration fuels my process, innovation drives my vision, and iteration ensures every detail evolves to perfection.'
    },
    {
      id: 'what',
      shortTitle: 'What I Bring',
      angle: -Math.PI/2 + (4*Math.PI/3),
      text: 'With a foundation in machine learning algorithms, data engineering, and model deployment, I thrive at the intersection of technical expertise and creative problem-solving.'
    }
  ];
  
  // Track mouse movement for head rotation
  const handleMouseMove = (event) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      setMousePosition({ x, y });
    }
  };
  
  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => {
        container.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, []);

  return (
    <SceneContainer ref={containerRef}>

      <Canvas>
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Environment preset="city" />
        
     
        <HeadModel mousePosition={mousePosition} />
        

        <OrbitControls 
          enablePan={false}
          enableZoom={false}
          enableRotate={false}
        />
      </Canvas>
      
  
      <InfoPoints>
        {infoPoints.map((point) => {
          const position = getCircularPosition(point.angle);
          const contentPosition = {
            left: point.angle === -Math.PI/2 ? '-140px' : 
                  point.angle === -Math.PI/2 + (2*Math.PI/3) ? '-280px' : '0',
            top: point.angle === -Math.PI/2 ? '50px' : '0'
          };
          
          return (
            <InfoPoint 
              key={point.id} 
              style={{ 
                top: position.top, 
                left: position.left 
              }}
            >
              <InfoButton>
                {point.shortTitle}
              </InfoButton>
              <InfoContent 
                className="info-content"
                style={contentPosition}
              >
                <p>{point.text}</p>
              </InfoContent>
            </InfoPoint>
          );
        })}
      </InfoPoints>
    </SceneContainer>
  );
};

export default InteractiveScene;