import React, {useEffect} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Avatar from '../images/Body.png'
import './aboutme.css'
import blob from '../images/blob (1).png'

import { Link } from "react-router-dom";

import Timeline from './Timeline'



function AboutMe() {

    useEffect(() => {
        
        if(!localStorage.getItem('loaded')){
            localStorage.setItem('loaded', true)
        }
    })
    
    return (
        <>
        <div className="aboutme-container">
            <Container>
            <Link to="/" style={{color: "#691FFF"}}><i className="moveToRight fas fa-arrow-left"></i></Link>
                <Row>
                   <Col xs={12} md={12}>
                    <h1>About Me</h1>
                   </Col>
                </Row>
                <br />
                <br />
                <Row>
                    <Col xs={12} md={6}>
                    <div className="avatar-container">
                    <img src={Avatar} alt="Avatar" />
                    <img src={blob} alt="blob2Image" id="blobAboutMe" />
                    </div>

                    </Col>
                    <Col xs={12} md={6}> 
                        <Row>
                            <Col xs={12} sm={12}>
                            <p>
                            I am web developer based on Caloocan City, i have experienced building different types of projects from sratch from different language. I have experiences from hardware to software, i am more comfortable building backend rather than frontend but i still love designing beautiful websites.
                    </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} sm={12}> 
                            <p>
                            These is all the list of technologies i've used in all my projects 
                            </p>
                            <ul>
                                <Row>
                                    <Col xs={6} md={6} lg={3}>
                                        <li><i className="fas fa-caret-right"></i>Javascript</li>
                                        <li><i className="fas fa-caret-right"></i>PHP</li>
                                    </Col>
                                    <Col xs={6} md={5} lg={3}>
                                        <li><i className="fas fa-caret-right"></i>React JS</li>
                                        <li><i className="fas fa-caret-right"></i>Vue JS</li>
                                    </Col >
                                    <Col xs={6} md={6} lg={3}>
                                        <li><i className="fas fa-caret-right"></i>Express JS</li>
                                        <li><i className="fas fa-caret-right"></i>Node JS</li>
                                    </Col>
                                    <Col xs={6} md={6} lg={3}>
                                        <li><i className="fas fa-caret-right"></i>MongoDB</li>
                                        <li><i className="fas fa-caret-right"></i>MySql</li>
                                    </Col>
                                </Row>
                            </ul>
                            </Col>
                        </Row>
                        <br />
                        <br />
                        <br />
                        <Row>
                            <Col>
                                <p className="emailMe">Get in touch 👉 &nbsp;<a href="mailto:jhondi.pamonag@gmail.com" >Jhondi Pamonag</a></p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                               <ul className="socialmedia-list">
                                   <li><a href="https://github.com/ednaaaj"><i className="fab fa-github"></i></a></li>
                                   <li><a href="https://www.facebook.com/Strawhat27/"><i className="fab fa-facebook"></i></a></li>
                                   <li><a href="https://www.instagram.com/ednaaaaj/"><i className="fab fa-instagram"></i></a></li>
    
                               </ul>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
        <Timeline />
     
       
        </>
    )
}

export default AboutMe
