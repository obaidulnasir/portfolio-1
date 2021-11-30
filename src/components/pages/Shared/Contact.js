import React from 'react';
import emailjs from 'emailjs-com';
import { Form } from 'react-bootstrap';

const Contact = () => {
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_llriir8', 'template_5wk24wf', e.target, 'user_TXjJgpzMmwFdPx3UcAxQc')
            .then((result) => {
                console.log(result.text);
                alert("Message Success!!")
                e.target.reset()
            }, (error) => {
                console.log(error.text);
                alert("OPS!! please try again")
            });


    };
    return (
        <div>
            <div className="container">
                <div className="row w-50 mx-auto">
                    <div className="col">
                        <Form onSubmit={sendEmail}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Name</Form.Label>
                                <Form.Control required  type="text" name="name" placeholder="Your name." />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Subject</Form.Label>
                                <Form.Control required  type="text" name="subject" placeholder="subject" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control required  name="email" type="email" placeholder="name@example.com" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Message</Form.Label>
                                <Form.Control required  name="message" as="textarea" rows={3} />
                            </Form.Group>
                            <button >
                                <input className="btn" type="submit" value="SEND" /><i class="bi bi-send fs-5"></i>
                            </button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;