import React, { Component } from 'react'
import fetch from 'refetch'

class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {
                list: []
            }
        }
    }
    componentDidMount() {
        fetch.get('/api/data').then((res) => {
            this.setState({ data: res })
        })
    }
    render() {
        if (!this.state.data) return null
        return (
            <table>
                <tr>
                    <th>ID</th>
                    <th>姓名</th>
                    <th>国籍</th>
                    <th>生日</th>
                </tr>
                {
                    this.state.data.list.map(function(item){
                        return (
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.nationality}</td>
                                <td>{item.birthday}</td>
                            </tr>
                        )
                    })
                }
            </table>
        )
    }
}

export default List