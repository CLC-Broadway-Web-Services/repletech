import React, { useState } from 'react'
import Nav from './nav'
import { Link } from "react-router-dom"
import { Container, Row, Col } from 'reactstrap'

const Header = props => {
    const [show, setShow] = useState(false)
    const [sidebar, setSidebar] = useState(false);
    const [search, setSearch] = useState(false);

    const clickSidebar = () => {
        setSidebar(!sidebar)
        document.querySelector('.navbar').classList.add('openSidebar')
    }

    return (
        <header className={`${props.className || 'app2'} loding-header nav-abs custom-scroll  `}>
            <Container>
                <Row>
                    <Col>
                        <nav>
                            <Link className="m-r-auto" to="/">
                                {props.className === 'agency' ?
                                    <img alt="" className="img-fluid" src="/assets/images/logo/9.png" />
                                    :
                                    props.className === 'dark' ?
                                        <img alt="" className="img-fluid" src="/assets/images/logo/5.png" />
                                        :
                                        props.className === 'dark position-relative ecommerce' ?
                                            <img alt="" className="img-fluid" src="/assets/images/logo/5.png" />
                                            :
                                            props.className === 'dark bg-white ecommerce' ?
                                                <img alt="" className="img-fluid" src="/assets/images/logo/5.png" />
                                                :
                                                props.className === 'dark agency' ?
                                                    <img alt="" className="img-fluid" src="/assets/images/logo/5.png" />
                                                    :
                                                    props.className === 'saas1' ?
                                                        <img alt="" className="img-fluid" src="/assets/images/logo/3.png" />

                                                        : <img alt="" className="img-fluid" src="/assets/images/logo/1.png" />
                                }
                            </Link>
                            <div className="responsive-btn">
                                <a className="toggle-nav" href="#" onClick={clickSidebar} >
                                    <i aria-hidden="true" className="fa fa-bars text-white"></i>
                                </a>
                            </div>
                            <Nav />
                            {props.shop &&
                                <div className="top-header-right">
                                    <ul>
                                        <li className="search" >
                                            <Link to="#" onClick={() => setSearch(!search)}>
                                                <i className="icon-search"></i>
                                            </Link>
                                            <div aria-labelledby="dropdownMenuButton" className={`dropdown-menu ${search && `show`} dropdown-menu-right`}>
                                                <form className="form-inline search-form">
                                                    <div className="form-group">
                                                        <label className="sr-only">Email</label>
                                                        <input className="form-control-plaintext" placeholder="Search...."
                                                            type="search" />
                                                        <span className="d-sm-none mobile-search"></span>
                                                    </div>
                                                </form>
                                            </div>
                                        </li>

                                        <li className="account ">
                                            <Link to="#" onClick={() => setShow(!show)}>
                                                <i className="icon-user"></i>
                                            </Link>
                                            <div className={`dropdown-menu ${show && `show`} dropdown-menu-right`}>
                                                <Link to={"/shop/auth/login"}>Login</Link>
                                                <Link to={"/shop/wishlist"}>Wishlist</Link>
                                                <Link to={"/shop/checkout"}>checkout</Link>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            }
                        </nav>
                    </Col>
                </Row>
            </Container>
        </header>
    )
}

export default Header
