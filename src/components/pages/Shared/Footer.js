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
                            <button className="btn btn-light m-2"><i class="bi bi-linkedin"></i><a className="text-white" rel="noopener noreferrer" href="https://github.com/obaidulnasir/ceramics-shop-server.git" target="_blank"> </a></button>
                            <button className="btn btn-light m-2"><i class="bi bi-instagram"></i><a className="text-white" rel="noopener noreferrer" href="https://github.com/obaidulnasir/ceramics-shop-server.git" target="_blank"> </a></button>
                            <button className="btn btn-light m-2"><i class="bi bi-twitter"></i><a className="text-white" rel="noopener noreferrer" href="https://github.com/obaidulnasir/ceramics-shop-server.git" target="_blank"> </a></button>
                            <button className="btn btn-light m-2"><i class="bi bi-facebook"></i><a className="text-white" rel="noopener noreferrer" href="https://github.com/obaidulnasir/ceramics-shop-server.git" target="_blank"> </a></button> 
                            </div>
                        </div>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Footer;