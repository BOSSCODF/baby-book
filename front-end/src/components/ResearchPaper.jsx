import React from 'react'
import { Link } from 'react-router-dom'

const ResearchPaper = () => {
  return (
    <div>
      <Link to="/">DashBoard</Link>
      <Link to="/book">Books</Link>
      <Link to="/documentries">Documentries</Link>
      <Link to="/library">Library</Link>
      <Link to="/short-flim">Short Films</Link>
      <Link to="/settings">Settings</Link>
    </div>
  )
}

export default ResearchPaper