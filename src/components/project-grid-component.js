import React from "react"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Project from "./project-component"

const ProjectGrid = ({imageList, projectList}) => (
    <Row style={{margin:'32px 16px 16px'}}>
        {console.log(projectList)}
        {projectList
            .map((node) => {
                const imageForProject = imageList.find(
                    element => element.fixed.originalName === node.image.src
                )

                return (
                    <Col xs="12" md={{span:8, offset:2}} lg={{span:6, offset:0}}>
                    <Project 
                        imageSrc={imageForProject.fixed.src}
                        title={node.name}
                        description={node.description}>
                    </Project>
                    </Col>
                )
            })}
    </Row>
)

export default ProjectGrid