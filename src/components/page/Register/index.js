import React from 'react'
import RegisterForm from '../../RegisterForm'
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
                    <RegisterForm options={['Leve', 'Moderada', 'Alta', 'Surdez']}/>
                </div>
            </div>
        );
    }
}

export default Register;