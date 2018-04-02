import React, {Component} from 'react'
import '_/styles/index.scss'
import '_/styles/header.scss'
import '_/styles/menu.scss'
import Author from  '_/components/Author'
import Category from  '_/components/Category'
import Book from  '_/components/Book'
import {HashRouter as Router, Route, Link} from 'react-router-dom'

class App extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }
    render(){
        return(
            <Router>
                <div>
                    <div className="header-container">
                        <Link to='/author'>作者</Link>
                        <Link to='/category'>分类</Link>
                        <Link to='/book'>书籍</Link>
                    </div>
                    <div className="menu-container">
                        <Route path='/author' component={Author}/>
                        <Route path='/category' component={Category}/>
                        <Route path='/book' component={Book}/>
                    </div>
                </div>
            </Router>
        )
    }
}

export default App