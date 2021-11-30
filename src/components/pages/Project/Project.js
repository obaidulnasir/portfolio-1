import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Footer from '../Shared/Footer';
import project1 from "./img/project1.png"
import project2 from "./img/project2.png"
import project3 from "./img/project3.png"

const Project = () => {
    return (
        <div className="background">
            <br /><br /><br />
            <Container className="py-5">
                <Row>
                    <Col className="text-center text-white">
                        <h3>My Recent <span className="heading1">Works</span></h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </Col>
                </Row>
            </Container>
            {/* project  */}

            <div>
                <div className="container">
                    <div className="row g-4">
                        <div className="col-4">
                            <Card className="p-3">
                                <Card.Img variant="top" src={project2} />
                                <Card.Body>
                                    <Card.Title>Ceramics Shop</Card.Title>
                                    <Card.Text>
                                      This is a ceramics home appliance shop, where customer buy their favorite product.
                                    </Card.Text>
                                    <button className="btn btn-success"><a className="nav-link" rel="noopener noreferrer" href="https://ceramics-shop.web.app" target="_blank">Live link</a></button>          

                                    <button className="btn btn-info" variant="primary">Code link</button>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-4">
                        <Card>
                                <Card.Img variant="top" src={project3} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <button className="btn btn-success" variant="primary">Go somewhere</button>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-4">
                        <Card>
                                <Card.Img variant="top" src={project1} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <button className="btn btn-success" variant="primary">Go somewhere</button>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-4">
                        <Card >
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <button className="btn btn-success" variant="primary">Go somewhere</button>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Project;