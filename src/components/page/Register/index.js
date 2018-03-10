import React from 'react'
import RegisterForm from '../../RegisterForm'
import Login from '../../login'
import './screen.css'
import logo from './logo-hearme-02.png'

class Register extends React.Component {
    render(){
        return(
            <div>
                <header className="header">
                    <img src={logo} alt="logo" width="150" /> 
                </header>
                <div className="section">
                    {/* <Login />    */}
                    <RegisterForm options={["Leve", "Alta"]}/>
                </div>
            </div>
        );
    }
}

export default Register;