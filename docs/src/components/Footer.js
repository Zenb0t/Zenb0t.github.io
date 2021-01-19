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
        <div className="footer container">
            <p>Hello I'm the footer</p>
            <div className="row">
                <div className="rounded m-2 border border-danger col">
                    <a href={github} target="_blank"><FontAwesomeIcon
                        icon={faGithub}
                        color="orange"
                        size="2x" /></a>
                </div>
                <div className="rounded border border-danger col">
                    <a href={linkedin} target="_blank">
                        <FontAwesomeIcon
                            icon={faLinkedin}
                            color="orange"
                            size="2x" /></a>
                </div>
                <div className="rounded border border-danger col">
                    <a href={gml} target="_blank">
                        <FontAwesomeIcon
                            icon={faEnvelope}
                            color="orange"
                            size="2x" />
                    </a>
                </div>
            </div>
            <p>copyleft© Felipe Ribeiro 2021</p>
        </div>
    )
}

export default Footer;