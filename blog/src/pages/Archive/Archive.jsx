import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getArchiveList, getCategoryList } from '../../redux/actions/archive'
import './style.scss'
import CategorySelect from './subpage/CategorySelect'
import ArchiveTimeline from './subpage/ArchiveTimeline'

class Archive extends Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }
    componentDidMount() {
        this.props.getArchiveList()
        this.props.getCategoryList()
    }
    handleChange(value) {
        this.props.getArchiveList(value)
    }
    render() {
        const categories = this.props.archive.categories.body || []
        const items = this.props.archive.items.body || []
        return (
            <div className="ui-archive">
                <div className="ui-archive-header">
                    <CategorySelect categories={categories} handleChange={this.handleChange}/>
                </div>
                <div className="ui-archive-body">
                    <ArchiveTimeline isLoading={this.props.archive.items.isPending} data={items} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    archive: state.archive
})

const mapDispatchToProps = dispatch => ({
    getArchiveList: (category) => {
        dispatch(getArchiveList(category))
    },
    getCategoryList: () => {
        dispatch(getCategoryList())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Archive)