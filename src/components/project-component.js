import React from "react"
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import contentStyles from './project-component.module.css'

const Project = ({imageSrc, title, description}) => (
    <React.Fragment >
        <Card.Img src={imageSrc} alt="Card image" />
        <Card.ImgOverlay>
            <Row>
                <Col xs="7" >
                    <Card.Title className={contentStyles.cardTitle}>
                        {title}
                    </Card.Title>
                </Col>
                <Col  xs="6" className="d-none d-sm-block">
                    <Card.Text className={contentStyles.cardSubtitle}>
                        {description}
                    </Card.Text>
                </Col>
            </Row>
        </Card.ImgOverlay>
    </React.Fragment>
)

export default Project