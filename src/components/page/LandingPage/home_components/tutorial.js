import React, { Component } from 'react';
import tutorial from './tutorial.jpg'
import './tutorial.css'


class Tutorial extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <section id="about" className="section-tutorial">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading text-uppercase">How to use your gadget</h2>
                            {/* <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3> */}
                        </div>
                    </div>
                    <div className="row section-tutorial__timeline">
                        <div className="col-lg-12">
                            <ul className="timeline">
                                <li>
                                    <div className="timeline-image">
                                        <img className="rounded-circle img-fluid" src="template/img/about/1.jpg" alt="" />
                                    </div>
                                    <div className="timeline-panel">
                                        <div className="timeline-heading">
                                            <h4 className="subheading">Download the App</h4>
                                        </div>
                                        <div className="timeline-body">
                                            <p className="text-muted">
                                                You can download the app on a <a href="https://play.google.com/store" target="_blank">Play Store</a>!
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li className="timeline-inverted">
                                    <div className="timeline-image">
                                        <img className="rounded-circle img-fluid" src="template/img/about/2.jpg" alt="" />
                                    </div>
                                    <div className="timeline-panel">
                                        <div className="timeline-heading">
                                            <h4 className="subheading">Create an Account</h4>
                                        </div>
                                        <div className="timeline-body">
                                            <p className="text-muted">
                                                To create an account <a href="http://localhost:3000/register">click here</a>!
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="timeline-image">
                                        <img className="rounded-circle img-fluid" src="template/img/about/3.jpg" alt="" />
                                    </div>
                                    <div className="timeline-panel">
                                        <div className="timeline-heading">
                                            <h4 className="subheading">Connect your Gadget</h4>
                                        </div>
                                        <div className="timeline-body">   
                                            {/* <p className="text-muted">Now you need pair your device using bluetooth to start.</p>*/}
                                            <ul>
                                                <li>
                                                    <p className="text-muted">Turn on the bluetooth device.</p>
                                                </li>
                                                <li> 
                                                    <p className="text-muted">On your phone, open the Hear.Me app.</p>
                                                </li>
                                                <li> 
                                                    <p className="text-muted">Tap Set it up.</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li className="timeline-inverted">
                                    <div className="timeline-image">
                                        <img className="rounded-circle img-fluid" src="template/img/about/4.jpg" alt="" />
                                    </div>
                                    <div className="timeline-panel">
                                        <div className="timeline-heading">
                                            <h4 className="subheading">Good! We are already connected!</h4>
                                        </div>
                                    </div>
                                </li>
                                <li className="timeline-inverted">
                                    <div className="timeline-image">
                                        <h4 className="end-tutorial">Make
                                        <br />Your
                                        <br />Story!</h4>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>  
                <div> 
                    <img src={tutorial} className="img-tutorial" />
                </div>              
            </section>
        )
    }
}

export default Tutorial;
