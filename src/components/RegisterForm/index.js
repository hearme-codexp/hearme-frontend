import React from 'react'
import { Form, Input, Tooltip, Icon, Select, Checkbox, Button } from 'antd';
import { DatePicker } from 'antd';
import axios from 'axios'
import './register.css'
import Redirect from 'react-router-dom/Redirect';

const FormItem = Form.Item;
const Option = Select.Option;

axios.defaults.baseURL = 'https://hearme-app.herokuapp.com/';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

class RegistrationForm extends React.Component {
  state = {
    confirmDirty: false,
    registered: false
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) { 
        console.log('Received values of form: ', values);
        axios.post('api/Cadastrar/Web',{
          nome: values.nickname,
          email: values.email,
          senha: values.password,
          dataDeNascimento: values.birthDate,
          genero: values.genrer,
          grauDeDeficiencia: values.deficiency
        })
        .then((response) => {
            console.log(response, this.state);

            this.setState(prevState => ({ ...prevState, registered: true }))
        })
        .catch((error) => {
            console.log(error);
        });
      }
    });
  }
  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }
  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
    //   callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  }
  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0,
          },
          sm: {
            span: 16,
            offset: 8,
          },
        },
      };

    if(this.state.registered === true){
      console.log("teste");
      return <Redirect to="/login"/>
    }

    return (
      <Form onSubmit={this.handleSubmit} className="form--register">
        <FormItem
          {...formItemLayout}
          label={(
            <span>
              Name&nbsp;
              <Tooltip title="What do you want others to call you?">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
          )}
        >
          {getFieldDecorator('nickname', {
            rules: [{ required: true, message: 'Please input your name!', whitespace: true }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="E-mail"
        >
          {getFieldDecorator('email', {
            rules: [{
              type: 'email', message: 'The input is not valid E-mail!',
            }, {
              required: true, message: 'Please input your E-mail!',
            }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Password"
        >
          {getFieldDecorator('password', {
            rules: [{
              required: true, message: 'Please input your password!',
            }, {
              validator: this.validateToNextPassword,
            }],
          })(
            <Input type="password" />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Confirm Password"
        >
          {getFieldDecorator('confirm', {
            rules: [{
              required: true, message: 'Please confirm your password!',
            }, {
              validator: this.compareToFirstPassword,
            }],
          })(
            <Input type="password" onBlur={this.handleConfirmBlur} />
          )}
        </FormItem>
        <FormItem
        {...formItemLayout}
        label="Date of birth"
        >
            
            {getFieldDecorator('birthDate', {
            rules: [{ required: true, message: 'Please select your birthDate!' }],
          })(
            <DatePicker/>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Deficiency"
        >
          {getFieldDecorator('deficiency', {
            rules: [{ required: true, message: 'Please select your deficiency!' }],
          })(
            <Select style={{ width: '30%' }}>
                <Option value="0">Low</Option>
                <Option value="1">Medium</Option>
                <Option value="2">High</Option>
                <Option value="3">Deafness</Option>
            </Select>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Gender"
        >
          {getFieldDecorator('gender', {
            rules: [{ required: true, message: 'Please select your gender!' }],
          })(
            <Select style={{ width: '30%' }}>
                <Option value="0">Female</Option>
                <Option value="1">Male</Option>
                <Option value="2">Other</Option>
            </Select>
          )}
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          {getFieldDecorator('agreement', {
            valuePropName: 'checked',
          })(
            <Checkbox>I have read the <a href="">agreement</a></Checkbox>
          )}
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit" className="button button__create">Register</Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedRegistrationForm = Form.create()(RegistrationForm);

export default WrappedRegistrationForm;
