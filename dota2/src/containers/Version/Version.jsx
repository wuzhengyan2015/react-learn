import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getVersions} from '../../redux/actions/versions'
import './style.scss'

class Version extends Component {
    componentDidMount () {
        this.props.getVersions()
    }
    render () {
        const {body:versions = []} = this.props.versions
        return (
            <div className="versions_wrapper">
                <ul className="version-list">
                    { 
                        versions.map((item, index) => {
                            return (
                                <li className="version-item" key={index}>
                                    <span className="version-item-time">{item.time}</span>
                                    <span className="version-item-title">{item.title}</span>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProp = (state) => ({
    versions: state.versions
})

const mapDispatchToProp = (dispatch) => ({
    getVersions: () => {
        dispatch(getVersions())
    }
})

export default connect(mapStateToProp, mapDispatchToProp)(Version)
