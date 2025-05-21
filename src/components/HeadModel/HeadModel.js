import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const HeadModel = ({ mousePosition }) => {
  const modelRef = useRef();
  const { scene } = useGLTF('/models/face.glb');
  const isMobile = window.innerWidth <= 768;
  
  // Make the head follow the mouse position
  useFrame(({ clock }) => {
    if (modelRef.current) {
        if (isMobile) {
            modelRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.3) * 0.3;
            modelRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.2) * 0.1;
        }
        else {
            const targetRotationY = Math.min(Math.max(mousePosition.x * 0.5, -0.5), 0.5);
            const targetRotationX = Math.min(Math.max(-mousePosition.y * 0.3, -0.3), 0.3);
            
            modelRef.current.rotation.y += (targetRotationY - modelRef.current.rotation.y) * 1; 
            modelRef.current.rotation.x += (targetRotationX - modelRef.current.rotation.x) * 1; 
        }
    }
  });

  return (
    <primitive 
      ref={modelRef}
      object={scene.clone()}
      scale={isMobile ? 1.8 : 2.5}  
      position={[0, isMobile ? -0.3 : -0.5, 0]} 
    />
  );
};

export default HeadModel;