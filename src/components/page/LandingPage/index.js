import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import logo from './logo-hearme.png'
import street from './street.jpg'
import streetMobile from './street-mobile.jpg'
import './landing.css'


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
            <div class="">                
                <div id="page-wrap" className={"img-desktop"} style={this.state.width > 768 ? {height: this.state.height} : {}}>
                    <div className="logo-container">
                        <img src={logo} className="logo" />
                    </div>
                    <div className="button-container">
                        <button className="button button__create">
                            Sign In
                        </button>
                    </div>
                    {/* <div className="background" /> */}
                    {this.state.width <= 768 ? <img src={streetMobile} className="background" /> : null}                   
                </div>                
            </div>
           
        )
    }
}

export default LandingPage;


