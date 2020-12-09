import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import LanguageTag from './LanguageTag'



function ProjectCard({title,description,languages}) {
    return (
        <div style={{marginBottom: "60px"}} >
        <Row>
            <Col>
                <h6 className="project-title" style={{width: "100%"}}>{title}</h6>
                <a href="#" ><i className="fas fa-long-arrow-alt-right"></i></a>
            </Col>
        </Row>
        <Row>
            <Col>
    <p className="description">{description}</p>
            </Col>
        </Row>
        <Row>
            <Col lg={12} md={12}>
                {languages.map((el,index) => 
                   
                        <LanguageTag tag={el} key={index}/>
                   
                    
                )}
            </Col>
        </Row>
        </div>
    )
}

export default ProjectCard
