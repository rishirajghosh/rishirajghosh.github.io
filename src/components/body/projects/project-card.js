import React from "react";
import "./project-card.css";
function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-info">
        <label className="project-title">{project.title}</label>
        <div className="project-links">
          {project.demo && (
            <a className="project-link" href={project.demo} target="_blank" rel="noopener noreferrer">
              <div className="link-button">
                <i style={{ color: 'white' }} class="fi-rr-globe" alt ="demo"></i><h7 style={{
                  color:
                    'white'
                }}>&nbsp;Demo</h7>
              </div>
            </a>
          )}
          {project.github && (
            <a className="project-link" href={project.github} target="_blank" rel="noopener noreferrer">
              <div className="link-button">
                <i style={{ color: 'white' }} class="devicon-github-original colored" alt="github"></i><h7 style={{
                  color:
                    'white'
                }}>&nbsp;Github</h7>
              </div>
            </a>
          )}
        </div>
        <p>{project.about}</p>
        <div className="project-tags">
          {project.tags.map((tag) => {
            return <label className="tag">{tag}</label>;
          })}
        </div>
      </div>
      <img src={project.image} className="project-photo" />
    </div >
  );
}

export default ProjectCard;