import React from 'react';
import { Form, Icon, Input, Button, Checkbox, notification } from 'antd';
import 'antd/dist/antd.css'
import './login.css'
import { BrowserRouter as Router, Route, Redirect, Link, withRouter } from 'react-router-dom'
import { authenticate } from '../../functions'
import PrivateRoute from '../privateRoute'
import Home from '../page/home'
import axios from 'axios'
import { openNotification } from '../../functions'

const FormItem = Form.Item;

class Login extends React.Component {
  state = {
    redirectToReferrer: false
  }

  login = (values) => {
    axios.post('api/Usuario/Login', { email: values.userName, senha: values.password})
    .then(response => {
        console.log("Logged", response);
        this.props.onLogin();
        this.setState({redirectToReferrer: true})
        openNotification({message: `Wellcome ${response.data.nome}!`, description: `You are able to see all of alerts stories.`});
    })
    .catch(error => {
        console.log('Error: User', error.data); 
        // openNotification({message: `ERROR: ${error}`, description: `Please, correct the error, and try again.`});
        openNotification({message: `ERROR: User or password entered not valid`, description: `Please, correct the error, and try again.`});
    });

  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.login(values);
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { redirectToReferrer } = this.state
    
    if (redirectToReferrer === true) {
      return <Redirect to={from} />
    }
    
    return (
      <React.Fragment>
      
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem className="tamanho">
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username"/>
          )}
        </FormItem>
        
        <FormItem className="tamanho">
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </FormItem>

        <FormItem className="tamanho">
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>Remember me</Checkbox>
          )}
          <a className="login-form-forgot" href="">Forgot password</a>
          <Button type="primary" htmlType="submit" className="button button__create">
            Log in
          </Button>
          Or <Link to="/register">register now!</Link>
        </FormItem>
      </Form>
      </React.Fragment>
    );
  }
}

const WrappedRegister = Form.create()(Login);
export default WrappedRegister;
