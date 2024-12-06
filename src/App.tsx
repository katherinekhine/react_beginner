import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'

function App() {
  return (
    <div>
      <ul className="flex gap-5 p-4 bg-red-100">
        <Link to="/" className='hover:text-red-500'>Home</Link>
        <Link to="/about" className='hover:text-red-500'>About</Link>
        <Link to="/projects" className='hover:text-red-500'>Projects</Link>
      </ul>
      <main>
       <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
       </Routes>
      </main>
    </div>
  )
}

export default App
