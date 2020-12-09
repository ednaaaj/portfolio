import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ProjectCard from './ProjectCard'

import './project.css'


const projectItems = [
    {
        title: "Tala North Cemetery Mapping System",
        description: "This our capstone project, this system helps cetizens of caloocan who has deceased on the cemetery to locate their nitch or point them easily where there deceased is located. It has some admin page and mapping system to track the location of each section or blk in cemetery and it has a feature that will automatically send if the contract of the nitch will be expired soon ",
        languages: ['PHP', 'CSS', 'Leaflet', 'Javascript', 'Ajax', 'MySQL', 'SMS','bootstrap']
    },
    {
        title: "React Covid 19 Tracker",
        description: "During the lockdown here in the Philippines, i've created a simple tracker for the Covid 19, it will cover all countries and track the records of deaths, recovered and infected.  ",
        languages: ['React JS', 'API', 'deceased.sh', 'react-hooks', 'bootstrap']
    },
    {
        title: "Tindahan",
        description: "Is the ecommerce built in the javascript front to backend it is normal ecommerce this project help me understand more about graphQL and MongoDB",
        languages: ['React JS', 'Redux','MongoDB', 'Express JS', 'Node JS', 'bootstrap', 'Admin Dashboard', 'css', 'API']
    },
    {
        title: "Meilar",
        description: "Its a annotation tool built in python it is based on the labelme of github projets. I became part of dev team where i added features and update some codes using python and pyqt library",
        languages: ["Python", "PyQt5", "Ubuntu"]
    },
    {
        title: "My Portfolio",
        description: "This portfolio is designed and created by me with inspiration of other designs. I created it only 2days because i have so many workloads. ",
        languages: ['React JS', 'react-hooks', 'bootstrap', 'css']
    }
]

function Projects() {
    return (
        <div className="project-container">
            <Container>
            <Row>
                <Col>
                    <h1>Projects That I've built and became a part of it</h1>
                </Col>
            </Row>

            {projectItems.map((el,index)=> <Row  key={index}>
              
                <ProjectCard title={el.title} description={el.description} languages={el.languages}/>
           
            
            </Row> )}
          
            </Container>
            
        </div>
    )
}

export default Projects
