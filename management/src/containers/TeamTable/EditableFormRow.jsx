import React from 'react'
import { Form } from 'antd'
import { EditableContext } from './EditableContext'

const EditableRow = ({ form, index, ...props }) => (
  <EditableContext.Provider value={form}>
    <tr {...props}></tr>
  </EditableContext.Provider>
)

const EditableFormRow = Form.create()(EditableRow)

export default EditableFormRow
