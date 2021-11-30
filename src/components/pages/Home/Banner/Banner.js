import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './Banner.css'
import img from "./developer-img.svg"

const Banner = () => {
    return (
        <div className="App banner">
           <Container className="py-5">
               <Row className="d-flex align-items-center">
                   <div className="col-md-6 col-sm-12">
                       <h3 className="text-white fs-3">Hi Their!</h3>
                       <h2 className="text-white fs-1">I'm <span className="heading1">Obaidul Nasir</span></h2>
                       <h4 className="heading1 fs-4">Fronted Web Developer</h4>
                   </div>
                   <div className="col-md-6 col-sm-12">
                        <img src={img} alt="img" width="70%"/>
                   </div>
               </Row>
               
           </Container>
        </div>
    );
};

export default Banner;