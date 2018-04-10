import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getDropList } from '../../redux/actions/drop'
import {Pagination} from 'antd'
import DropList from '../../components/DropList/DropList'

class Drop extends Component {
    constructor(props) {
        super(props)
        this.state = {
            current: 1
        }
        this.pageChangeHandler = this.pageChangeHandler.bind(this)
    }
    componentDidMount() {
        this.props.getDropList()
    }
    pageChangeHandler(page) {
        this.setState({
            current: page
        })
        this.props.getDropList(page)
    }
    render() {
        return (
            <div>
                {
                    !this.props.drops.body
                        ? <div>loading</div>
                        : <div>
                            <DropList data={this.props.drops.body} />
                            <div style={{ textAlign: "center" }}>
                                <Pagination onChange={this.pageChangeHandler} current={this.state.current} defaultCurrent={1} defaultPageSize={8} total={10} />
                            </div>
                        </div>
                }
            </div>
        )
    }
}

const mapStateToProps = function (state) {
    return {
        drops: state.drops
    }
}

const mapDispatchToProps = function (dispatch) {
    return {
        getDropList: (page, limit) => {
            dispatch(getDropList(page, limit))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Drop)