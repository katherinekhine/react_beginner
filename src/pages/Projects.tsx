import { Link } from "react-router-dom"


function Projects() {
  return (
    <div>
      <h1>Projects</h1>
      <p>This is a project page.</p>
      <Link to="/projects/id">Details</Link>
    </div>
  )
}

export default Projects
