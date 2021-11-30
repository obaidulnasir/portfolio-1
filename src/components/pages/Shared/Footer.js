import React from 'react';
import { Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className="App text-white mt-5">
            <div className="bg-dark py-4">
                <Container>
                    <Row>
                        <div className="col-md-4">
                            <h6>Design and Develop by <strong>Obaidul Nasir</strong></h6>
                        </div>
                        <div className="col-md-4">
                            <h6>Copyright @2021</h6>
                        </div>
                        <div className="col-md-4">
                            <div className="fs-5">
                                <i class="bi bi-twitter m-1"></i>
                                <i class="bi bi-facebook m-1"></i>
                                <i class="bi bi-instagram m-1"></i>
                            </div>
                        </div>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Footer;