import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard.jsx'
import Documentries from './components/Documentries.jsx'
import Book from './components/Book.jsx'
import ResearchPaper from './components/ResearchPaper.jsx'
import ShortFilm from './components/ShortFilm.jsx'
import Settings from './components/Settings.jsx'
import { Link } from 'react-router-dom';


function App() {

  return (
    <>
    <Router>
      <div>
        <Link to='/' > DashBoard </Link>
        <Link to='/book' > Books </Link>
        <Link to='/documentries' > Documentries </Link>
        <Link to='/short-film' > ShortFilms </Link>
        <Link to='/research-paper' > Reasearcg Papers </Link>
        <Link to='/settings' > Settings </Link>
        <Link to='/library' > Libarary </Link>
      </div>
      <Switch>
        <Route path='/' exact component={ Dashboard } />

        <Route path='/documentries' Component={ Documentries } />

        <Route path='/book' Component={ Book } />

        <Route path='/short-film' Component={ ShortFilm } />

        <Route path='/research-paper' Component={ ResearchPaper } />

        <Route path='/settings' Component={ Settings } />

        <Route path='/library' Component={ Library } />

      </Switch>
    </Router>
      
    </>
  )
}

export default App
