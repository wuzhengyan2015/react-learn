import React, {Component} from 'react'

export default class Item extends Component {
    getTextContent (detail) {
        let div = document.createElement('div')
        div.innerHTML = detail
        return div.textContent
    }
    render () {
        return (
            <div className="ui-drop-item">
                <h3 className="drop-item-title">{this.props.data.title}</h3>
                <div className="drop-item-time">{this.props.data.created_at}</div>
                <div className="drop-item-body">{this.getTextContent(this.props.data.detail)}</div>
            </div>
        )
    }
}