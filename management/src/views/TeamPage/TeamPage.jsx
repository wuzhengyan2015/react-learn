import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Modal } from 'antd'
import TeamForm from '../../containers/TeamForm/TeamForm'
import TeamTable from '../../containers/TeamTable/TeamTable'
import { getTeams, addTeams } from '../../redux/actions/teams'
import './style.scss'

const addFormWidth = 680

@connect(
  null,
  dispatch => bindActionCreators({
    getTeams,
    addTeams
  }, dispatch)
)
class TeamPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false
    }
    this.page = 1
    this.pageSize = 99
  }

  componentDidMount() {
    this.getTeams()
  }

  getTeams() {
    const { getTeams } = this.props
    getTeams(this.page, this.pageSize)
  }

  addTeams = () => {
    this.setState({
      visible: true
    })
  }

  handleModalCancel = () => {
    this.setState({ visible: false })
  }

  handleAddSubmit = (params) => {
    const { getTeams, addTeams } = this.props
    addTeams(params).then(() => {
      this.handleModalCancel()
      getTeams()
    })
  }

  render() {
    const { visible } = this.state
    return (
      <div>
        <div className="teams-page__header">
          <div className="teams-page__add">
            <a className="ui-btn" onClick={this.addTeams}>添加</a>
          </div>
        </div>
        <TeamTable />
        <Modal title="添加球队"
          visible={visible}
          onCancel={this.handleModalCancel}
          width={addFormWidth}
          footer={null}
        >
          { visible && <TeamForm submit={this.handleAddSubmit} /> }
        </Modal>
      </div>
    )
  }
}

export default TeamPage
