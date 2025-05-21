import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Navigation from '../../components/Navigation/Navigation';
import DiffusionText from '../../animations/textEffects';
import PixelatedImage from '../../components/PixelatedImage/PixelatedImage';

const AboutContainer = styled.div`
  min-height: 100vh;
  padding: 8rem 2rem 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 2rem;
  color: var(--accent);
`;

const Section = styled(motion.section)`
  margin-bottom: 4rem;
`;

const SubHeading = styled.h3`
  font-size: 1.3rem;
  margin: 2rem 0 1rem;
  color: var(--text-primary);
`;

const TimelineItem = styled.div`
  position: relative;
  padding-left: 2rem;
  margin-bottom: 2rem;
  
  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 8px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: var(--accent);
  }
  
  &:after {
    content: "";
    position: absolute;
    left: 4px;
    top: 25px;
    bottom: -15px;
    width: 2px;
    background: rgba(60, 145, 230, 0.3);
  }
  
  &:last-child:after {
    display: none;
  }
  @media (max-width: 768px) {
    padding-left: 1.5rem;
  }
`;

const TimelineTitle = styled.h4`
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
`;

const TimelineSubtitle = styled.h5`
  font-size: 0.9rem;
  color: var(--accent);
  margin-bottom: 0.5rem;
  font-weight: normal;
`;

const TimelineDate = styled.span`
  font-size: 0.8rem;
  color: var(--text-secondary);
`;

const TimelineContent = styled.p`
  margin-top: 0.5rem;
  font-size: 0.95rem;
  color: var(--text-secondary);
`;
const CertificateCard = styled(motion.div)`
  background: rgba(60, 145, 230, 0.05);
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px -15px rgba(0, 0, 0, 0.7);
    border: 1px solid rgba(60, 145, 230, 0.3);
  }
  @media (max-width: 768px) {
    padding: 1.2rem;
  }
`;
const CertificateTitle = styled.h4`
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  color: var(--accent);
`;
const CertificateIssuer = styled.div`
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin-bottom: 0.5rem;
`;

const CertificateDate = styled.div`
  font-size: 0.8rem;
  color: var(--text-secondary);
`;

const CourseCard = styled(CertificateCard)`
  /* You can customize course cards differently if needed */
`;

const certificates = [
  {
    title: "Deep Learning Specialization",
    issuer: "Coursera - DeepLearning.AI",
    date: "October 2023",
    link: "#"
  },
  {
    title: "Machine Learning Engineer Nanodegree",
    issuer: "Udacity",
    date: "August 2023",
    link: "#"
  },
  {
    title: "AWS Certified Machine Learning",
    issuer: "Amazon Web Services",
    date: "May 2023",
    link: "#"
  }
];
const courses = [
  {
    title: "Natural Language Processing with Deep Learning",
    institution: "Stanford University",
    date: "Spring 2024",
    description: "Advanced techniques in NLP including transformers and BERT"
  },
  {
    title: "Computer Vision and Convolutional Neural Networks",
    institution: "MIT OpenCourseWare",
    date: "Fall 2023",
    description: "Image classification, object detection, and segmentation techniques"
  },
  {
    title: "Reinforcement Learning",
    institution: "University of California, Berkeley",
    date: "Winter 2023",
    description: "Policy optimization, value-based methods, and deep reinforcement learning"
  }
];
const About = () => {
  return (
    <>
      <Navigation />
      <AboutContainer>
        <Section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle>About Me</SectionTitle>
          <PixelatedImage 
            src="/path-to-your-image.jpg" 
            alt="Gaurav Bhardwaj" 
          />
          <DiffusionText
            text="I'm Gaurav Bhardwaj, an AI Engineer passionate about developing data-driven solutions and extracting meaningful insights from diverse data sources. With a background in Electrical Engineering and a focus on AI/ML, I specialize in building intelligent systems that solve complex problems."
            fontSize="1.1rem"
            delay={0.3}
          />
        </Section>
        
        <Section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <SubHeading>Education</SubHeading>
          
          <TimelineItem>
            <TimelineTitle>B.Tech in Electrical Engineering</TimelineTitle>
            <TimelineSubtitle>IIT Dhanbad</TimelineSubtitle>
            <TimelineDate>Dec 2021 - May 2025</TimelineDate>
            <TimelineContent>
              Focused on core electrical engineering with specialization in signal processing and machine learning applications. Participated in various AI research projects and hackathons.
            </TimelineContent>
          </TimelineItem>
        </Section>
        
        <Section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <SubHeading>Professional Experience</SubHeading>
          
          <TimelineItem>
            <TimelineTitle>AI Trainer</TimelineTitle>
            <TimelineSubtitle>Outlier</TimelineSubtitle>
            <TimelineDate>Aug 2024 – Oct 2024</TimelineDate>
            <TimelineContent>
              Focused on data annotation and model optimization for natural language processing applications. Improved model accuracy by 15% through targeted training data refinement and feature engineering.
            </TimelineContent>
          </TimelineItem>
          
          {/* You can add more experiences here as your career progresses */}
        </Section>
        <Section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <SectionTitle>Courses</SectionTitle>
          {courses.map((course, index) => (
            <CourseCard 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <CertificateTitle>{course.title}</CertificateTitle>
              <CertificateIssuer>{course.institution}</CertificateIssuer>
              <CertificateDate>{course.date}</CertificateDate>
              <p>{course.description}</p>
            </CourseCard>
          ))}
        </Section>
        <Section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <SectionTitle>Certifications</SectionTitle>
          {certificates.map((cert, index) => (
            <CertificateCard 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <CertificateTitle>{cert.title}</CertificateTitle>
              <CertificateIssuer>{cert.issuer}</CertificateIssuer>
              <CertificateDate>{cert.date}</CertificateDate>
            </CertificateCard>
          ))}
        </Section>
      </AboutContainer>
    </>
  );
};

export default About;
