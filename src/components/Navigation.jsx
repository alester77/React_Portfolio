import React from 'react';

function Navigation({ setActiveSection, activeSection }) {
  return (
    <nav>
      <ul>
        <li className={activeSection === 'about' ? 'active' : ''} onClick={() => setActiveSection('about')}>About Me</li>
        <li className={activeSection === 'portfolio' ? 'active' : ''} onClick={() => setActiveSection('portfolio')}>Portfolio</li>
        <li className={activeSection === 'contact' ? 'active' : ''} onClick={() => setActiveSection('contact')}>Contact</li>
        <li className={activeSection === 'resume' ? 'active' : ''} onClick={() => setActiveSection('resume')}>Resume</li>
      </ul>
    </nav>
  );
}

export default Navigation;