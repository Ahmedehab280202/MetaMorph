import React from 'react';
import MiddleContent from './MiddleContent';
import ProjectSection from './ProjectSection';
import '../../CSS/workspace_styling/projectwrapper.css';

const ProjectWrapper = () => {
  return (
    <div className='project_wrapper'>
      <MiddleContent />
      <ProjectSection />
    </div>
  )
}

export default ProjectWrapper
