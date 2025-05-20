import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Preloader from '../../components/Preloader/PreLoader';
import Navigation from '../../components/Navigation/Navigation';
import DiffusionText from '../../animations/textEffects';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import SkillsMatrix from '../../components/SkillsMatrix/SkillsMatrix';
import ContactForm from '../../components/ContactForm/ContactForm';

const HomeContainer = styled.div`
  min-height: 100vh;
`;

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
`;

const IntroText = styled.div`
  max-width: 800px;
  text-align: center;
`;

const Section = styled.section`
  padding: 5rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 3rem;
  position: relative;
  display: inline-block;
  
  &:after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 60%;
    height: 3px;
    background-color: var(--accent);
  }
`;

const ProjectsContainer = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: space-between;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Home = () => {
  const [loading, setLoading] = useState(true);
  
  const finishLoading = () => {
    setLoading(false);
  };
  
  const introText = "AI Engineer — Collaboration fuels my process, innovation drives my vision, and iteration ensures every detail evolves to perfection. I develop data-driven solutions, automate workflows, and extract insights from diverse data.";
  
  const projects = [
    {
      title: "Sentiment Analyzer",
      description: "Utilized BERT and NLTK to analyze 60,000+ tweets, influencing trading strategies for 25 high-profile stocks.",
      technologies: ["Python", "BERT", "NLTK", "Machine Learning"],
      link: "https://github.com/gaurav-bhardwaj29/sentiment-analyzer"
    },
    {
      title: "STEM Solver",
      description: "Developed OpenELM-450M model for STEM tasks, achieving superior accuracy with optimized training.",
      technologies: ["PyTorch", "Transformers", "Deep Learning", "NLP"],
      link: "https://github.com/gaurav-bhardwaj29/stem-solver"
    },
    {
      title: "Auto Insurance Claim Resolution",
      description: "Implemented multi-agent workflow reducing manual review time by 40%.",
      technologies: ["LangChain", "AI Agents", "Process Automation", "Python"],
      link: "https://github.com/gaurav-bhardwaj29/insurance-claim-resolver"
    }
  ];
  
  if (loading) {
    return <Preloader finishLoading={finishLoading} />;
  }
  
  return (
    <HomeContainer>
      <Navigation />
      
      <HeroSection>
        <IntroText>
          <DiffusionText text={introText} fontSize="1.5rem" delay={0.5} />
        </IntroText>
      </HeroSection>
      
      <Section as={motion.section}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <SectionTitle>Featured Projects</SectionTitle>
        <ProjectsContainer>
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              link={project.link}
              delay={index * 0.2}
            />
          ))}
        </ProjectsContainer>
      </Section>
      
      <Section as={motion.section}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <SectionTitle>Skills Matrix</SectionTitle>
        <SkillsMatrix />
      </Section>
      
      <Section as={motion.section}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <SectionTitle>Let's Connect</SectionTitle>
        <ContactForm />
      </Section>
    </HomeContainer>
  );
};

export default Home;
