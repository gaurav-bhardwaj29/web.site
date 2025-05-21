import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const PixelatedImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
`;

const Image = styled(motion.img)`
  width: 300px;
  height: 300px;
  image-rendering: pixelated;
  border-radius: 4px;
  filter: grayscale(100%);
  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
  }
  
  @media (max-width: 480px) {
    width: 200px;
    height: 200px;
  }
`;

const PixelatedImage = ({ src, alt }) => {
  return (
    <PixelatedImageContainer>
      <Image 
        src={src} 
        alt={alt}
        initial={{ filter: 'blur(10px) grayscale(100%)' }}
        animate={{ filter: 'blur(0px) grayscale(100%)' }}
        transition={{ duration: 1, delay: 0.5 }}
      />
    </PixelatedImageContainer>
  );
};

export default PixelatedImage;
