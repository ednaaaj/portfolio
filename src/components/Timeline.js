import React from 'react'
import { Chrono } from "react-chrono";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Projects from './Projects'
import './timeline.css'


import Lottie from 'react-lottie';

import animationData from '../images/Testig Tech Colored.json'

import Footer from './Footer'




const items = [
    {
        title: "Present",
        cardTitle: "You",
        cardDetailedText: "I am currently looking for job position right now who i can contribute my skills on developing and designing website from scratch",
        cardSubtitle:
          "Developer"
      },
    {
        title: "July 2019 - Present",
        cardTitle: "Flipside Digital Content Company, Inc",
        cardDetailedText: "• Maintained 100+ Windows, Ubuntu and Mac computers and peripherals, including all configuring and monitoring • Develop two company website using (React JS, Javascript,PHP, Wordpress ) • Help to develop existing annotation tool using Python • Implement OS imaging server • Monitor and troubleshoot network connection Installing and configuring hardware and software components to ensure usability • Repairing or replacing damaged hardware • Upgrading the entire system to enable compatible software on all computers • Responded to support requests from users and patiently walked individuals through basic troubleshooting tasks.",
        cardSubtitle:
          "It Support Specialist"
      },
      {
        title: "Dec 2018 - Feb 2019",
        cardTitle: "VXI Global Solutions, LLC",
        cardDetailedText: "• Set up and updated equipment for customer use.  • Configured VolP phones according to company standards. • Performed and recorded hardware inventaries. • Advocated for aggressive testing and problem analysis for server, Desktop and IT infrastructure work. • Assessed, troubleshot and repaired various machines such as Desktops, printers and sorters. • Removed and replaced malfunctioning components to correct Hardware problems. • Responded to support requests from end users and patiently walkedindividuals through basic troubleshooting tasks.",
        cardSubtitle:
          "Desktop Support Engineer - OJT"
      }
      ,
      {
        title: "April 2017 - Present",
        cardTitle: "Freelance Developer",
        cardDetailedText: "It was start when i help my college friend to fix their thesis website and then they paid me, since then when someone recommend me to build or edit their website im accepting it. I build diffent type of website from Javascript to PHP",
        cardSubtitle:
          "I am accepting and creating different type of websites since april 2017"
        
      }
      ,
      {
        title: "March 2018 - May 2018",
        cardTitle: "Shinra Software Solution",
        cardDetailedText: "Pinpointed user experience issues to devise targeted suggestions for creating cohesive user experience. • Tested websites and performed troubleshooting prior to deployment. • Designed, implemented and monitored web pages and sites for continuous improvement. • Update content in existing website using Joomla • Responded to support requests from end users and patiently walked individuals through basic troubleshooting tasks • Removed and replaced malfunctioning components to correct hardware problems. • Configured hardware, devices and software to set up work stations for employees.",
        cardSubtitle:
          "IT Support / Front End Developer - OJT",
          
      }
]

const theme = {primary: "white", secondary: "#111D4A" }


function Timeline() {
    const defaultOptions = {
        loop: true,
        renderer: 'svg',
        autoplay: true,
        animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

    return (
        <>
        <div className="timeline-container">
            <Container>
                <Row>
                    <h2>My Experience</h2>
                </Row>
                <Row>
                    <div className="timeline">
                    <Chrono
                        theme={theme}
                        items={items}
                        mode="VERTICAL_ALTERNATING"
                
                    />
                    </div>
                </Row>
                <br />
                <br />
                <Row>   
                    <Col xs={12} sm={12} md={6}>
                        <div className="lottie-container">
                        <Lottie options={defaultOptions}
                        height={500}
                        width={500} 
                        />  
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={6}>
                    <Projects />
                    </Col>

                </Row>
            </Container>
            <Footer />
        </div>
 
        </>
    )
}

export default Timeline
