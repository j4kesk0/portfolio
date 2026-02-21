import React from 'react';
import { ProjectCard } from './ProjectCard';

const Projects = () => {
    const projectData = [
        {
            title: 'Project 1',
            description: 'Description of Project 1',
            imagePath: '/portfolio/show.jpg',
        },
        // ... other projects
    ];

    return (
        <div>
            <h2>My Projects</h2>
            <div className="project-list">
                {projectData.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        description={project.description}
                        imagePath={project.imagePath}
                    />
                ))}
            </div>
        </div>
    );
};

export default Projects;
