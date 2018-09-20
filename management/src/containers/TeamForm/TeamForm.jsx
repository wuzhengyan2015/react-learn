import React, { Component } from 'react'
import {
  Form, DatePicker, InputNumber, Button
} from 'antd'

const FormItem = Form.Item

class TeamForm extends Component {
  handleSubmit = (e) => {
    const { form } = this.props
    e.preventDefault()
    form.validateFields((err, fieldsValue) => {
      if (err) {
        return;
      }

      const value = {
        ...fieldsValue,
        'date-picker': fieldsValue['date-picker'].format('YYYY-MM-DD')
      }
      console.log(value)
    })
  }

  render() {
    const { form: { getFieldDecorator } } = this.props
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    }
    const config = {
      rules: [{ type: 'object', required: true, message: 'Please select time!' }]
    }
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem
          {...formItemLayout}
          label="DatePicker"
        >
          {getFieldDecorator('date-picker', config)(
            <DatePicker />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="InputNumber"
        >
          {getFieldDecorator('input-number', { initialValue: 0 })(
            <InputNumber />
          )}
          <span className="ant-form-text"> teams</span>
        </FormItem>
        <FormItem
          wrapperCol={{
            xs: { span: 24, offset: 0 },
            sm: { span: 16, offset: 8 },
          }}
        >
          <Button type="primary" htmlType="submit">Submit</Button>
        </FormItem>
      </Form>
    )
  }
}

export default Form.create()(TeamForm)
