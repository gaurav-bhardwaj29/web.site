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
  height: 350px;
  image-rendering: pixelated;
  border-radius: 4px;
  filter: grayscale(100%);
  
  @media (max-width: 768px) {
    width: 250px;
    height: 300px;
  }
  
  @media (max-width: 480px) {
    width: 200px;
    height: 250px;
  }
`;

const PixelatedImage = ({ src, alt }) => {
  return (
    <PixelatedImageContainer>
      <Image 
        src={src} 
        alt={alt}
        initial={{ opacity: 0, filter: 'grayscale(100%) blur(10px)' }}
        animate={{ opacity: 1, filter: 'grayscale(100%) blur(0px)' }}
        transition={{ duration: 0.7 }}
      />
    </PixelatedImageContainer>
  );
};

export default PixelatedImage;
