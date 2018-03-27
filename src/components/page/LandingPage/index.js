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
            <div>
                <div id="page-wrap" className="background" >
                    <div className="logo-container">
                        <img src={logo} className="logo" />
                        <button className="button button__create">
                            Sign Up
                        </button>
                    </div>
                    {/* <div className="background" /> */}
                    {/* {this.state.width <= 768 ? <img src={streetMobile} className="background" /> : null}                    */}
                </div>
                <div>haiuehaoiehaiuehiuahdaçoifsçlksfdn</div>
                <div>haiuehaoiehaiuehiuahdaçoifsçlksfdn</div>
                <div>haiuehaoiehaiuehiuahdaçoifsçlksfdn</div>
                <div>haiuehaoiehaiuehiuahdaçoifsçlksfdn</div>
                <div>haiuehaoiehaiuehiuahdaçoifsçlksfdn</div>
                <div>haiuehaoiehaiuehiuahdaçoifsçlksfdn</div>
                <div>haiuehaoiehaiuehiuahdaçoifsçlksfdn</div>
                <div>haiuehaoiehaiuehiuahdaçoifsçlksfdn</div>
                <div>haiuehaoiehaiuehiuahdaçoifsçlksfdn</div>
                <div>haiuehaoiehaiuehiuahdaçoifsçlksfdn</div>
                <div>haiuehaoiehaiuehiuahdaçoifsçlksfdn</div>
                <div>haiuehaoiehaiuehiuahdaçoifsçlksfdn</div>
                <div>haiuehaoiehaiuehiuahdaçoifsçlksfdn</div>
                <div>haiuehaoiehaiuehiuahdaçoifsçlksfdn</div>
                <div>haiuehaoiehaiuehiuahdaçoifsçlksfdn</div>
                <div>haiuehaoiehaiuehiuahdaçoifsçlksfdn</div>
                <div>haiuehaoiehaiuehiuahdaçoifsçlksfdn</div>
                <div>haiuehaoiehaiuehiuahdaçoifsçlksfdn</div>
                <div>haiuehaoiehaiuehiuahdaçoifsçlksfdn</div>
                <div>haiuehaoiehaiuehiuahdaçoifsçlksfdn</div>
                <div>haiuehaoiehaiuehiuahdaçoifsçlksfdn</div>
                <div>haiuehaoiehaiuehiuahdaçoifsçlksfdn</div>
                <div>haiuehaoiehaiuehiuahdaçoifsçlksfdn</div>
                <div>haiuehaoiehaiuehiuahdaçoifsçlksfdn</div>
                <div>haiuehaoiehaiuehiuahdaçoifsçlksfdn</div>
                <div>haiuehaoiehaiuehiuahdaçoifsçlksfdn</div>
                <div>haiuehaoiehaiuehiuahdaçoifsçlksfdn</div>
                <div>haiuehaoiehaiuehiuahdaçoifsçlksfdn</div>
                <div>haiuehaoiehaiuehiuahdaçoifsçlksfdn</div>
                <div>haiuehaoiehaiuehiuahdaçoifsçlksfdn</div>
                <div>haiuehaoiehaiuehiuahdaçoifsçlksfdn</div>
                <div>haiuehaoiehaiuehiuahdaçoifsçlksfdn</div>
                <div>haiuehaoiehaiuehiuahdaçoifsçlksfdn</div>
                <div>haiuehaoiehaiuehiuahdaçoifsçlksfdn</div>
                <div>haiuehaoiehaiuehiuahdaçoifsçlksfdn</div>
                <div>haiuehaoiehaiuehiuahdaçoifsçlksfdn</div>
                <div>haiuehaoiehaiuehiuahdaçoifsçlksfdn</div>
                <div>haiuehaoiehaiuehiuahdaçoifsçlksfdn</div>
                <div>haiuehaoiehaiuehiuahdaçoifsçlksfdn</div>
                <div>haiuehaoiehaiuehiuahdaçoifsçlksfdn</div>
                <div>haiuehaoiehaiuehiuahdaçoifsçlksfdn</div>
                <div>haiuehaoiehaiuehiuahdaçoifsçlksfdn</div>
                <div>haiuehaoiehaiuehiuahdaçoifsçlksfdn</div>
                <div>haiuehaoiehaiuehiuahdaçoifsçlksfdn</div>
                <div>haiuehaoiehaiuehiuahdaçoifsçlksfdn</div>
                <div>haiuehaoiehaiuehiuahdaçoifsçlksfdn</div>
                <div>haiuehaoiehaiuehiuahdaçoifsçlksfdn</div>
                <div>haiuehaoiehaiuehiuahdaçoifsçlksfdn</div>
                <div>haiuehaoiehaiuehiuahdaçoifsçlksfdn</div>
                <div>haiuehaoiehaiuehiuahdaçoifsçlksfdn</div>
                <div>haiuehaoiehaiuehiuahdaçoifsçlksfdn</div>
                <div>haiuehaoiehaiuehiuahdaçoifsçlksfdn</div>
                <div>haiuehaoiehaiuehiuahdaçoifsçlksfdn</div>
                <div>haiuehaoiehaiuehiuahdaçoifsçlksfdn</div>
                <div>haiuehaoiehaiuehiuahdaçoifsçlksfdn</div>
                <div>haiuehaoiehaiuehiuahdaçoifsçlksfdn</div>
                <div>haiuehaoiehaiuehiuahdaçoifsçlksfdn</div>
                <div>haiuehaoiehaiuehiuahdaçoifsçlksfdn</div>
                <div>haiuehaoiehaiuehiuahdaçoifsçlksfdn</div>
                <div>haiuehaoiehaiuehiuahdaçoifsçlksfdn</div>
                <div>haiuehaoiehaiuehiuahdaçoifsçlksfdn</div>
                <div>haiuehaoiehaiuehiuahdaçoifsçlksfdn</div>
                <div>haiuehaoiehaiuehiuahdaçoifsçlksfdn</div>
                <div>haiuehaoiehaiuehiuahdaçoifsçlksfdn</div>
                <div>haiuehaoiehaiuehiuahdaçoifsçlksfdn</div>
                <div>haiuehaoiehaiuehiuahdaçoifsçlksfdn</div>
                <div>haiuehaoiehaiuehiuahdaçoifsçlksfdn</div>
                <div>haiuehaoiehaiuehiuahdaçoifsçlksfdn</div>
                <div>haiuehaoiehaiuehiuahdaçoifsçlksfdn</div>
                <div>haiuehaoiehaiuehiuahdaçoifsçlksfdn</div>
                <div>haiuehaoiehaiuehiuahdaçoifsçlksfdn</div>
                <div>haiuehaoiehaiuehiuahdaçoifsçlksfdn</div>
            </div>

        )
    }
}

export default LandingPage;


