import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, useGLTF, Environment, Text } from '@react-three/drei';
import * as THREE from 'three';
import styled from 'styled-components';

// Container for 3D scene and info points
const HeadAnimationContainer = styled.div`
  width: 100%;
  height: 80vh;
  position: relative;
  margin: 0 auto;
`;

// Styled overlay for information points
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

// The 3D model component
function HeadModel({ mousePosition }) {
  const modelRef = useRef();
  // Replace with your own 3D model - this is just a placeholder path
  const { scene } = useGLTF('/assets/models/vr_glasses.glb');
  
  // Animate the head based on mouse position
  useFrame(() => {
    if (!modelRef.current) return;
    
    // Calculate target rotation based on mouse position
    const targetRotationY = mousePosition.x * 0.5; // horizontal
    const targetRotationX = mousePosition.y * 0.3; // vertical
    
    // Smooth animation using lerp (linear interpolation)
    modelRef.current.rotation.y += (targetRotationY - modelRef.current.rotation.y) * 0.05;
    modelRef.current.rotation.x += (targetRotationX - modelRef.current.rotation.x) * 0.05;
  });
  
  return (
    <primitive 
      ref={modelRef}
      object={scene.clone()}
      scale={1.5}
      position={[0, 0, 0]}
    />
  );
}

export default function HeadFollow() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Track mouse movement
  const handleMouseMove = (event) => {
    // Normalize mouse coordinates between -1 and 1
    setMousePosition({
      x: (event.clientX / window.innerWidth) * 2 - 1,
      y: -(event.clientY / window.innerHeight) * 2 + 1
    });
  };
  
  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  // Information point data specific to AI Engineer profile
  const infoPoints = [
    {
      id: 'who',
      title: 'Who I Am',
      position: { top: '35%', left: '34%' },
      contentPosition: 'left',
      text: 'I am someone driven by curiosity and a passion for understanding how things work.'
    },
    {
      id: 'how',
      title: 'How I Work',
      position: { top: '35%', left: '66%' },
      contentPosition: 'right',
      text: 'Collaboration fuels my process, innovation drives my vision, and iteration ensures every detail evolves to perfection.'
    },
    {
      id: 'what',
      title: 'What I Bring',
      position: { top: '70%', left: '50%' },
      contentPosition: 'bottom',
      text: 'I am all about blending machine learning, Artifical Intelligence, and coding to create smart tools that tackle real-world problems and actually work. No-hype, just results.'
    }
  ];
  
  return (
    <HeadAnimationContainer>
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
        <Environment preset="city" />
        
        <HeadModel mousePosition={mousePosition} />
      </Canvas>
      
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
    </HeadAnimationContainer>
  );
}
