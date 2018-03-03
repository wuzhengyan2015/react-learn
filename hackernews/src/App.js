import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button'
import Search from './components/Search'
import Table from './components/Table'
import ButtonWithLoading from './components/ButtonWithLoading'
import {
  DEFAULT_QUERY,
  DEFAULT_HPP,
  PATH_BASE,
  PATH_SEARCH,
  PARAM_SEARCH,
  PARAM_PAGE,
  PARAM_HPP
} from './constants/index'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      result: null,
      searchTerm: DEFAULT_QUERY,
      lock: false,
      loading: false
    }
    this.searchChange = this.searchChange.bind(this)
    this.onDismiss = this.onDismiss.bind(this)
    this.onSearchSubmit = this.onSearchSubmit.bind(this)
  }
  setSearchTopStories(result){
    if(this.lock) return
    const {hits, page} = result
    const oldHits = page !== 0 
      ? this.state.result.hits
      : []
    const updatedHits = [
      ...oldHits,
      ...hits
    ] 
    this.setState({result:  {hits: updatedHits, page}, loading: false})
  }
  fetchSearchTopStories(searchTerm, page=0){
    this.setState({loading: true})
    fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}${page}&${PARAM_HPP}${DEFAULT_HPP}`)
      .then(res => res.json())
      .then(result=>this.setSearchTopStories(result))
      .catch(e => e)
  }
  componentDidMount () {
    this.fetchSearchTopStories(this.state.searchTerm) 
  }
  componentWillUnmount(){  
    this.lock = true;  
  } 
  onSearchSubmit(e){
    e.preventDefault()
    this.fetchSearchTopStories(this.state.searchTerm) 
  }
  searchChange(e) {
    this.setState({searchTerm: e.target.value})
  }
  onDismiss(id) {
    const isNotId = item => item.objectID !== id
    const updatedList = this.state.result.hits.filter(isNotId)
    this.setState({result: {...this.state.result, hits: updatedList} })
  }
  render() {
    const {result, searchTerm} = this.state
    const page = (result && result.page) || 0
    return (
      <div className="page">
        <div className="interactions">
        <Search value={searchTerm} onChange={this.searchChange} onSubmit={this.onSearchSubmit}>search</Search>
        </div>
        <div className="interactions">
          {result && <Table list={result.hits} searchTerm={searchTerm} onDismiss={this.onDismiss}/>}
        </div>
        <div className="interactions">
          <ButtonWithLoading isLoading={this.state.loading } onClick={() => this.fetchSearchTopStories(searchTerm, page+1)}>More</ButtonWithLoading>
        </div>
      </div>
    );
  }
}

export default App;
