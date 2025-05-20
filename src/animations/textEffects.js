import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const StyledText = styled.div`
  font-size: ${props => props.fontSize || '1.2rem'};
  line-height: 1.6;
  max-width: 800px;
  opacity: 0;
`;

const DiffusionText = ({ text, fontSize, delay = 0 }) => {
  const textRef = useRef(null);
  
  useEffect(() => {
    const element = textRef.current;
    const splitText = text.split('');
    element.innerHTML = '';
    
    // Clear the element first
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
    
    // Create spans for each character
    splitText.forEach((char, i) => {
      const charSpan = document.createElement('span');
      charSpan.textContent = char;
      charSpan.style.opacity = '0';
      charSpan.style.display = char === ' ' ? 'inline' : 'inline-block';
      charSpan.style.transform = 'translateY(20px)';
      charSpan.style.transition = `opacity 0.8s ease ${delay + i * 0.03}s, transform 0.8s ease ${delay + i * 0.03}s`;
      element.appendChild(charSpan);
      
      // Trigger the animation after a brief delay
      setTimeout(() => {
        charSpan.style.opacity = '1';
        charSpan.style.transform = 'translateY(0)';
      }, 100);
    });
    
    // Show the container
    element.style.opacity = 1;
  }, [text, delay]);
  
  return <StyledText ref={textRef} fontSize={fontSize}></StyledText>;
};

export default DiffusionText;
