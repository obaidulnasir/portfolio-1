import React from 'react';
import { Container } from 'react-bootstrap';
import Contact from '../../Shared/Contact';
import contactsvg from "./contact.svg"

const ContactMe = () => {
    return (
        <div className="">
            <Container>
                <div>
                    <h2 className="text-center heading1 my-5">Contact</h2>
                </div>

                <div className="row d-flex align-items-center my-5">
                    <div className="col-md-4 col-sm-12">
                        <img src={contactsvg} width="90%" alt="" />
                    </div>
                    <div className="col-md-8 col-sm-12 heading1">
                        <Contact></Contact>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default ContactMe;