import { Link } from "react-router-dom"


function Navbar() {
  return (
    <>
        <ul className="flex gap-5 p-4 bg-red-100">
            <Link to="/" className='hover:text-red-500'>Home</Link>
            <Link to="/about" className='hover:text-red-500'>About</Link>
            <Link to="/projects" className='hover:text-red-500'>Projects</Link>
        </ul>
    </>
  )
}

export default Navbar
