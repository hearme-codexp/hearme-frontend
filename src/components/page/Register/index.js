import React from 'react'
import RegisterForm from '../../RegisterForm'
import Login from '../../login'
import './screen.css'
// import logo from './logo-hearme-02.png'

class Register extends React.Component {
    render(){
        return(
            <RegisterForm options={["Leve", "Alta"]}/>
        );
    }
}

export default Register;