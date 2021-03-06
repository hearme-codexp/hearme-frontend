import React, { Component } from 'react';
import './about.css'
import watch from './watch.jpg'

class About extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <section className="bg-light section-about" id="about">
                <div className="about-container">
                    <div className="col-lg-5 text-center text-container">
                        <h2 className="section-heading text-uppercase">About</h2>
                        <p className="section-subheading text-muted">
                            The wearable device developed by HEAR.ME continuously monitor sounds from the environment and provides alerts through vibrations in cases of sudden changes.
                        </p>
                        <p className="section-subheading text-muted">
                            Once the technology notifies the user, the information generated by the alerts will be sent in real time from the wearable to the mobile app via Bluetooth technology.
                        </p>
                        <p className="section-subheading text-muted">
                            The user will be able to analyze the notifications through the mobile app or website including information about location, date and time.
                        </p>
                        <p className="section-subheading text-muted">
                            We want to provide an inclusive future. A better future.
                        </p>
                        <p className="section-subheading text-muted">
                            HEAR.ME
                            <br/>We can hear too.
                        </p>                        
                    </div>
                    <div className="col-lg-6 watch-container"> 
                        <img src={watch} className="img-about" />
                    </div>
                </div>
            </section>
        );

    }
}

export default About;