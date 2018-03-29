import React from "react"
import './header.css';
import logo from './logo-hearme-02.png'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Header extends React.Component {
    render() {
        return (
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                    <img src={logo} className="hearme"/>
                    <a className="navbar-brand" href="#">  </a>
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
                                <Link className="nav-link" to="/cadastro">Cadastro</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/footer">Footer</Link>
                            </li>
                        </ul>
                        <form className="form-inline mt-2 mt-md-0">
                            <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Sign In</button>
                        </form>
                    </div>
                    </nav>
                </header>
        );
    }
}

export default Header;
