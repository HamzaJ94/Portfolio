import React from 'react';
import Project from '../components/Project';

const Projects = () => {
    const projects = [
        { title: 'Project 1', description: 'Description of project 1' },
        { title: 'Project 2', description: 'Description of project 2' },
        // Add more projects as needed
    ];

    return (
        <div>
            <h2>My Projects</h2>
            {projects.map((project, index) => (
                <Project key={index} {...project} />
            ))}
        </div>
    );
};

export default Projects;
