import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const MatrixContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2.5rem;
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1.5rem;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const SkillCategory = styled(motion.div)`
  background: rgba(60, 145, 230, 0.05);
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.05);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px -15px rgba(0, 0, 0, 0.7);
    border: 1px solid rgba(60, 145, 230, 0.3);
  }
`;

const CategoryTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  color: var(--accent);
  position: relative;
  
  &:after {
    content: "";
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 40px;
    height: 3px;
    background: var(--accent);
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 1rem;
`;

const SkillBadge = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  padding: 0.8rem;
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(60, 145, 230, 0.2);
  }
`;

const SkillName = styled.div`
  font-size: 0.9rem;
  color: var(--text-secondary);
`;

const skillsData = [
  {
    category: "Programming Languages",
    skills: ["Python", "C/C++", "Swift", "bash"]
  },
  {
    category: "AI/ML Frameworks",
    skills: ["PyTorch", "Scikit-Learn", "Keras", "LangChain", "Crew"]
  },
  {
    category: "Tools & Platforms",
    skills: ["AWS", "GCP", "Airflow", "SageMaker", "Docker"]
  },
  {
    category: "Others",
    skills: ["Kafka", "Spark", "Flink", "Terraform", "Git"]
  }
];

const SkillsMatrix = () => {
  return (
    <MatrixContainer>
      {skillsData.map((category, categoryIndex) => (
        <SkillCategory 
          key={categoryIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
        >
          <CategoryTitle>{category.category}</CategoryTitle>
          <SkillsGrid>
            {category.skills.map((skill, skillIndex) => (
              <SkillBadge 
                key={skillIndex}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                whileHover={{ y: -5 }}
              >
                <SkillName>{skill}</SkillName>
              </SkillBadge>
            ))}
          </SkillsGrid>
        </SkillCategory>
      ))}
    </MatrixContainer>
  );
};

export default SkillsMatrix;
