import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const FormContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  color: var(--text-secondary);
`;

const Input = styled.input`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  padding: 0.8rem;
  color: var(--text-primary);
  font-family: 'IBM Plex Mono', monospace;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: var(--accent);
  }
  @media (max-width: 480px) {
    padding: 0.6rem;
    font-size: 0.9rem;
  }
`;

const TextArea = styled.textarea`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  padding: 0.8rem;
  color: var(--text-primary);
  font-family: 'IBM Plex Mono', monospace;
  resize: vertical;
  min-height: 150px;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: var(--accent);
  }
  @media (max-width: 480px) {
    padding: 0.6rem;
    font-size: 0.9rem;
    min-height: 120px;
  }
`;

const SubmitButton = styled(motion.button)`
  background: transparent;
  border: 1px solid var(--accent);
  color: var(--accent);
  padding: 1rem 2rem;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 1rem;
  cursor: pointer;
  align-self: flex-start;
  margin-top: 1rem;
  transition: background 0.3s ease, color 0.3s ease;
  
  &:hover {
    background: var(--accent);
    color: var(--background);
  }
`;

const SuccessMessage = styled(motion.div)`
  color: #4BB543;
  margin-top: 1rem;
  padding: 1rem;
  border: 1px solid #4BB543;
  border-radius: 4px;
`;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (data.success) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        
        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <Label htmlFor="name">Name</Label>
          <Input 
            type="text" 
            id="name" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
        </InputGroup>
        
        <InputGroup>
          <Label htmlFor="email">Email</Label>
          <Input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </InputGroup>
        
        <InputGroup>
          <Label htmlFor="message">Message</Label>
          <TextArea 
            id="message" 
            name="message" 
            value={formData.message} 
            onChange={handleChange} 
            required 
          />
        </InputGroup>
        
        <SubmitButton 
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send Message
        </SubmitButton>
      </Form>
      
      {submitted && (
        <SuccessMessage
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
        >
          Thank you for your message! I'll get back to you soon.
        </SuccessMessage>
      )}
    </FormContainer>
  );
};

export default ContactForm;
