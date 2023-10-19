import React from 'react'
import { Link } from 'react-router-dom'

const Book = () => {
  return (
    <div>
      <Link to="/">DashBoard</Link>
      <Link to="/documentries">Documentries</Link>
      <Link to="/library">Library</Link>
      <Link to="/research-paper">Research Paper</Link>
      <Link to="/short-flim">Short Films</Link>
      <Link to="/settings">Settings</Link>
    </div>
  )
}

export default Book