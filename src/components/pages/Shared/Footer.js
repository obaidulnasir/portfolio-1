import React from 'react';
import { Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className="App text-white mt-5">
            <div className="bg-dark py-4">
                <Container>
                    <Row>
                        <div className="col-md-4 col-sm-12">
                            <h6>Design and Develop by <strong>Obaidul Nasir</strong></h6>
                        </div>
                        <div className="col-md-4 col-sm-12">
                            <h6>Copyright @2021</h6>
                        </div>
                        <div className="col-md-4">
                            <div className="fs-5">
                            <button className="btn btn-dark text-white m-2 fs-5"><a rel="noopener noreferrer" href="https://www.linkedin.com/in/obaidulnasir/" target="_blank"> <i class="bi bi-linkedin"></i></a></button>
                            <button className="btn btn-dark text-white m-2 fs-5"><a rel="noopener noreferrer" href="https://github.com/obaidulnasir" target="_blank"> <i class="bi bi-github"></i></a></button>
                            <button className="btn btn-dark text-white m-2 fs-5"><a rel="noopener noreferrer" href="https://instagram.com/obaidulnasir" target="_blank"> <i class="bi bi-instagram"></i></a></button>
                            <button className="btn btn-dark text-white m-2 fs-5"><a rel="noopener noreferrer" href="https://twitter.com/obaidulnasir" target="_blank"> <i class="bi bi-twitter"></i></a></button>
                            </div>
                        </div>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Footer;