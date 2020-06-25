import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ProjectGrid from "../components/project-grid-component"

const ProjectPage = () => {
    const projects = useStaticQuery(graphql`
        {
            allProjectsJson {
                nodes {
                    name
                    description
                }
            }
        }
    `)
    return (
    <main>
        <ProjectGrid projectList={projects.allProjectsJson.nodes}></ProjectGrid>
    </main>
    )
}

export default ProjectPage