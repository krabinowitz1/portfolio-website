import React from "react"
import { Link } from "gatsby"
import Project from "./project-component"

const ProjectGrid = ({projectList}) => (
    <div>
        {console.log(projectList)}
        {projectList
            .map((node) => (
                <Project
                    title={node.name}
                    description={node.description}>
                    
                </Project>
            ))}
    </div>
)

export default ProjectGrid