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
    
    // state = {
    //     client: new Client()
    // };

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
        
        this.state.client[name] = value;
        this.setState({client:  this.state.client});
    }

    handleSubmit(event){
        event.preventDefault();
        console.log(this.state.client);

        let validation = this.validate();
        if(validation.length == 0){
            axios.post('', this.state.client)
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

                <h1 className="form__title">Cadastre-se</h1>
                {/* <label for="name">Nome</label> */}
                <Input type="text" placeholder="Nome" name="name" className="input" onChange={this.handleChange}/>
                {/* <label for="email">E-mail</label> */}
                <Input type="email" placeholder="E-mail" className="input" name="email" onChange={this.handleChange}/>
                {/* <label for="password">Senha</label> */}
                <Input type="password" placeholder="Senha" className="input" name="password" onChange={this.handleChange}/>
                {/* <label for="passwordConfirmation">Confirmação de senha</label> */}
                <Input type="password" placeholder="Confirmação de senha" className="input" name="passwordConfirmation" onChange={this.handleChange}/>
                {/* <label for="birth">Data de nascimento</label> */}
                <Input type="date" placeholder="Data de nascimento" className="input" name="birth" onChange={this.handleChange}/>
                {/* <label for="deficiency">Grau de deficiência</label> */}
                <Input type="text" placeholder="Grau de deficiência" className="input" name="deficiency" onChange={this.handleChange}/>
                <select className="input">
                    <option value="volvo">Volvo</option>
                    <option value="audi">Audi</option>
                </select>
                <div>
                    <Input type="radio" className="input" name="gender" value ="male" onChange={this.handleChange}/>
                    <Input type="radio" className="input" name="gender" value ="female" onChange={this.handleChange}/>
                    <Input type="radio" className="input" name="gender" value ="other" onChange={this.handleChange}/>
                </div>
                <Button type="submit" className='button'>Cadastrar</Button>
            </form>
        );
    }
}
/* 
<Input type="text" placeholder="nome" className="input input--small"/>
           <Button className='button'>Cadastrar</Button> */

export default Form;