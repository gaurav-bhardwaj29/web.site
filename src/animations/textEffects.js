import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const StyledText = styled(motion.div)`
  font-size: ${props => props.fontSize || '1.2rem'};
  line-height: 1.6;
  max-width: 800px;
`;

const RevealText = ({ text, fontSize, delay = 0 }) => {
  return (
    <StyledText
      fontSize={fontSize}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay }}
    >
      {text}
    </StyledText>
  );
};

export default RevealText;

