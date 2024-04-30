import React from 'react'
import TopCard from './TopCard'
import ProjectWrapper from './ProjectWrapper'
import '../../CSS/workspace_styling/dashboard.css'

const Dashboard = () => {
  return (
    <div className='workspace_dashboard'>
      <TopCard />
      <ProjectWrapper />
    </div>
  )
}

export default Dashboard
