import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';

const PreloaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: var(--background);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const TextContainer = styled.div`
  font-size: 3rem;
  font-weight: 600;
  overflow: hidden;
`;

const greetings = [
  "Hello", "Hola", "Bonjour", "こんにちは", "नमस्ते",
  "你好", "Ciao", "Olá", "Привет", "안녕하세요"
];

const Preloader = ({ finishLoading }) => {
  const textRef = useRef(null);
  
  useEffect(() => {
    const text = textRef.current;
    let currentIndex = 0;
    
    // Text scramble effect
    const scrambleText = () => {
      let chars = "!<>-_\\/[]{}—=+*^?#________";
      let iteration = 0;
      let finalText = greetings[currentIndex];
      let duration = finalText.length > 5 ? 20 : 30;
      
      const interval = setInterval(() => {
        text.innerText = finalText
          .split("")
          .map((letter, index) => {
            if(index < iteration) {
              return finalText[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("");
          
        if(iteration >= finalText.length) { 
          clearInterval(interval);
          
          // Move to next greeting
          setTimeout(() => {
            currentIndex = (currentIndex + 1) % greetings.length;
            if (currentIndex === 0 && iteration >= finalText.length) {
              gsap.to(text, {
                opacity: 0,
                duration: 1,
                onComplete: () => {
                  setTimeout(finishLoading, 500);
                }
              });
            } else {
              iteration = 0;
              scrambleText();
            }
          }, 800);
        }
        
        iteration += 1/3;
      }, duration);
    };
    
    // Initial animation
    gsap.fromTo(text, 
      { opacity: 0 },
      { 
        opacity: 1, 
        duration: 1,
        onComplete: scrambleText
      }
    );
    
    return () => {
      // Clean up animations
      gsap.killTweensOf(text);
    };
  }, [finishLoading]);
  
  return (
    <PreloaderContainer>
      <TextContainer ref={textRef}></TextContainer>
    </PreloaderContainer>
  );
};

export default Preloader;
