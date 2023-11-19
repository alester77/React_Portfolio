import React from "react";
import SpacePhoto from '../assets/images/projectspace.png'
import HyperDrive from '../assets/images/hyperdrive.png'
import CodeQuiz from '../assets/images/codequiz.png'
import EmployeeTracker from '../assets/images/employeeTracker.png'
import NoteTaker from '../assets/images/noteTaker.png'
import TextEditor from '../assets/images/textEdit.png'

function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Project Space",
      imageUrl: SpacePhoto,
      websiteUrl: "https://kalanij94.github.io/Project-Mars/",
    },
    {
      id: 2,
      title: "Project Hyperdrive",
      imageUrl: HyperDrive,
      websiteUrl: "https://github.com/kalaniJ94/Project_Hyperdrive",
    },
    {
      id: 3,
      title: "Code Quiz",
      imageUrl: CodeQuiz,
      websiteUrl: "https://alester77.github.io/Code-Quiz/",
    },
    {
      id: 4,
      title: "Employee Tracker CLI",
      imageUrl: EmployeeTracker,
      websiteUrl: "https://github.com/alester77/Employee-Tracker",
    },
    {
      id: 5,
      title: "Note Taker App",
      imageUrl: NoteTaker,
      websiteUrl: "https://github.com/alester77/Note-Taker",
    },
    {
      id: 6,
      title: "Text Editor",
      imageUrl: TextEditor,
      websiteUrl: "https://github.com/alester77/Text-edit",
    },
  ];
  return (
    <section id="portfolio">
      <h2>My Projects</h2>
      <div className="project-list">
        {projects.map((project) => (
          <div key={project.id} className="project">
            <a
              href={project.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={project.imageUrl} alt={project.title} />
              <p>{project.title}</p>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
