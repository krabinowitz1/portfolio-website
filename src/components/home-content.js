import React from "react"
import { Link } from "gatsby"
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import avatar from '../images/myAvatar.svg'
import contentStyles from './home-content.module.css'

const HomeContent = () => {
    return (
    <div>
        <Jumbotron fluid className={contentStyles.jumbotron}>
            <Container>
                <Row>
                    <Col xs={{order:2}}>
                        <h1>You made it!</h1>
                        <h4>
                            I'm Kevin, a software engineer based out of Orlando, Florida.
                            I love coding and finding ways to make people happy.
                        </h4>
                        <Row>
                            <style type="text/css">
                                {`
                                    .btn-outline-warning {
                                        border-color: orange;
                                        color: white;
                                        border-radius: 20px;
                                        border-width: 2px;
                                        margin: 0px 32px 0px;
                                    }   
                                `}
                            </style>
                            <Col>
                                <Button variant="outline-warning">Resume</Button>
                            </Col>
                            <Col>
                                <Link to="/project-page">
                                    <Button variant="outline-warning">
                                        Projects
                                    </Button>
                                </Link>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={{span:12, order:1}} md={{order:3}}>
                        <Row>
                            <Col>
                            </Col>
                            <Col xs="7" lg="8">
                                <Image src={avatar}></Image>
                            </Col>
                            <Col>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    </div>
    );
}

export default HomeContent