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
const CertificateCode = styled.div`
  font-size: 0.8rem;
  color: var(--text-secondary);
`;
const CertificateDate = styled.div`
  font-size: 0.8rem;
  color: var(--text-secondary);
`;

const CertificateLink = styled.a`
  font-size: 0.8rem;
  color: var(--text-secondary);
  text-decoration: none;
  cursor: pointer;
  transition: color 0.2s ease;
  display: inline-block;
  margin-top: 0.5rem;
  
  &:hover {
    color: var(--accent);
    text-decoration: underline;
  }
`;

const CourseCard = styled(CertificateCard)`
  /* You can customize course cards differently if needed */
`;

const certificates = [
  {
    title: "Generative AI Specialization",
    issuer: "AWS - deeplearning.ai",
    date: "May 2025",
    link: "https://coursera.org/share/74498d49442c2b7118e0445676960a46"
  },
  {
    title: "Applied Prompt Engineering",
    issuer: "Udemy",
    date: "Nov 2024",
    link: "https://drive.google.com/file/d/1D0RwU-uk2gwMXuTmBBaZyDWrr1lsj1AT/view"
  }
  // {
  //   title: "AWS Certified Cloud Practitioner",
  //   issuer: "Amazon Web Services",
  //   date: "May 2023",
  //   link: "#"
  // }
];
const courses = [
  {
    title: "Natural Language Processing with Deep Learning",
    institution: "Stanford University",
    code: "CS224n",
    description: "Advanced NLP techniques including transformers, & post-training"
  },
  {
    title: "Computer Vision and Convolutional Neural Networks",
    institution: "Stanford University",
    code: "CS231n",
    description: "Image classification, object detection, and augmentation techniques"
  },
  {
    title: "Reinforcement Learning",
    institution: "Stanford University",
    code: "CS234",
    description: "Policy optimization, offline, online & deep-RL"
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
          <SectionTitle>tl;dr</SectionTitle>
          <PixelatedImage 
            src="/images/profile.jpg" 
            alt="Gaurav Bhardwaj" 
          />
          <DiffusionText
            text="Hi, I am Gaurav Bhardwaj.
            I am passionate about machine learning, artifical intelligence, computer programming, with a knack for mathematics. If you’ve just found your way here, feel free to explore my profiles across the internet."
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
            <TimelineTitle>Bachelor of Technology</TimelineTitle>
            <TimelineSubtitle>Indian Institute of Technology Dhanbad</TimelineSubtitle>
            <TimelineDate>2021 - 2025</TimelineDate>
            <TimelineContent>
              
            </TimelineContent>
          </TimelineItem>
        </Section>
        
        <Section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <SubHeading>Experience</SubHeading>
          
          <TimelineItem>
            <TimelineTitle>AI Engineer</TimelineTitle>
            <TimelineSubtitle>Outlier</TimelineSubtitle>
            <TimelineDate>Aug 2024 – Oct 2024</TimelineDate>
            <TimelineContent>
            Developed detailed annotations for 500 data points used in training AI models, identifying key areas for
            optimization that reduced output inaccuracies by 30%.
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
              <CertificateCode>{course.code}</CertificateCode>
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
              {cert.link && cert.link !== '#' ? (
                <CertificateTitle as="a" href={cert.link} target="_blank" rel="noopener noreferrer">
                  {cert.title}
                </CertificateTitle>
              ) : (
                <CertificateTitle>{cert.title}</CertificateTitle>
              )}
              <CertificateIssuer>{cert.issuer}</CertificateIssuer>
              <CertificateDate>{cert.date}</CertificateDate>
              {cert.link && cert.link !== '#' && (
                <CertificateLink href={cert.link} target="_blank" rel="noopener noreferrer">
                  View Certificate
                </CertificateLink>
              )}
            </CertificateCard>
          ))}
        </Section>
      </AboutContainer>
    </>
  );
};

export default About;
