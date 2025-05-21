import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;500;600&display=swap');
  
  :root {
    --background: #121212;
    --text-primary: #F5F5F5;
    --text-secondary: #AAAAAA;
    --accent: #3C91E6;
    --surface: #1E1E1E;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: 'IBM Plex Mono', monospace;
    background-color: var(--background);
    color: var(--text-primary);
    line-height: 1.6;
    overflow-x: hidden;
  }
  
  a {
    color: var(--accent);
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: var(--text-primary);
    }
  }
  .glow-text {
  transition: text-shadow 0.3s ease;
}

.glow-text:hover {
  text-shadow: 0 0 10px var(--accent), 0 0 20px var(--accent);
}
  h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
    font-weight: 500;
    line-height: 1.2;
  }

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 1.25rem;
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }

  
  .page-transition-enter {
    opacity: 0;
    transform: translateY(20px);
  }

  .page-transition-enter-active {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 500ms, transform 500ms;
  }

  .page-transition-exit {
    opacity: 1;
  }

  .page-transition-exit-active {
    opacity: 0;
    transition: opacity 300ms;
  }
  
  spline-viewer {
  width: 100%;
  height: 100%;
  display: block;
  background: transparent;
}
  .model-loading-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--background);
}
  /* Responsive Font Sizing */
  html {
    font-size: 16px;
    
    @media (max-width: 1200px) {
      font-size: 15px;
    }
    @media (max-width: 768px) {
      font-size: 14px;
    }
    @media (max-width: 480px) {
      font-size: 13px;
    }
  }
  
  /* Container Sizing */
  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    
    @media (max-width: 768px) {
      padding: 0 1.5rem;
    }
    @media (max-width: 480px) {
      padding: 0 1rem;
    }
  }
  
  /* Ensure images don't overflow */
  img {
    max-width: 100%;
    height: auto;
  }
`;

export default GlobalStyles;
