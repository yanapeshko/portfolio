import React from "react";
import { Description } from "./Description";

export const Projects = ({ projects }) => {
  return (
    <section className="projects-experience section" id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="experience__container bd-grid">
        {projects.map((project) => (
          <Project key={project.url} {...project} />
        ))}
      </div>
    </section>
  );
};

const Project = ({ name, company, period, description, url }) => {
  return (
    <div className="experience__content">
      <div className="experience__time">
        <span className="experience__rounder"></span>
        <span className="experience__line"></span>
      </div>
      <div className="experience__data bd-grid">
        <h3 className="experience__title">
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="project__link"
          >
            {name} - {company}
          </a>
        </h3>
        <span className="experience__project">{period}</span>
        {description.map((desc, i) => (
          <Description key={i} desc={desc} />
        ))}
      </div>
    </div>
  );
};
