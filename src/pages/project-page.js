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
                    image {
                        src
                    }
                }
            }

            allImageSharp {
                nodes {
                    fixed {
                        src
                        originalName
                    }
                }
            }
        }
    `)
    return (
    <main>
        
        <ProjectGrid imageList={projects.allImageSharp.nodes} projectList={projects.allProjectsJson.nodes}></ProjectGrid>
    </main>
    )
}

export default ProjectPage