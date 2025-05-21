import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Preloader from '../../components/Preloader/PreLoader';
import Navigation from '../../components/Navigation/Navigation';
import RevealText from '../../animations/textEffects';
import InteractiveScene from '../../components/HeadModel/InteractiveScene';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import SkillsMatrix from '../../components/SkillsMatrix/SkillsMatrix';
import ContactForm from '../../components/ContactForm/ContactForm';

const HomeContainer = styled.div`
  min-height: 100vh;
`;

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 2rem;
`;
const NameHeader = styled.h1`
  font-size: 2.5rem;
  font-weight: 600;
  color: var(--text-primary);
  text-align: center;
  margin-bottom: 2rem;
  padding-top: 6rem;
  position: relative;
  z-index: 5;
`;
const IntroText = styled.div`
  max-width: 800px;
  text-align: center;
  margin: 0 auto 2rem;
  padding-top: 5rem;
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
const ResumeSection = styled(motion.section)`
  text-align: center;
  padding: 4rem 0;
  margin: 2rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
`;

const ResumeButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: transparent;
  color: var(--accent);
  border: 1px solid var(--accent);
  padding: 1rem 2rem;
  font-size: 1rem;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    background: var(--accent);
    color: var(--background);
  }
`;






const Home = () => {
  const [loading, setLoading] = useState(true);
  const isFirstVisit = !sessionStorage.getItem('visited');
  const finishLoading = () => {
    setLoading(false);
  };
  useEffect(() => {
    if (isFirstVisit) {
      sessionStorage.setItem('visited', 'true');
    } else {
      // Skip preloader if not first visit
      setLoading(false);
    }
  }, [isFirstVisit]);
  
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
  
  if (loading && isFirstVisit) {
    return <Preloader finishLoading={finishLoading} />;
  }
  
  return (
    <HomeContainer>
      <Navigation />
      
      <HeroSection>
      <NameHeader>Gaurav Bhardwaj</NameHeader>
        <InteractiveScene />
      </HeroSection>
      
      <Section as={motion.section}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <SectionTitle>My Work</SectionTitle>
        <ProjectsContainer>
        {projects.slice(0, 3).map((project, index) => (
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
      
      <ResumeSection
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <ResumeButton 
          href="/resume.pdf" 
          target="_blank"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
    <i className="fas fa-file-alt"></i> View My Resume
  </ResumeButton>
</ResumeSection>
      
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