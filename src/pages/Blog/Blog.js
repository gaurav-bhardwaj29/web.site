import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Navigation from '../../components/Navigation/Navigation';

const BlogContainer = styled.div`
  min-height: 100vh;
  padding: 8rem 2rem 2rem;
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 2rem;
  color: var(--accent);
`;

const FilterContainer = styled.div`
  margin-bottom: 2rem;
  position: relative;
`;

const FilterDropdown = styled.select`
  background: var(--surface);
  color: var(--text-primary);
  border: 1px solid var(--accent);
  border-radius: 4px;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  
  &:focus {
    outline: none;
    border-color: var(--accent);
    box-shadow: 0 0 5px rgba(60, 145, 230, 0.3);
  }
`;

const BlogPostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-height: 60vh;
  overflow-y: auto;
  padding-right: 0.5rem;
  
  /* Custom scrollbar */
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: var(--accent);
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: var(--text-primary);
  }
`;

const BlogPost = styled(motion.div)`
  background: var(--surface);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 10px 30px -15px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px -10px rgba(0, 0, 0, 0.7);
  }
`;

const BlogContent = styled.div`
  padding: 1.5rem;
`;

const BlogDate = styled.span`
  font-size: 0.8rem;
  color: var(--text-secondary);
  margin-bottom: 0.5rem;
  display: block;
`;

const BlogTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
`;

const BlogExcerpt = styled.p`
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin: 0;
  line-height: 1.4;
`;

const TopicTag = styled.span`
  display: inline-block;
  background: rgba(60, 145, 230, 0.2);
  color: var(--accent);
  padding: 0.2rem 0.5rem;
  border-radius: 12px;
  font-size: 0.7rem;
  margin-bottom: 0.5rem;
`;

const ScrollIndicator = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background: var(--accent);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;
  
  &:hover {
    background: var(--text-primary);
    transform: scale(1.1);
  }
  
  i {
    color: var(--background);
    font-size: 1.2rem;
  }
`;

const ComingSoon = styled.div`
  text-align: center;
  padding: 2rem;
  color: var(--text-secondary);
  
  h3 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    color: var(--text-primary);
  }
  
  p {
    max-width: 600px;
    margin: 0 auto;
    font-size: 0.9rem;
  }
`;

const Blog = () => {
  const [selectedTopic, setSelectedTopic] = useState('All');
  
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Software Engineering",
      excerpt: "Exploring how artificial intelligence is reshaping the landscape of software development and what it means for future engineers.",
      date: "Coming Soon",
      topic: "AI",
      mediumLink: "https://medium.com/@yourusername/future-of-ai-in-software-engineering"
    },
    {
      id: 2,
      title: "Building Efficient ML Pipelines",
      excerpt: "A comprehensive guide to creating scalable and maintainable machine learning pipelines for production environments.",
      date: "Coming Soon",
      topic: "AI",
      mediumLink: "https://medium.com/@yourusername/building-efficient-ml-pipelines"
    },
    {
      id: 3,
      title: "Socket Programming",
      excerpt: "A Beginner's Guide to Building Real-Time Connections",
      date: "May 22, 2025",
      topic: "Systems",
      mediumLink: "https://medium.com/@yourusername/socket-programming-guide"
    },
    {
      id: 4,
      title: "Distributed Systems Architecture",
      excerpt: "Understanding the fundamentals of building scalable distributed systems",
      date: "Coming Soon",
      topic: "Systems",
      mediumLink: "https://medium.com/@yourusername/distributed-systems"
    },
    {
      id: 5,
      title: "Neural Network Optimization",
      excerpt: "Advanced techniques for optimizing neural network performance",
      date: "Coming Soon",
      topic: "AI",
      mediumLink: "https://medium.com/@yourusername/neural-network-optimization"
    }
  ];

  const filteredPosts = selectedTopic === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.topic === selectedTopic);

  const handlePostClick = (mediumLink) => {
    window.open(mediumLink, '_blank', 'noopener,noreferrer');
  };

  const scrollToBottom = () => {
    const container = document.querySelector('.blog-posts-container');
    if (container) {
      container.scrollTo({
        top: container.scrollHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <Navigation />
      <BlogContainer>
        <SectionTitle>Blog</SectionTitle>
        
        <FilterContainer>
          <FilterDropdown 
            value={selectedTopic} 
            onChange={(e) => setSelectedTopic(e.target.value)}
          >
            <option value="All">All Topics</option>
            <option value="AI">AI</option>
            <option value="Systems">Systems</option>
          </FilterDropdown>
        </FilterContainer>
        
        <BlogPostsContainer className="blog-posts-container">
          {filteredPosts.map((post, index) => (
            <BlogPost 
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => handlePostClick(post.mediumLink)}
            >
              <BlogContent>
                <TopicTag>{post.topic}</TopicTag>
                <BlogDate>{post.date}</BlogDate>
                <BlogTitle>{post.title}</BlogTitle>
                <BlogExcerpt>{post.excerpt}</BlogExcerpt>
              </BlogContent>
            </BlogPost>
          ))}
        </BlogPostsContainer>
        
        <ComingSoon>
          <h3>More Content Coming Soon</h3>
          <p>
            I'm currently working on insightful articles about AI engineering, machine learning best practices, and tech industry trends.
            Check back soon for new content!
          </p>
        </ComingSoon>
        
        <ScrollIndicator onClick={scrollToBottom}>
          <i className="fas fa-arrow-down"></i>
        </ScrollIndicator>
      </BlogContainer>
    </>
  );
};

export default Blog;
