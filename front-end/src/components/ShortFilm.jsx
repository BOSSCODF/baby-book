import React from 'react'
import { Link } from 'react-router-dom'

const ShortFilm = () => {
  return (
    <div>
      <Link to="/">DashBoard</Link>
      <Link to="/book">Books</Link>
      <Link to="/documentries">Documentries</Link>
      <Link to="/library">Library</Link>
      <Link to="/research-paper">Research Paper</Link>
      <Link to="/settings">Settings</Link>
    </div>
  )
}

export default ShortFilm