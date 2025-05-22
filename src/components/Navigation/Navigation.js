import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';



const NavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
  height: auto;
  position: fixed;
  width: 100%;
  max-width: 100%;
  
  top: 0;
  z-index: 100;
  transition: all 0.3s ease;
  background-color: ${props => props.scrolled ? 'rgba(18, 18, 18, 0.85)' : 'transparent'};
  backdrop-filter: ${props => props.scrolled ? 'blur(8px)' : 'none'};
  box-shadow: ${props => props.scrolled ? '0 4px 20px rgba(0, 0, 0, 0.1)' : 'none'};
   @media (max-width: 768px) {
    padding: 0.8rem 1rem;
  }
`;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 0.3rem;
`;

const NameHeader = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--accent);
  text-align: center;
  margin-bottom: 0.5rem;
`;

const HomeButton = styled(Link)`
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--accent);
  text-decoration: none;
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--text-primary);
  }
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const LogoLink = styled(Link)`
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--accent);
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    color: var(--text-primary);
    transform: scale(1.05);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  position: relative;
  top: -15px;
  @media (max-width: 768px) {
    gap: 1rem;
  }
  
  @media (max-width: 480px) {
    gap: 0.8rem;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  @media (max-width: 768px) {
    gap: 1.5rem;
  }
  
  @media (max-width: 480px) {
    gap: 1rem;
  }
`;

const IconLink = styled.a`
  color: var(--text-secondary);
  font-size: 1.2rem;
  transition: color 0.3s ease, transform 0.3s ease;
  
  &:hover {
    color: var(--text-primary);
    transform: translateY(-3px);
  }
`;

const NavLink = styled(motion(Link))`
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 1rem;
  position: relative;
  
  &:after {
    content: "";
    position: absolute;
    bottom: -15px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--accent);
    transition: width 0.3s ease;
  }
  
  &:hover {
    color: var(--text-primary);
    
    &:after {
      width: 100%;
    }
  }
  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);
  
  return (
    <NavContainer scrolled={scrolled}>
      <TopRow>
        <HomeButton to="/">Home</HomeButton>
        <NavLinks>
          <NavLink to="/about">More of Me</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/blog">Blog</NavLink>
        </NavLinks>
      </TopRow>
      
      <SocialLinks>
        <IconLink href="https://github.com/gaurav-bhardwaj29" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </IconLink>
        <IconLink href="https://linkedin.com/in/gauravbhardwaj29" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </IconLink>
        <IconLink href="https://kaggle.com/gauravbhradwaj" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-kaggle"></i>
        </IconLink>
        <IconLink href="https://x.com/bardgaurav" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </IconLink>
        <IconLink href="#" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-book"></i>
        </IconLink>
      </SocialLinks>
    </NavContainer>
  );
};

export default Navigation;
