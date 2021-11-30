import React from 'react';
import { Container } from 'react-bootstrap';
import avatar from "./avater.svg"

const About = () => {
    return (
        <div>
            <div>
                <Container className="py-5">
                    <div className="row d-flex align-items-center py-5">
                        <div className="col-md-8">
                            <h3 className="text-right heading1">Let me introduce myself</h3>
                            <p className="text-right lead text-white w-75">I'm passionate about building web applications. I would be highly eager to grow up as a <span className="heading1"> full stack</span> developer.</p>
                        </div>
                        <div className="col-md-4">
                            <img src={avatar} alt="" width="70%"/>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default About;