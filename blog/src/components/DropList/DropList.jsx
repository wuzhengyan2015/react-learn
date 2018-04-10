import React, { Component } from 'react'
import Item from './Item/Item'
import './style.scss'
import { Row, Col, Modal } from 'antd';

export default class DropList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            popvisible: false,
            drop: {}
        }
        this.closepop = this.closepop.bind(this)
    }
    closepop() {
        this.setState({
            popvisible: false
        })
    }
    showPop(drop) {
        this.setState({
            popvisible: true,
            drop: drop
        })
    }
    render() {
        const _this = this
        return (
            <div className="ui-drop-list">
                <Row gutter={16}>
                    {
                        this.props.data.map(function (drop) {
                            const itemClick = _this.showPop.bind(_this, drop)
                            return (
                                <Col key={drop.id} span={12} onClick={itemClick}>
                                    <Item data={drop} />
                                </Col>
                            )
                        })
                    }
                </Row>
                <Modal
                    visible={this.state.popvisible}
                    title={this.state.drop.title}
                    footer={null}
                    onCancel={this.closepop}
                ><div dangerouslySetInnerHTML={{ __html: this.state.drop.detail }}></div>
                </Modal>
            </div>
                )
            }
}