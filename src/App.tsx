import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Navbar from './components/Navbar'

function App() {
  return (
    <div>
       <Routes>
        <Route path='/' element={<Navbar />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
        </Route>
       </Routes>
    </div>
  )
}

export default App
