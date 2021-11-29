import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './Banner.css'
import img from "./developer-img.svg"

const Banner = () => {
    return (
        <div className="App">
           <Container className="py-5">
               <Row className="d-flex align-items-center">
                   <div className="col-md-6">
                       <h3 className="text-white">Hi Their!</h3>
                       <h2 className="text-white">I'm <span className="heading1">Obaidul Nasir</span></h2>
                       <h4 className="heading1">Fronted Web Developer</h4>
                   </div>
                   <div className="col-md-6 p-3">
                        <img src={img} alt="img" width="70%"/>
                   </div>
               </Row>
               
           </Container>
        </div>
    );
};

export default Banner;