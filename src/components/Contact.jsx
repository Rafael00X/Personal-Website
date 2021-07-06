import React from "react";
import { Row, Col } from "reactstrap";

function Contact() {
    return (
        <section id="contacts">
            <div className="display">
            <Row>
                <Col xs="3" className="contact-item">
                    <a href="https://www.linkedin.com/in/subhadeep-chakraborty-77a07a1a9/" target="_blank"><i className="fab fa-linkedin fa-icon"></i></a>
                </Col>
                <Col xs="3" className="contact-item">
                <a href="https://www.facebook.com/subhadeep.chakraborty.37669/" target="_blank"><i class="fab fa-facebook-square fa-icon"></i></a>
                </Col>
                <Col xs="3" className="contact-item">
                <a href="https://www.instagram.com/rafael00x/" target="_blank"><i class="fab fa-instagram-square fa-icon"></i></a>
                </Col>
                <Col xs="3" className="contact-item">
                <a href="https://twitter.com/Subhade47396402" target="_blank"><i class="fab fa-twitter-square fa-icon"></i></a>
                </Col>
            </Row>
            <hr/>
            <div className="contact-item">
            <a href="mailto:subhadeep.chakraborty044@gmail.com"><i class="fas fa-envelope fa-icon"></i><br/>subhadeep.chakraborty044@gmail.com</a>
            </div>            
            </div>
        </section>
    );
}

export default Contact;