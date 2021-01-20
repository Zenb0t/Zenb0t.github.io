import React from 'react';
import Link from 'react-router-dom/Link';
import Jumbotron from "react-bootstrap/Jumbotron";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptop, faServer, faDesktop } from '@fortawesome/free-solid-svg-icons'
import Stack from './Stack';


const Main = (props) => {

    return (
        <div className="h-100">
            <Jumbotron className="main">

                <h1>Hi I'm Felipe,</h1>
                <h2>a Full <a
                    className="font-weight-bolder text-decoration-none"
                    href="#Stack"
                >Stack</a> web developer</h2>
                <div className="row justify-content-sm-center">
                    <p className="text-center col-sm-4">
                        with a passion for problem-solving
                        and building things in the process.
                    </p>
                </div>
            </Jumbotron>
            <hr></hr>
            <div className="container py-3">
                <div className="row">

                    <div className="col-sm p-3">
                        <Link to="/front">
                            <FontAwesomeIcon
                                icon={faLaptop}
                                color="orange"
                                size="3x" />
                            <br />

                            <p>Front End Project</p>
                        </Link>
                    </div>
                    <div className="col-sm p-3">
                        <a href="https://github.com/Zenb0t/backend-recipesAPI">
                            <FontAwesomeIcon
                                icon={faServer}
                                color="orange"
                                size="3x" />
                            <br />
                            <p>Back End Project</p>
                        </a>
                    </div>
                    <div className="col-sm p-3">
                        <Link to="/websites">
                            <FontAwesomeIcon
                                icon={faDesktop}
                                color="orange"
                                size="3x" />
                            <br />
                            <p> Web Projects</p>
                        </Link>
                    </div>
                </div>
            </div>
            <hr></hr>
            <Stack />
        </div>
    );
}


export default Main;