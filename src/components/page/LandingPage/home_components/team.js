import React, { Component } from 'react';
import './team.css'
import BrunaLekich from './Bruna.jpg'
import VivianeTeodoro from './Vivi.jpg'
import JulianaRosa from './Juliana.jpg'
import NailaFerrante from './Naila.jpg'
import BrunoAlencar from './Bruno.jpg'
import JoaoVitor from './Joao.jpg'
import EduardoLima from './Eduardo.jpg'

class Team extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <section className="bg-light section-team" id="team">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
                            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <div className="team-member">
                                <img className="mx-auto rounded-circle" src={BrunaLekich} alt="" />
                                <h4>Bruna Lekich</h4>
                                <p className="text-muted">Mobile</p>
                                <ul className="list-inline social-buttons">
                                    <li className="list-inline-item">
                                        <a href="https://github.com/BruLekichLouro" className="social-link">
                                            <i className="fa fa-github"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="https://www.linkedin.com/in/bruna-lekich-louro/" className="social-link">
                                            <i className="fa fa-linkedin"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="team-member">
                                <img className="mx-auto rounded-circle" src={BrunoAlencar} alt="" />
                                <h4>Bruno Alencar</h4>
                                <p className="text-muted">Front-End</p>
                                <ul className="list-inline social-buttons">
                                    <li className="list-inline-item">
                                        <a href="https://github.com/bruno-alencar" className="social-link">
                                            <i className="fa fa-github"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="https://www.linkedin.com/in/bruno-alencar/" className="social-link">
                                            <i className="fa fa-linkedin"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="team-member">
                                <img className="mx-auto rounded-circle" src={EduardoLima} alt="" />
                                <h4>Eduardo Lima</h4>
                                <p className="text-muted">Back-End</p>
                                <ul className="list-inline social-buttons">
                                    <li className="list-inline-item">
                                        <a href="https://github.com/duuhsousa" className="social-link">
                                            <i className="fa fa-github"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="https://www.linkedin.com/in/eduardo-lima-33aaba42/" className="social-link">
                                            <i className="fa fa-linkedin"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="team-member">
                                <img className="mx-auto rounded-circle" src={JoaoVitor} alt="" />
                                <h4>João Vitor</h4>
                                <p className="text-muted">IoT</p>
                                <ul className="list-inline social-buttons">
                                    <li className="list-inline-item">
                                        <a href="https://github.com/jvtsp" className="social-link">
                                            <i className="fa fa-github"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#" className="social-link">
                                            <i className="fa fa-linkedin"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="team-member">
                                <img className="mx-auto rounded-circle" src={JulianaRosa} alt="" />
                                <h4>Juliana Rosa</h4>
                                <p className="text-muted">Front-End</p>
                                <ul className="list-inline social-buttons">
                                    <li className="list-inline-item">
                                        <a href="https://github.com/rosaju" className="social-link">
                                            <i className="fa fa-github"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="https://www.linkedin.com/in/rosaju/" className="social-link">
                                            <i className="fa fa-linkedin"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="team-member">
                                <img className="mx-auto rounded-circle" src={NailaFerrante} alt="" />
                                <h4>Naila Ferrante</h4>
                                <p className="text-muted">Back-End</p>
                                <ul className="list-inline social-buttons">
                                    <li className="list-inline-item">
                                        <a href="https://github.com/nailaferrante" className="social-link">
                                            <i className="fa fa-github"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="https://www.linkedin.com/in/nailaferrante/" className="social-link">
                                            <i className="fa fa-linkedin"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="team-member">
                                <img className="mx-auto rounded-circle" src={VivianeTeodoro} alt="" />
                                <h4>Viviane Teodoro</h4>
                                <p className="text-muted">Mobile</p>
                                <ul className="list-inline social-buttons">
                                    <li className="list-inline-item">
                                        <a href="https://github.com/vteodoro" className="social-link">
                                            <i className="fa fa-github"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="https://www.linkedin.com/in/vteodoro/" className="social-link">
                                            <i className="fa fa-linkedin"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    {/* <div className="row">
                        <div className="col-lg-8 mx-auto text-center">
                            <p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p>
                        </div>
                    </div> */}
                </div>
            </section>
        );
    }
}

export default Team;