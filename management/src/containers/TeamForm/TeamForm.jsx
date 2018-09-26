import React, { Component } from 'react'
import {
  Form, DatePicker, Button, Input, Select
} from 'antd'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getLeagues } from '../../redux/actions/league'

const FormItem = Form.Item
const Option = Select.Option

@connect(
  state => ({ leagues: state.leagues }),
  dispatch => bindActionCreators({ getLeagues }, dispatch)
)
class TeamForm extends Component {
  componentDidMount = () => {
    const { getLeagues } = this.props
    getLeagues()
  }

  handleSubmit = (e) => {
    const { form, submit } = this.props
    e.preventDefault()
    form.validateFields((err, fieldsValue) => {
      if (err) {
        return;
      }

      const value = {
        ...fieldsValue,
        create_time: fieldsValue.create_time.format('YYYY')
      }
      submit(value)
    })
  }

  render() {
    const { form: { getFieldDecorator }, leagues } = this.props
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 }
      }
    }
    const config = {
      name: {
        rules: [{ type: 'string', required: true, message: '请填写球队名称' }]
      },
      date: {
        rules: [{ type: 'object', required: true, message: '请选择成立年份' }]
      },
      league: {
        rules: [{ type: 'string', required: true, message: '请选择联赛' }]
      }
    }
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem
          {...formItemLayout}
          label="名称"
        >
          {getFieldDecorator('name', config.name)(
            <Input placeholder="请填写名称" />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="全称"
        >
          {getFieldDecorator('full_name')(
            <Input placeholder="请填写全称" />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="外文名"
        >
          {getFieldDecorator('en_name')(
            <Input placeholder="请填写外文名" />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="成立年份"
        >
          {getFieldDecorator('create_time', config.date)(
            <DatePicker placeholder="请选择日期" mode="date" />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="联赛"
        >
          {getFieldDecorator('league', config.league)(
            <Select placeholder="请选择联赛">
              {
                leagues.list.items.map(item => (
                  <Option value={item.name}
                    key={item.id}
                  >{item.name}
                  </Option>
                ))
              }
            </Select>
          )}
        </FormItem>
        <FormItem
          wrapperCol={{
            xs: { span: 24, offset: 0 },
            sm: { span: 16, offset: 8 },
          }}
        >
          <Button type="primary" htmlType="submit">保存</Button>
        </FormItem>
      </Form>
    )
  }
}

export default Form.create()(TeamForm)
