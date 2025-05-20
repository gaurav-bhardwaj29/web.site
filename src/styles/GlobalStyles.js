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
`;

export default GlobalStyles;
