import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import logo from './logo-hearme.png'
import street from './street.jpg'
import streetMobile from './street-mobile.jpg'
import './landing.css'


class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { width: props.width };
    }

    componentDidMount() {
        this.setState({ height: window.innerWidth });
    }

    componentWillMount() {
        this.setState({ width: window.innerWidth });
    }

    render() {
        return (
            <div id="outer-container">
                <Menu pageWrapId={"page-wrap"} outerContainerId={"outer-container"}>
                    <a id="home" className="menu-item" href="/">Home</a>
                    <a id="about" className="menu-item" href="/about">About</a>
                    <a id="contact" className="menu-item" href="/contact">Contact</a>
                    <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
                </Menu>
                <div id="page-wrap">
                    <div className="logo-container">
                        <img src={logo} className="logo" />
                    </div>
                    <div className="button-container">
                        <button className="button button__create">
                            Sign In
                        </button>
                    </div>
                    <img src={this.state.width > 768 ? street : streetMobile} className="background" />
                </div>
            </div>
        )
    }
}

export default LandingPage;


