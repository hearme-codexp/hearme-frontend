import React from 'react'
import Input from '../Input'
import Button from '../Button'
import './register.css'

class Form extends React.Component {
    render() {
        return (
            <form className="form">
                <h1>Cadastre-se</h1>
                <Input type="text" placeholder="nome" className="input"/>
                <Input type="email" placeholder="e-mail" className="input"/>
                <Input type="password" placeholder="senha" className="input"/>
                <Input type="password" placeholder="confirme sua senha" className="input"/>
                <Input type="date" placeholder="data de nascimento" className="input"/>
                <Input type="text" placeholder="grau de deficiencia" className="input"/>
                <Button className='button'>Cadastrar</Button>
            </form>
        );
    }
}
/* 
<Input type="text" placeholder="nome" className="input input--small"/>
           <Button className='button'>Cadastrar</Button> */

export default Form;