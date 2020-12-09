import React from 'react'
import wave from '../images/wave (4).png'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import './footer.css'
function Footer() {
    return (
        <div className="footer">
            <Row>
            <p className="made">Designed and Created with 💓 by Jhondi Pamonag 👌 2020 </p>
            <img src={wave} className="wave"></img>
            </Row>  
        </div>
    )
}

export default Footer
