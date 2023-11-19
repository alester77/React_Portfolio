import React from 'react';
import Navigation from './Navigation';

function Header({ setActiveSection, activeSection }) {
  return (
    <header>
      <h1 className="developerName">Alexa Lester</h1>
      <Navigation setActiveSection={setActiveSection} activeSection={activeSection} />
    </header>
  );
}

export default Header;