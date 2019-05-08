import React from 'react';
import {Form, Icon, Input, Button, Checkbox} from 'antd';
import './Login.less'

class Login extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
    console.log( this.props.form.getFieldsValue())
    console.log(this.props.history)
    this.props.history.replace(`/home`)
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className='loginBox'>
        <h1>react+antD</h1>
        <Form onSubmit={this.handleSubmit}>
          <Form.Item
            label='用户名'
            labelCol={{span: 4}}
            wrapperCol={{span: 19, offset: 1}}>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: 'Please input your username!' }],
              initialValue: 'admin',
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
            )}
          </Form.Item>
          <Form.Item
            label='密码'
            labelCol={{span: 4}}
            wrapperCol={{span: 19, offset: 1}}>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
              initialValue: '123456',
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(
              <Checkbox>Remember me</Checkbox>
            )}
            <Button type="primary" htmlType="submit" className="login-form-button">登录</Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(Login);

export default WrappedNormalLoginForm
