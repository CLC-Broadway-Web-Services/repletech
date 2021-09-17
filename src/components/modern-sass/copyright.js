import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap'
const Copyright = () => (
    <div className="saas1 copyright">
        <Container>
            <Row>
                <Col sm="6">
                    <div className="link-horizontal center-text">
                        <ul>
                            <li>
                                <Link className="copyright-text op-text" to="#">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link className="copyright-text op-text" to="#">Terms &amp; Conditions</Link>
                            </li>
                        </ul>
                    </div>
                </Col>
                <Col sm="6">
                    <div>
                        <h6 className="copyright-text text-white text-right op-text">Copyright © 2020 Unice by <i
                            aria-hidden="true" className="fa fa-heart mx-1"></i>
                            pixelstrap</h6>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
)

export default Copyright;