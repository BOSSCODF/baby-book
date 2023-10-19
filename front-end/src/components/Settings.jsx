import React from 'react'
import { Link } from 'react-router-dom'

const Settings = () => {
  return (
    <div>
      <Link to="/">DashBoard</Link>
      <Link to="/book">Books</Link>
      <Link to="/documentries">Documentries</Link>
      <Link to="/library">Library</Link>
      <Link to="/research-paper">Research Paper</Link>
      <Link to="/short-flim">Short Films</Link>
    </div>
  )
}

export default Settings