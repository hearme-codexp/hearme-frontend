import React from "react"
import './header.css';
import logo from './logo-hearme-02.png'

class header extends Component {
    render() {
        return (
            <React.Fragment>
                <header className="header">
                    <img src={logo} alt="logo" width="150" className="logo" />
                </header>
            </React.Fragment>
        );
    }
}

export default Header;
