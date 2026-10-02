import './App.css'
import { Component } from 'react'
import Counter from './components/Counter/Counter'


import ThemeSwithcer from './components/ThemeSwitcher/ThemeSwitcher'



class App extends Component {

  state = {
    count: 0,
    isDark: false,
  }


  handleIncrement = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }))
  }


  handleDecrement = () => {
    this.setState((prevState) => ({
      count: prevState.count -1,
    }))
  }
  

  handleReset = () => {
    this.setState({
      count: 0,
    })
  }

/////////////////////////////////////////////////// 2 завдання



  handleToggle = () => {
    this.setState((prevState) => ({
      isDark: !prevState.isDark
    }))
  }


  

  render(){
    return(
      <>
      <div>
        <h1>Інтерактивна панель керування</h1>
        <Counter count={this.state.count} 
        onIncrement={this.handleIncrement}
        onDecrement={this.handleDecrement}
        onReset={this.handleReset}
        />
      </div>




      <div>
      <h2>Інтерактивна панель керування</h2>
      <ThemeSwithcer
      isDark={this.state.isDark}
      onToggle={this.handleToggle}
      />
      </div>

  </>
    )
  }
}



export default App