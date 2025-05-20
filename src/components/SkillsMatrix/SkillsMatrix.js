import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const MatrixContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
`;

const SkillCategory = styled.div`
  margin-bottom: 2rem;
`;

const CategoryTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: var(--accent);
`;

const SkillItem = styled(motion.div)`
  margin-bottom: 1rem;
`;

const SkillName = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  
  span {
    font-size: 0.9rem;
    color: var(--text-secondary);
  }
`;

const ProgressBar = styled.div`
  height: 6px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  overflow: hidden;
`;

const Progress = styled(motion.div)`
  height: 100%;
  background: var(--accent);
  border-radius: 3px;
`;

const skillsData = [
  {
    category: "Programming Languages",
    skills: [
      { name: "Python", level: 95 },
      { name: "C++", level: 80 },
      { name: "Swift", level: 70 },
      { name: "Bash", level: 75 }
    ]
  },
  {
    category: "AI/ML Frameworks",
    skills: [
      { name: "PyTorch", level: 90 },
      { name: "Scikit-Learn", level: 85 },
      { name: "LangChain", level: 80 },
      { name: "TensorFlow", level: 75 }
    ]
  },
  {
    category: "Tools & Platforms",
    skills: [
      { name: "AWS", level: 85 },
      { name: "GCP", level: 80 },
      { name: "Docker", level: 90 },
      { name: "Airflow", level: 75 },
      { name: "MongoDB", level: 70 }
    ]
  },
  {
    category: "Others",
    skills: [
      { name: "Terraform", level: 75 },
      { name: "Tableau", level: 70 },
      { name: "Git", level: 90 },
      { name: "Agile Methodologies", level: 85 }
    ]
  }
];

const SkillsMatrix = () => {
  return (
    <MatrixContainer>
      {skillsData.map((category, categoryIndex) => (
        <SkillCategory key={categoryIndex}>
          <CategoryTitle>{category.category}</CategoryTitle>
          {category.skills.map((skill, skillIndex) => (
            <SkillItem 
              key={skillIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
            >
              <SkillName>
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </SkillName>
              <ProgressBar>
                <Progress 
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.3 }}
                />
              </ProgressBar>
            </SkillItem>
          ))}
        </SkillCategory>
      ))}
    </MatrixContainer>
  );
};

export default SkillsMatrix;
