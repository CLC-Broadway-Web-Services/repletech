import React from 'react';
import { Link } from 'react-router-dom';
import {Container,Row,Col} from 'reactstrap'
const Footer = () => (
    <footer className="saas1 footer2">
        <Container>
            <Row>
                <Col md="3">
                    <div className="logo-sec">
                        <div className="footer-title mobile-title">
                            <h3 className="text-white">About Us</h3>
                        </div>
                        <div className="footer-contant">
                            <img alt="" className="img-fluid footer-logo" src="/assets/images/logo/3.png" />
                            <div className="footer-para">
                                <h6 className="text-white para-address">Sassy</h6>
                                <h6 className="text-white para-address">324 Madison Street New york </h6>
                                <h6 className="text-white para-address">City,NY 10001.</h6>
                            </div>
                            <ul className="d-d-flex footer-social social">
                                <li className="footer-social-list">
                                    <Link to="#"><i aria-hidden="true" className="fa fa-facebook"></i></Link>
                                </li>
                                <li className="footer-social-list">
                                    <Link to="#"><i aria-hidden="true" className="fa fa-twitter"></i></Link>
                                </li>
                                <li className="footer-social-list">
                                    <Link to="#"><i aria-hidden="true" className="fa fa-google"></i></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Col>
                <Col md="3">
                    <div className="footer-title mobile-title">
                        <h3 className="text-white">services</h3>
                    </div>
                    <div className="footer-contant">
                        <h5 className="footer-headings">services</h5>
                        <div>
                            <ul className="footer-lists">
                                <li><Link to="#">Portfolio Website</Link></li>
                                <li><Link to="#">Set up an account</Link></li>
                                <li><Link to="#">Invoice Creation</Link></li>
                                <li><Link to="#">Get Our Specials</Link></li>
                            </ul>
                        </div>
                    </div>
                </Col>
                <Col md="3">
                    <div className="footer-title mobile-title">
                        <h3 className="text-white">brand</h3>
                    </div>
                    <div className="footer-contant">
                        <h5 className="footer-headings">brand</h5>
                        <div>
                            <ul className="footer-lists">
                                <li><Link to="#">Chat24</Link></li>
                                <li><Link to="#">Zoom</Link></li>
                                <li><Link to="#">Alpha Payment</Link></li>
                                <li><Link to="#">Upwork</Link></li>
                            </ul>
                        </div>
                    </div>
                </Col>
                <Col md="3">
                    <div className="footer-title mobile-title">
                        <h3 className="text-white">Support</h3>
                    </div>
                    <div className="footer-contant">
                        <h5 className="footer-headings">Support</h5>
                        <div>
                            <ul className="footer-lists">
                                <li><Link to="#">For Freelancers</Link></li>
                                <li><Link to="#">For Companies</Link></li>
                                <li><Link to="#">For Business</Link></li>
                                <li><Link to="#">General Help</Link></li>
                            </ul>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </footer>
)

export default Footer;