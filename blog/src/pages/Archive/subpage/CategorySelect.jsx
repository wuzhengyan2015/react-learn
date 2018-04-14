import React, { Component } from 'react'
import { Select } from 'antd';
const Option = Select.Option;

export default class CategorySelect extends Component {
    shouldComponentUpdate(nextProps,nextState){
        if(nextProps.categories.length === this.props.categories.length && nextProps.categories == this.props.categories){
          return false
        }
        return true
    }
    render() {
        const {categories, handleChange} = this.props
        return (
            <div className="category-select">
                <Select defaultValue="" style={{ width: 120 }} onChange={handleChange}>
                    <Option value="">全部</Option>
                    {
                        categories.map((item) => {
                            return <Option key={item.id} value={item.category}>{item.category}</Option>
                        })
                    }
                </Select>
            </div>
        )
    }
}