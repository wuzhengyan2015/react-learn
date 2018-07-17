import React, { Component } from 'react'
import {
  Form, Icon, Input, Button, Checkbox
} from 'antd'
import './style.scss'

const FormItem = Form.Item

class NormalLoginForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const { form, onLoginRequest } = this.props
    form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
        onLoginRequest(values)
      }
    })
  }

  render() {
    const { form: { getFieldDecorator } } = this.props
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: '请输入用户名' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入密码' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>Remember me</Checkbox>
          )}
          <Button type="primary" htmlType="submit" className="login-form-button">
            登录
          </Button>
        </FormItem>
      </Form>
    )
  }
}

export default Form.create()(NormalLoginForm)
