import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Navigation from '../../components/Navigation/Navigation';

const ProjectsContainer = styled.div`
  min-height: 100vh;
  padding: 8rem 2rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 3rem;
  color: var(--accent);
`;

const FiltersContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`;

const FilterButton = styled.button`
  background: ${props => props.active ? 'var(--accent)' : 'transparent'};
  color: ${props => props.active ? 'var(--background)' : 'var(--text-secondary)'};
  border: 1px solid var(--accent);
  padding: 0.5rem 1rem;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.active ? 'var(--accent)' : 'rgba(60, 145, 230, 0.1)'};
    color: ${props => props.active ? 'var(--background)' : 'var(--accent)'};
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const ProjectCard = styled(motion.div)`
  background: var(--surface);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 10px 30px -15px rgba(0, 0, 0, 0.5);
`;

const ProjectImage = styled.div`
  height: 200px;
  background: ${props => props.color || 'rgba(60, 145, 230, 0.1)'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: var(--accent);
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 1rem;
`;

const ProjectDescription = styled.p`
  color: var(--text-secondary);
  font-size: 0.95rem;
  margin-bottom: 1.5rem;
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

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectLink = styled.a`
  color: var(--text-secondary);
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--accent);
  }
`;

const projects = [
  {
    id: 1,
    title: "Sentiment Analyzer",
    description: "Utilized BERT and NLTK to analyze 60,000+ tweets, influencing trading strategies for 25 high-profile stocks.",
    technologies: ["Python", "BERT", "NLTK", "Machine Learning", "Data Analysis"],
    githubLink: "https://github.com/gaurav-bhardwaj29/sentzr",
    liveLink: "#",
    category: "AI/ML"
  },
  {
    id: 2,
    title: "STEM Solver",
    description: "Developed OpenELM-450M model for STEM tasks, achieving superior accuracy with optimized training.",
    technologies: ["PyTorch", "Transformers", "Deep Learning", "NLP"],
    githubLink: "https://github.com/gaurav-bhardwaj29/stem-solver",
    liveLink: "#",
    category: "AI/ML"
  },
  {
    id: 3,
      title: "Unslop",
      description: "Cold email automation agent",
      technologies: ["OpenAi", "Selenium", "MCP"],
      link: "https://github.com/gaurav-bhardwaj29/unslop",

    liveLink: "#",
    category: "AI/ML"
  },
  // {
  //   id: 4,
  //   title: "Data Visualization Dashboard",
  //   description: "Interactive dashboard for analyzing customer behavior patterns across multiple channels.",
  //   technologies: ["Tableau", "SQL", "Data Analysis", "BI"],
  //   githubLink: "#",
  //   liveLink: "#",
  //   category: "Data"
  // },
  {
    id: 4,
    title: "Automated ML Pipeline",
    description: "End-to-end ML pipeline for continuous model training, evaluation, and deployment.",
    technologies: ["Airflow", "Docker", "AWS", "Python", "MLOps"],
    githubLink: "#",
    liveLink: "#",
    category: "Automation"
  },
  {
    id: 5,
    title: "Gitpuller",
    description: "A web dashboard that provides live GitHub repository statistics, charts, and data export features for any public or private repository.",
    technologies: ["Flask", "Docker", "GCP"],
    githubLink: "https://github.com/gaurav-bhardwaj29/gitpuller",
    liveLink: "https://github-stats-dashboard-165889667051.asia-south1.run.app",
    category: "Automation"
  },
  {
    id: 6,
    title: "Shell-by",
    description: "A POSIX-compliant shell",
    technologies: ["C"],
    githubLink: "https://github.com/gaurav-bhardwaj29/shell-by",
    liveLink: "#",
    category: "Low-level"
  },
  {
    id: 7,
    title: "Hellasort",
    description: "Sorting Dominos",
    technologies: ["TypeScript"],
    githubLink: "https://github.com/gaurav-bhardwaj29/hellasort",
    liveLink: "https://hellasort.netlify.app",
    category: "Low-level"
  }
];

const categories = ["All", "AI/ML", "Automation", "Data", "Low-level"];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  
  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);
  
  return (
    <>
      <Navigation />
      <ProjectsContainer>
        <SectionTitle>My Projects</SectionTitle>
        
        <FiltersContainer>
          {categories.map((category, index) => (
            <FilterButton 
              key={index}
              active={activeFilter === category}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </FilterButton>
          ))}
        </FiltersContainer>
        
        <ProjectsGrid>
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectImage color={`hsla(${index * 30}, 70%, 30%, 0.2)`}>
                <i className="fas fa-code"></i>
              </ProjectImage>
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <TechStack>
                  {project.technologies.map((tech, techIndex) => (
                    <TechTag key={techIndex}>{tech}</TechTag>
                  ))}
                </TechStack>
                <ProjectLinks>
                  <ProjectLink href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i> GitHub
                  </ProjectLink>
                  <ProjectLink href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-external-link-alt"></i> Live Demo
                  </ProjectLink>
                </ProjectLinks>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </ProjectsContainer>
    </>
  );
};

export default Projects;
