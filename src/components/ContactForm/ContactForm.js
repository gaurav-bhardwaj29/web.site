import React, { useState } from 'react';
import styled from 'styled-components';
import { motion , AnimatePresence } from 'framer-motion';

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
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const ConfirmationPopup = styled(motion.div)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.9);
  border: 1px solid var(--accent);
  border-radius: 8px;
  padding: 2rem;
  max-width: 400px;
  text-align: center;
  z-index: 1000;
`;
const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 999;
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
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [formError, setFormError] = useState(null);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormError(null);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (data.success) {
        setShowConfirmation(true);
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } else {
        setFormError('There was an error sending your message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setFormError('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
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
        {formError && <p style={{ color: 'tomato' }}>{formError}</p>}
        
        <SubmitButton 
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </SubmitButton>
      </Form>
      
      <AnimatePresence>
        {showConfirmation && (
          <>
            <Overlay 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowConfirmation(false)}
            />
            <ConfirmationPopup
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
            >
              <h3>Message Sent!</h3>
              <p>Thank you for reaching out. I'll get back to you as soon as possible.</p>
              <button onClick={() => setShowConfirmation(false)}>Close</button>
            </ConfirmationPopup>
          </>
        )}
      </AnimatePresence>
    </FormContainer>
  );
};

export default ContactForm;
