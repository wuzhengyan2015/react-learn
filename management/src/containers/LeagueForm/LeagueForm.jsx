import React, { Component } from 'react'
import { Modal } from 'antd';
import apiService from '../../services/index'
import Table from '../../components/Table/Table'
import Pagination from '../../components/Pagination/Pagination'
import './style.scss'

const getColumns = (edit, del) => (
  [
    { title: '名称', dataIndex: 'name', key: 'name' },
    { title: '成立年份', dataIndex: 'create_time', key: 'create_time' },
    { title: '全称', dataIndex: 'full_name', key: 'full_name' },
    { title: '外文名', dataIndex: 'en_name', key: 'en_name' },
    { title: '国家', dataIndex: 'country', key: 'country' },
    { title: '球队数目', dataIndex: 'team_num', key: 'team_num' },
    {
      title: '操作',
      key: 'action',
      render: () => (
        <span>
          <a className="league-action" onClick={edit}>编辑</a>
          <a className="league-action" onClick={del}>删除</a>
        </span>
      ),
    }
  ]
)

class LeagueForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      leagues: [],
      total: 0,
      ModalText: 'Content of the modal',
      visible: false,
      confirmLoading: false,
    }
    this.pageSize = 10
  }

  componentDidMount() {
    this.getLeagues(1, this.pageSize)
    this.getTotal()
  }

  getLeagues = (page, limit) => {
    apiService.getLeagues(page, limit).then((response) => {
      let leagues = response.data
      leagues = leagues.map((item) => {
        const keyItem = item
        keyItem.key = item.id + 1
        return keyItem
      })
      this.setState({
        leagues
      })
    })
  }

  getTotal = () => {
    apiService.getLeagues().then((response) => {
      this.setState({
        total: response.data.length
      })
    })
  }

  handlePageTurn = (page, limit) => {
    this.getLeagues(page, limit)
  }

  showModal = () => {
    this.setState({
      visible: true,
    })
  }

  handleOk = () => {
    this.setState({
      ModalText: 'The modal will be closed after two seconds',
      confirmLoading: true,
    });
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false,
      });
    }, 2000)
  }

  handleCancel = () => {
    console.log('Clicked cancel button');
    this.setState({
      visible: false,
    })
  }

  render() {
    const {
      leagues, total, visible, confirmLoading, ModalText
    } = this.state
    return (
      <div className="league-form">
        <Table dataSource={leagues} columns={getColumns(this.showModal, () => {})} />
        <div className="form-pagination">
          <Pagination total={total} pageSize={this.pageSize} onChange={this.handlePageTurn} />
        </div>
        <Modal title="Title"
          visible={visible}
          onOk={this.handleOk}
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel}
        >
          <p>{ModalText}</p>
        </Modal>
      </div>
    )
  }
}

export default LeagueForm
