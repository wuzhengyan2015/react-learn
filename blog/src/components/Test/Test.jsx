import React, {Component} from 'react'
import 'whatwg-fetch'
import {connect} from 'react-redux'
import {getPost} from '../../redux/store'

class Test extends Component {
    render () {
        console.log(this.props.data)
        return (
            <div>
                <button onClick={() => {this.props.getPost(1)}}>请求</button>
                {this.props.data.isPending && <div>loading</div>}
                {this.props.data.body && <div>{this.props.data.body.title + ' ' + this.props.data.body.author}</div>}
            </div>
        )
    }
}

const mapStateToProps = function (state) {
    return {
        data: state
    }
}

const mapDispatchToProps = function(dispatch) {
    return {
        getPost: function(id) {
            dispatch(getPost(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Test)