import React from 'react';
import Link from 'react-router-dom/Link';
import mongoImg from "../img/MongoDB_Logo_FullColorBlack_RGB-4td3yuxzjs.png"
import expressImg from "../img/Expressjs.png"
import reactImg from "../img/1920px-React.svg.png"
import nodeImg from "../img/Node.js_logo.svg"
import flutterImg from "../img/Google-flutter-logo.png"
import figmaImg from "../img/400px-Figma-logo.svg.png"

const Stack = (props) => {
    return (
        <div className="container" id="Stack">
            <h2 className="mt-5">Here are some of the tech stacks I work with:</h2>
            <div className="row align-items-center" style={{ height: 400 }}>
                <div className="col-sm-4 p-1">
                    <img src={mongoImg} width="200" />
                </div>
                <div className="col-sm-4 p-1">
                    <img src={expressImg} width="200" />
                </div>
                <div className="col-sm-4 p-1">
                    <img src={reactImg} width="150" />
                </div>
                <div className="col-sm-4 p-1">
                    <img src={nodeImg} width="150" />
                </div>
                <div className="col-sm-4 p-1">
                    <img src={flutterImg} width="200" />
                </div>
                <div className="col-sm-4 p-1">
                    <img src={figmaImg} width="80" />
                </div>
            </div>
        </div>
    )
}

export default Stack;