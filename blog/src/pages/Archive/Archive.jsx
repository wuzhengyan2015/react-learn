import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getArchiveList, getCategoryList } from '../../redux/actions/archive'
import { Select, Icon, Timeline } from 'antd';
import {Link} from 'react-router-dom'
const Option = Select.Option;
import './style.scss'

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
    handleItem(items) {
        if (items.length === 0) return []
        var array = items.concat() 
        array.sort(function(a, b){
            return a.update_time < b.update_time
        })
        var time = array[0].update_time.substring(0, 7)
        var final = [{time: time}]
        for (let i = 0; i < array.length; i++) {
            if (array[i].update_time.indexOf(time) === -1) {
                time = array[i].update_time.substring(0, 7)
                final.push({time: time})
            }
            final.push(array[i])
        }
        return final
    }
    render() {
        const categories = this.props.archive.categories.body || []
        const items = this.props.archive.items.body || []
        return (
            <div className="ui-archive">
                <div className="ui-archive-header">
                    <Select defaultValue="" style={{ width: 120 }} onChange={this.handleChange}>
                        <Option value="">全部</Option>
                        {
                            categories.map((item) => {
                                return <Option key={item.id} value={item.category}>{item.category}</Option>
                            })
                        }
                    </Select>
                </div>
                <div className="ui-archive-body">
                    {
                        this.props.archive.items.isPenging
                            ? <div>Loading</div>
                            : <div>{
                                this.handleItem(items).map((item, index) => {
                                    if (item.time) {
                                        return <Timeline.Item key={index} dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />} color="red">{item.time}</Timeline.Item>
                                    } else {
                                        return <Timeline.Item key={index}><Link to={`/article/${item.id}`} href="javascript:void(0)">{item.title}</Link></Timeline.Item>
                                    }
                                })
                            }
                            </div>
                    }
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