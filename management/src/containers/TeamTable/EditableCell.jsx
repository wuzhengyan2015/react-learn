import React, { Component } from 'react'
import { Input, InputNumber, Form } from 'antd'
import { EditableContext } from './EditableContext'

const FormItem = Form.Item

class EditableCell extends Component {
  getInput = () => {
    const { inputType } = this.props
    if (inputType === 'number') {
      return <InputNumber />;
    }
    return <Input />;
  }

  render() {
    const {
      editing,
      dataIndex,
      title,
      inputType,
      record,
      index,
      ...restProps
    } = this.props;
    return (
      <EditableContext.Consumer>
        {(form) => {
          const { getFieldDecorator } = form;
          return (
            <td {...restProps}>
              {editing ? (
                <FormItem style={{ margin: 0 }}>
                  {getFieldDecorator(dataIndex, {
                    rules: [{
                      required: true,
                      message: `Please Input ${title}!`,
                    }],
                    initialValue: record[dataIndex],
                  })(this.getInput())}
                </FormItem>
              ) : restProps.children}
            </td>
          );
        }}
      </EditableContext.Consumer>
    )
  }
}

export default EditableCell
