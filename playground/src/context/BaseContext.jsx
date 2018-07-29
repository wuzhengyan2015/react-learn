import React, {Component} from 'react'
const ThemeContext = React.createContext({
  theme: 'light',
  changeTheme: () => {}
})

class App extends Component {
  constructor () {
    super()
    this.changeTheme = this.changeTheme.bind(this)
    this.state = {
      theme: 'light',
      changeTheme: this.changeTheme
    }
  }
  changeTheme () {
      this.setState({
          theme: 'dark'
      })
  }
  render () {
    return (
      <ThemeContext.Provider value={this.state}>
        <Toolbar />
      </ThemeContext.Provider>
    )
  }
}

function Toolbar () {
  return (
    <div>
      <ThemeButton />
    </div>
  )
}

function ThemeButton (props) {
  return (
    <ThemeContext.Consumer>
      { ({theme, changeTheme}) => <button {...props} onClick={changeTheme}>{theme}</button> }
    </ThemeContext.Consumer>
  )
}

export default App