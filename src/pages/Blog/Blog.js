import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Navigation from '../../components/Navigation/Navigation';

const BlogContainer = styled.div`
  min-height: 100vh;
  padding: 8rem 2rem 2rem;
  max-width: 1000px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 3rem;
  color: var(--accent);
`;

const BlogPostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const BlogPost = styled(motion.div)`
  background: var(--surface);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 10px 30px -15px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const BlogImage = styled.div`
  height: 200px;
  background: ${props => props.color || 'rgba(60, 145, 230, 0.1)'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: var(--accent);
  
  @media (min-width: 768px) {
    width: 250px;
    height: auto;
  }
`;

const BlogContent = styled.div`
  padding: 1.5rem;
  flex: 1;
`;

const BlogDate = styled.span`
  font-size: 0.8rem;
  color: var(--text-secondary);
  margin-bottom: 0.5rem;
  display: block;
`;

const BlogTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 1rem;
  cursor: pointer;
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--accent);
  }
`;

const BlogExcerpt = styled.p`
  color: var(--text-secondary);
  font-size: 0.95rem;
`;

const ReadMoreLink = styled.a`
  display: inline-block;
  margin-top: 1rem;
  color: var(--accent);
  font-size: 0.9rem;
  cursor: pointer;
`;

const ComingSoon = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  color: var(--text-secondary);
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: var(--text-primary);
  }
  
  p {
    max-width: 600px;
    margin: 0 auto;
  }
`;

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Software Engineering",
      excerpt: "Exploring how artificial intelligence is reshaping the landscape of software development and what it means for future engineers.",
      date: "Coming Soon",
      color: "hsla(210, 70%, 30%, 0.2)"
    },
    {
      id: 2,
      title: "Building Efficient ML Pipelines",
      excerpt: "A comprehensive guide to creating scalable and maintainable machine learning pipelines for production environments.",
      date: "Coming Soon",
      color: "hsla(270, 70%, 30%, 0.2)"
    },
    {
      id: 3,
      title: "Socket Programming",
      excerpt: "A Beginner’s Guide to Building Real-Time Connections",
      date: "May 22, 2025",
      color: "hsla(330, 70%, 30%, 0.2)",
      mediumLink: "https://medium.com/@gaurav290802/socket-programming-101-cdfd343f3028"
    }
  ];

  return (
    <>
      <Navigation />
      <BlogContainer>
        <SectionTitle>Blog</SectionTitle>
        <BlogPostsContainer>
          {blogPosts.map((post, index) => (
            <BlogPost 
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <BlogImage color={post.color}>
                <i className="fas fa-newspaper"></i>
              </BlogImage>
              <BlogContent>
                <BlogDate>{post.date}</BlogDate>
                <BlogTitle>{post.title}</BlogTitle>
                <BlogExcerpt>{post.excerpt}</BlogExcerpt>
                {/* Make this a real link to Medium */}
                <ReadMoreLink 
                  href={post.mediumLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Read More →
                </ReadMoreLink>
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
      </BlogContainer>
    </>
  );
};

export default Blog;