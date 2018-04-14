import React, { Component } from 'react'
import {Icon, Timeline } from 'antd';
import {Link} from 'react-router-dom';
import WithLoading from '../../../components/WithLoading/WithLoading'

class ArchiveTimeline extends Component {
    constructor (props) {
        super(props)
    }
    shouldComponentUpdate(nextProps,nextState){
        if(nextProps.data.length === this.props.data.length && nextProps.data == this.props.data){
            return false
        }
        return true
    }
    toTimeLine(items) {
        if (items.length === 0) return []
        var array = items.concat()
        array.sort(function (a, b) {
            return a.update_time < b.update_time
        })
        var time = array[0].update_time.substring(0, 7)
        var final = [{ time: time }]
        for (let i = 0; i < array.length; i++) {
            if (array[i].update_time.indexOf(time) === -1) {
                time = array[i].update_time.substring(0, 7)
                final.push({ time: time })
            }
            final.push(array[i])
        }
        return final
    }
    render() {
        const items = this.props.data
        return (
            <div className="archive-timeline">
                {
                    this.toTimeLine(items).map((item, index) => {
                        if (item.time) {
                            return <Timeline.Item key={index} dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />} color="red">{item.time}</Timeline.Item>
                        } else {
                            return <Timeline.Item key={index}><Link to={`/article/${item.id}`} href="javascript:void(0)">{item.title}</Link></Timeline.Item>
                        }
                    })
                }
            </div>
        )
    }
}

export default WithLoading(ArchiveTimeline)