import React from 'react'
import Input from '../Input'
import Button from '../Button'
import './register.css'
import Client from '../../Client'
import axios from 'axios'

class Form extends React.Component {
    constructor (props){
        super(props);

        this.state = {
            client: new Client()
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.validate = this.validate.bind(this);
    }
    
    validate() {
        const errors = [];
        const {client} = this.state;

        if (client.password !== client.passwordConfirmation) {
            errors.password = 'Senhas devem ser iguais.';
        }

        return errors;
    }

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        
        this.setState(prevState => ({client: { ...prevState, [name] : value}}));

        console.log(this.state.client);
    }

    handleSubmit(event){
        event.preventDefault();

        let validation = validate();
        if(validation.length == 0){
            axios.post('/user', this.state.client)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    }

    render() {
        return (
            <form className="form" onSubmit={this.handleSubmit}>
                <h1>Cadastre-se</h1>
                <Input type="text" placeholder="Nome" name="name" className="input" onChange={this.handleChange}/>
                <Input type="email" placeholder="e-mail" className="input" name="email" onChange={this.handleChange}/>
                <Input type="password" placeholder="senha" className="input" name="password" onChange={this.handleChange}/>
                <Input type="password" placeholder="confirme sua senha" className="input" name="passwordConfirmation" onChange={this.handleChange}/>
                <Input type="date" placeholder="data de nascimento" className="input" name="birth" onChange={this.handleChange}/>
                <Input type="text" placeholder="grau de deficiencia" className="input" name="deficiency" onChange={this.handleChange}/>
                <Button className='button'>Cadastrar</Button>
            </form>
        );
    }
}
/* 
<Input type="text" placeholder="nome" className="input input--small"/>
           <Button className='button'>Cadastrar</Button> */

export default Form;