import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 100;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
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
    bottom: -5px;
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
`;

const Navigation = () => {
  return (
    <NavContainer>
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
        <IconLink href="#" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </IconLink>
        <IconLink href="#" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-book"></i>
        </IconLink>
      </SocialLinks>
      
      <NavLinks>
        <NavLink to="/about"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          More of Me
        </NavLink>
        <NavLink to="/projects"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Projects
        </NavLink>
        <NavLink to="/blog"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Blog
        </NavLink>
      </NavLinks>
    </NavContainer>
  );
};

export default Navigation;
