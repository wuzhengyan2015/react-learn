import React, { Component } from 'react'
import apiService from '../../services/index'
import Table from '../../components/Table/Table'

const columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
  render: text => <a>{text}</a>,
}, {
  title: 'Age',
  dataIndex: 'age',
  key: 'age',
}, {
  title: 'Address',
  dataIndex: 'address',
  key: 'address',
}, {
  title: 'Tags',
  key: 'tags',
  dataIndex: 'tags',
  render: tags => (
    <span>
      {tags.map(tag => <span color="blue" key={tag}>{tag}</span>)}
    </span>
  ),
}, {
  title: 'Action',
  key: 'action',
  render: (text, record) => (
    <span>
      <a>Invite {record.name}</a>
      <a>Delete</a>
    </span>
  ),
}];

const data = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
  tags: ['nice', 'developer'],
}, {
  key: '2',
  name: 'Jim Green',
  age: 42,
  address: 'London No. 1 Lake Park',
  tags: ['loser'],
}, {
  key: '3',
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
  tags: ['cool', 'teacher'],
}]

/* eslint-disable */
class LeagueForm extends Component {
  componentDidMount () {
    apiService.getLeagues().then((response) => {
      console.log(response)
    })
  }
  render() {
    return (
      <div className="league-form">
        <Table dataSource={data} columns={columns}/>
      </div>
    )
  }
}

export default LeagueForm