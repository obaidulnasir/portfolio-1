import React from 'react';
import { Container } from 'react-bootstrap';
import avatar from "./avater.svg"

const About = () => {
    return (
        <div>
            <div>
                <Container className="py-5">
                    <div className="row d-flex align-items-center">
                        <div className="col-md-8">
                            <h3 className="text-right heading1">Let me introduce myself</h3>
                            <p className="text-right lead text-white w-75">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio soluta doloremque a veniam earum totam <span className="heading1"> illum quod cumque! Deserunt quaerat </span> molestias voluptates omnis accusamus unde quia veritatis, expedita sit! Laboriosam.</p>
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