import React from 'react';
import ResumeFile from '../assets/images/Resume2023.pdf'

function Resume() {
  return (
    <section id="resume">
      <h2>Resume</h2>
      <a href= {ResumeFile} download>Download Resume</a>
      <ul>
        {/* List of proficiencies */}
      </ul>
    </section>
  );
}

export default Resume;