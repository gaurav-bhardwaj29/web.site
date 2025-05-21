import React from 'react';
import styled from 'styled-components';
import { useProgress } from '@react-three/drei';

const LoaderContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--background);
  z-index: 10;
`;

const Progress = styled.div`
  width: 60%;
  height: 5px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 5px;
  margin: 20px 0;
  overflow: hidden;
`;

const ProgressBar = styled.div`
  height: 100%;
  width: ${props => props.value || 0}%;
  background: var(--accent);
  transition: width 0.3s ease;
`;

const LoadingText = styled.div`
  color: var(--accent);
  font-size: 1rem;
  letter-spacing: 2px;
`;

const ModelLoader = () => {
  const { progress } = useProgress();
  
  return (
    <LoaderContainer>
      <LoadingText>LOADING 3D MODEL</LoadingText>
      <Progress>
        <ProgressBar value={progress} />
      </Progress>
      <LoadingText>{progress.toFixed(0)}%</LoadingText>
    </LoaderContainer>
  );
};

export default ModelLoader;
