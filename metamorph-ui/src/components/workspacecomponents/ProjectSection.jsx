import React from 'react';
import { useState,useEffect } from 'react';
import Project from './Project';
import { getProjectsByUser } from '../../services/MetadataService';
import '../../CSS/workspace_styling/projectsection.css';

const ProjectSection = () => {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projectsData = await getProjectsByUser();
        setProjects(projectsData);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className='projects_section'>
      {projects.map(project => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  )
}

export default ProjectSection
