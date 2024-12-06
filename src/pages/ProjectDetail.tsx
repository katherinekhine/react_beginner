import { useParams } from "react-router-dom"


function ProjectDetail() {
    const { id } = useParams()
  return (
    <div>
      <h1>Project Details {id}</h1>
    </div>
  )
}

export default ProjectDetail
