import React from 'react';
import greyRockImage from '../assets/images/greyrocksmall.jpg';

function AboutMe() {
  return (
    <section id="about">
      <img className="greyRock" src={greyRockImage} alt="Selfie in the outdoors" />
      <h2>About Me</h2>
      <p>I'm a graduate from Denver University and I'm looking to showcase my skills as a Full Stack Developer. I'm looking for opportunities to grow my skills and my knowledge base.</p>
    </section>
  );
}

export default AboutMe;