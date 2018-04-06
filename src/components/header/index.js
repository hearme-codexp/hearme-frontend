import React from "react"
import classnames from 'classnames'
import './header.css';
import logo from './logo-hearme-02.png'
import { withRouter, BrowserRouter as Router, Route, Link } from "react-router-dom";
import $ from 'jquery'
import { height } from "window-size";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pageHeight: 0
        }
    }

    render() {
        return (
            <header className={this.props.headerShrink ? "header_shrink" : "withPadding"}>
                <nav className={classnames("navbar navbar-expand-md navbar-dark fixed-top bg-dark", {"shrink": !this.props.headerShrink})}>
                    <Link to="/" className="home-button"><img src={logo} className="hearme" /></Link>
                    {/* <img src={logo} className="hearme"/> */}
                    {/* <a className="navbar-brand" href="#">  </a> */}
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Landing<span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/register">Cadastro</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/home">Home</Link>
                            </li>
                        </ul>
                        <form className="form-inline mt-2 mt-md-0">
                            {/* <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" /> */}
                            <Link to="/login" className="btn btn-outline-success my-2 my-sm-0">Sign In</Link>
                        </form>
                    </div>
                </nav>
            </header>
        );
    }
}

export default withRouter(Header);
