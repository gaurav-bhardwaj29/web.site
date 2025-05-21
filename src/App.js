import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import GlobalStyles from './styles/GlobalStyles';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Blog from './pages/Blog/Blog';


// App wrapper component to access useLocation hook
function AppWithTransitions() {
  const location = useLocation();
  const nodeRef = React.useRef(null);
  
  return (
    <>
      <GlobalStyles />
      <div ref={nodeRef}>
      <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
    </>
  );
}

// Main App component
function App() {
  return (
    <Router>
      <AppWithTransitions />
    </Router>
  );
}

export default App;
