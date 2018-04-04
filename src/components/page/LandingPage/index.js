import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'
import Tutorial from './home_components/tutorial'
import Team from './home_components/team';
import Footer from '../../footer'
import logo from './logo-hearme.png'
import street from './street.jpg'
import streetMobile from './street-mobile.jpg'
import './landing.css'
import '../../Button/button.css'


class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { height: props.height, width: props.width };
    }

    componentDidMount() {
        var self = this;
        window.addEventListener("resize", () => {
            self.setState({ height: window.innerHeight, width: window.innerWidth });
        });
    }

    componentWillMount() {
        this.setState({ height: window.innerHeight, width: window.innerWidth });
    }

    render() {
        return (
            <div>
                <div id="page-wrap" className="background" >
                    <div className="logo-container">
                        <img src={logo} className="logo" />
                        <Link to="/register" className="button button__create">
                            Sign Up
                        </Link>
                    </div>
                    {/* <div className="background" /> */}
                    {/* {this.state.width <= 768 ? <img src={streetMobile} className="background" /> : null}                    */}
                </div>

                <Tutorial />
                
                <Team />
                
                <Footer />

            </div>

        )
    }
}

export default LandingPage;


