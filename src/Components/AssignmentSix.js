import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Home() {
    return (
        <>
          
            <p style={{width:"800px",textAlign:"center",fontSize:"18px"}}>You chose Home Page</p>
        </>
    );
}

function Project() {
    return (
        <>
         
            <p style={{width:"800px",textAlign:"center",fontSize:"18px"}}>You chose Project Page</p>
        </>
    );
}

function Services() {
    return (
        <>
           
            <p style={{width:"800px",textAlign:"center",fontSize:"18px"}}>You chose Services Page</p>
        </>
    );
}

function Contact() {
    return (
        <>
           
            <p style={{width:"800px",textAlign:"center",fontSize:"18px"}}>You chose Contact Page</p>
        </>
    );
}

class AssignmentSix extends React.Component {
    constructor(props) {
        super(props);
        this.state = { Homecolor: "blue", Projectcolor: "blue", Servicescolor: "blue", Contactcolor: "blue" };
    }

    changeColor = (homecolor, projectcolor, servicecolor, contactcolor) => {
        this.setState({ Homecolor: homecolor, Projectcolor: projectcolor, Servicescolor: servicecolor, Contactcolor: contactcolor });
    };


    render() {
        return (
            <div id="main">
                <Router>
                    <div>
                        <nav>
                            <div style={{ float:"left",width:"200px",fontSize:"35px",background: this.state.Homecolor }}>
                                <span>
                                    <Link style={{color:"white",textDecoration:"none"}} to="/" onClick={() => this.changeColor("Pink", "blue", "blue", "blue")}>
                                        HOME
                      </Link>
                                </span>
                            </div><div style={{ float:"left",width:"200px",fontSize:"35px" ,background: this.state.Projectcolor}}>
                                <span>
                                    <Link style={{color:"white",textDecoration:"none"}}
                                        to="/project/"
                                        onClick={() => this.changeColor("blue", "Pink", "blue", "blue")}>
                                        PROJECT
                      </Link>
                                </span>
                            </div><div style={{ float:"left",width:"200px",fontSize:"35px",background: this.state.Servicescolor }}>
                                <span>
                                    <Link style={{color:"white",textDecoration:"none"}} to="/services/"
                                        onClick={() => this.changeColor("blue", "blue", "pink", "blue")}>
                                        SERVICES
                      </Link>
                                </span>
                            </div><div style={{ float:"left",width:"200px",fontSize:"35px",background: this.state.Contactcolor }}>
                                <span>
                                    <Link style={{color:"white",textDecoration:"none"}}
                                        to="/contact/"
                                        onClick={() => this.changeColor("blue", "blue", "blue", "pink")}>
                                        CONTACT
                      </Link>
                                </span>
                            </div>
                        </nav><br/>

                        <Route path="/" exact component={Home} />
                        <Route path="/project/" component={Project} />
                        <Route path="/services/" component={Services} />
                        <Route path="/contact/" component={Contact} />
                    </div>
                </Router>
            </div>
        );
    }
}
export default AssignmentSix;



