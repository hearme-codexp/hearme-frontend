import React from 'react'
import Input from '../Input'
import Button from '../Button'
import './register.css'
import Client from '../../Client'
import axios from 'axios'
import { Title } from 'glamorous';

class Form extends React.Component {
    state = {
        client: new Client()
    }

    validate() {
        const errors = [];
        const {client} = this.state;

        if (client.password !== client.passwordConfirmation) {
            errors.password = 'Senhas devem ser iguais.';
        }

        return errors;
    }

    handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        
        this.state.client[name] = value;
        this.setState({client:  this.state.client});
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const data = {
            name: this.client.name.value,
            // email: this.client.email.value,
        };

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

    client = {};

    render() {
        return (
            <React.Fragment>
                <form className="form" onSubmit={this.handleSubmit}>
                    <h1 className="form__title">Cadastre-se</h1>
                    {/* <label for="name">Nome</label> */}
                    <Input type="text" placeholder="Nome" name="name" className="input" innerRef={elem => this.client.name = elem}/>
                    {/* <label for="email">E-mail</label> */}
                    <Input type="email" placeholder="E-mail" className="input" name="email" innerRef={elem => this.client.email = elem}/>
                    {/* <label for="password">Senha</label> */}
                    <Input type="password" placeholder="Senha" className="input" name="password" innerRef={elem => this.client.password = elem}/>
                    {/* <label for="passwordConfirmation">Confirmação de senha</label> */}
                    <Input type="password" placeholder="Confirmação de senha" className="input" name="passwordConfirmation" innerRef={elem => this.client.passwordConfirmation = elem}/>
                    {/* <label for="birth">Data de nascimento</label> */}
                    <Input type="date" placeholder="Data de nascimento" className="input" name="birth" innerRef={elem => this.client.birth = elem}/>
                    {/* <label for="deficiency">Grau de deficiência</label> */}
                    <Input type="text" placeholder="Grau de deficiência" className="input" name="deficiency" innerRef={elem => this.client.deficiency = elem}/>
                    <select className="input">
                        <option value="volvo">Volvo</option>
                        <option value="audi">Audi</option>
                    </select>
                    <div>
                        <Input type="radio" name="gender" value ="male" innerRef={elem => this.client.name = elem} />
                        <Input type="radio" name="gender" value ="female" innerRef={elem => this.client.name = elem}/>
                        <Input type="radio" name="gender" value ="other" innerRef={elem => this.client.name = elem}/>
                    </div>
                    <Button type="submit" className='button'>Cadastrar</Button>
                </form>
            </React.Fragment>
        );
    }
}

export default Form;