import React, { Component } from 'react';
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <Jumbotron className="main ">

                    <h1>Hi I'm Felipe,</h1>
                    <h2>a full-<a 
                            className="font-weight-bolder text-decoration-none" 
                            href="#stack"
                            >stack</a> web developer</h2>
                    <div className="row justify-content-sm-center">
                        <p className="text-center col-sm-4">
                           with a passion for problem-solving 
                            and building things in the process.
                    </p>
                    </div>
                    <br></br>
                    <p>
                        <Button variant="primary">Recipe Box</Button>
                    </p>
                </Jumbotron>
            </div>
        );
    }
}

export default Main;