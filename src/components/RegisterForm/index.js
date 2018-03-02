import React from 'react'
import Input from '../Input'
import Button from '../Button'
import './register.css'
import Client from '../../Client.js';

class Form extends React.Component {
    
    state = ({
        client: new Client()
    })

    handleOnChange(event){
        const {client} = this.state

        this.setState({
            
        })

        console.log(new FormData(event.target))

    }

    handleSubmit(event) {
        event.preventDefault();
        console.log("submit action");   
       
        var data = event.target;
        console.log(this.state);

        // const test = event.target.name.value;

        // axios.post('/user', { // set the correct url
        //     name: event.target.name.value;
        //   })
        //   .then(function (response) {
        //     console.log(response);
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //   });
    }

    render() {
        return (
            <form className="form" onSubmit={this.handleSubmit}>
                <h1>Cadastre-se</h1>
                <Input type="text" placeholder="nome" name="name" className="input" onChange={this.handleOnChange} required/>
                <Input type="email" placeholder="e-mail" name="email" className="input" required/>
                <Input type="password" placeholder="senha" name="pass" className="input" required/>
                <Input type="password" placeholder="confirme sua senha" name="passConfirmation" className="input" required/>
                <Input type="date" placeholder="data de nascimento" name="birth" className="input" required/>
                <Input type="text" placeholder="grau de deficiencia" name="deficiency"  className="input" required/>
                <Button className='button'>Cadastrar</Button>
            </form>
        );
    }
}
/* 
<Input type="text" placeholder="nome" className="input input--small"/>
           <Button className='button'>Cadastrar</Button> */

export default Form;