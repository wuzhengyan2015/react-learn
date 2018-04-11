import React, { Component } from 'react'
import { Timeline } from 'antd';
import './style.scss'
import { connect } from 'react-redux'
import {getLifeList} from '../../redux/actions/life'

class Life extends Component {
    componentDidMount () {
        this.props.getLifeList()
    }
    render() {
        const list = this.props.lifes.body || []
        return (
            <div className="ui-life">
                <Timeline pending={this.props.lifes.isPending ? 'pending' : ''}>
                    {
                        list.map((item, index) => {
                            return (
                                <Timeline.Item key={index}>{item.content} &nbsp;&nbsp; {item.created_at}</Timeline.Item>
                            )
                        })
                    }
                </Timeline>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    lifes: state.lifes
})

const mapDispatchToProps = (dispatch) => ({
    getLifeList: (page, limit) => {
        dispatch(getLifeList(page, limit))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Life)