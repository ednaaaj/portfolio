import React, {useEffect, useState} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './Hero.css'
import heroLogo from '../images/web-development@2x.png'
import blob from '../images/blob.png'
import {Screen, Link } from "react-tiger-transition";

import PreLoader from './PreLoader'



const screenStyle = {
    width: "100%",
    height: "100vh",
    backgroundColor: "red",
    overflow:"hidden"
  };

function Hero() {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        
        let timer = 0

        if(!localStorage.getItem('loaded')){
            localStorage.setItem('loaded', true)
            timer = setTimeout(() => {
                setIsLoading(false)
            },2000)
        }else{
            setIsLoading(false)
        }
        


        return () => {
            clearTimeout(timer)
        }
    }, [isLoading])

    return (
        <>
        {isLoading ? <PreLoader /> :  <Screen style={{...screenStyle}}>
        <div className="hero-section">
            <Container>
                <Row>
                    <Col xs={12} sm={12}md={12} lg={6}>
                        <h3>Hi there and welcome! I am Jhondi Pamonag</h3>
                        <h1>I love to build things in the web</h1>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={6} className="custom">
                        <img src={heroLogo} alt="hero logo" />
                        <img src={blob} alt="blobImage" id="blob" /> 
                    </Col>
                </Row>
            </Container>
            <Link to="/about"  transition='glide-left'  style={{color: "white"}}><i className="fas fa-arrow-right"></i></Link>
        </div>   
        </Screen>    
        }
        </>

    )
}

export default Hero
