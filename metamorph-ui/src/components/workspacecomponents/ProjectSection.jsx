import React, { useState, useEffect } from 'react';
import Project from './Project';
import { getProjectsByUser } from '../../services/MetadataService';
import { setProjectNumberCount } from '../../services/FrontEndCodeService';
import { useContext } from 'react';
import { AppContext } from '../../App';

const ProjectSection = () => {

  const {projectNameContext} = useContext(AppContext);


  const [projects, setProjects] = useState([]);
  const [projectName, setProjectName] = useState("");

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projectsData = await getProjectsByUser();
        // console.log(projectsData);
        setProjects(projectsData);
        setProjectNumberCount(projectsData.length); 
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, [projects]);

  const handleProjectSelect = (projectName) => {
    setProjectName(projectName);
    console.log(projectName)
    console.log(projectNameContext);
  };



  return (
    <div className="projects_section">
      {projects.map((project) => (
        <Project
        key={project.id}
        project={project}
        onSelect={handleProjectSelect}
        projectName={project.projectName}
        
        />
      ))}
    </div>
  );
};

export default ProjectSection;