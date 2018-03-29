import React from 'react'
import { Form, Row, Col, Input, Tooltip, Icon, Select, Checkbox, Button } from 'antd';
import axios from 'axios'
import './contact.css'

const { TextArea } = Input;
const FormItem = Form.Item;

class Contact extends React.Component {

    state = {
        confirmDirty: false
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
          if (!err) {
            // console.log('Received values of form: ', values);
            axios.post('', values)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
          }
        });
    }

    handleConfirmBlur = (e) => {
        const value = e.target.value;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    }

    render () {
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
        return (
            <React.Fragment>
                 <Form onSubmit={this.handleSubmit} className="form-contact">
                    <div className="form-contact__items">
                        <div className="row">
                            <div className="col-sm-12 col-md-6">
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
                                        rules: [{ required: true,
                                            message: 'Please input your name!',
                                            whitespace: true }],
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
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <FormItem
                                    {...formItemLayout}
                                    label="Message"
                                    >
                                    {getFieldDecorator('message', {
                                            rules: [{
                                            required: true, message: 'Please input your Message!',
                                            }],
                                        })(
                                            <TextArea
                                            size='large' 
                                            placeholder="Input your message" 
                                            autosize={{ minRows: 5, maxRows: 80 }} />
                                        )}
                                </FormItem>
                            </div>
                        </div>
                    <div className="row">
                        <div className="col-md-10">
                            <FormItem {...tailFormItemLayout}>
                                <Button type="primary" htmlType="submit" className="button button__create">Register</Button>
                            </FormItem>
                        </div>
                    </div> 
                </div> 
                 </Form>
            </React.Fragment>
        );
    }
}

const WrappedRegistrationForm = Form.create()(Contact);

export default WrappedRegistrationForm; 