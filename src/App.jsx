import React from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import './App.css'; // Global styles

function App() {
  return (
    <div>
      <Header />
      <main>
        <AboutMe />
        <Portfolio />
        <Contact />
        <Resume />
      </main>
      <Footer />
    </div>
  );
}

export default App;
