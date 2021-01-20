import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

const github = "https://github.com/Zenb0t"
const linkedin = "https://www.linkedin.com/in/felipe-ribeiro-245a37192/ "
const gml = "mailto:zazen.coding@gmail.com"


const Footer = (props) => {

    //TODO: Make white circle on the icons below
    return (
        <div className="footer container-fluid">
            <div className="row p-3 pt-5 mt-3">
                <div className="col" >
                    <a href={github} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon
                            icon={faGithub}
                            color="black"
                            size="2x" />
                        <p>Github</p>
                    </a>
                </div>
                <div className="col">
                    <a href={linkedin} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon
                            icon={faLinkedin}
                            color="black"
                            size="2x" />
                        <p>Linkedin</p>
                    </a>
                </div>
                <div className="col">
                    <a href={gml} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon
                            icon={faEnvelope}
                            color="black"
                            size="2x" />
                        <p>Contact</p>
                    </a>
                </div>
            </div>
            <p>copyleft© Felipe Ribeiro 2021</p>
        </div>
    )
}

export default Footer;