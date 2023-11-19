import React from "react";
import SpacePhoto from '../assets/images/projectspace.png'

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
      title: "Project 2",
      imageUrl: "path_to_project_2_image.jpg",
      websiteUrl: "https://project2.com",
    },
    {
      id: 3,
      title: "Project 3",
      imageUrl: "path_to_project_3_image.jpg",
      websiteUrl: "https://project3.com",
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
