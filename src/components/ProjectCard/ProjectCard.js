import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Card = styled(motion.div)`
  background: var(--surface);
  border-radius: 8px;
  padding: 1.5rem;
  flex: 1;
  min-width: 300px;
  max-width: 380px;
  box-shadow: 0 10px 30px -15px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
  }
  @media (max-width: 768px) {
    padding: 1.2rem;
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--text-primary);
`;

const ProjectDescription = styled.p`
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const TechTag = styled.span`
  background: rgba(60, 145, 230, 0.1);
  color: var(--accent);
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  font-size: 0.8rem;
`;

const ProjectLink = styled.a`
  display: inline-block;
  margin-top: 1rem;
  color: var(--accent);
  font-size: 0.9rem;
  border: 1px solid var(--accent);
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background 0.3s ease, color 0.3s ease;
  
  &:hover {
    background: var(--accent);
    color: var(--background);
  }
`;

const ProjectCard = ({ title, description, technologies, link, delay = 0 }) => {
  return (
    <Card
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
    >
      <ProjectTitle>{title}</ProjectTitle>
      <ProjectDescription>{description}</ProjectDescription>
      <TechStack>
        {technologies.map((tech, index) => (
          <TechTag key={index}>{tech}</TechTag>
        ))}
      </TechStack>
      <ProjectLink href={link} target="_blank" rel="noopener noreferrer">
        View Project
      </ProjectLink>
    </Card>
  );
};

export default ProjectCard;
