import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReduxActionsDemo from './redux-actions/index'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ReduxActionsDemo />
      </div>
    );
  }
}

class CustomTextInput extends React.Component {  
  render () {
    return (  
      <div>  
        <input ref={this.props.inputRef} value="12" readOnly/>  
      </div>  
    );
  }
    
}  
  
class Parent extends React.Component {
  render() {  
    setTimeout(() => {
      console.log(this.inputElement && this.inputElement.value)
    }, 1500);
    return (  
      <CustomTextInput  
        inputRef={el => this.inputElement = el}  
      />  
    );  
  }  
}  

class Parent2 extends React.Component {
  constructor () {
    super()
    this.formInput = React.createRef()
  }
  render() {  
    setTimeout(() => {
      console.log(this.formInput.current && this.formInput.current.value)
    }, 1500);
    return (  
      <CustomTextInput  
        inputRef={this.formInput}  
      />   
    )
  }
}

export default App;
