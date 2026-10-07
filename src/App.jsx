import './App.css'
import { Component } from 'react'
import Counter from './components/Counter/Counter'
import Title from './components/Title/Title'

import ThemeSwithcer from './components/ThemeSwitcher/ThemeSwitcher'

class App extends Component {

  state = {
    count: 0,
  }


  handlePluse = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }))
  }

  handleMinuse = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1
    }))
  }



  handleReset = () => {
    this.setState(() => ({
      count: 0,
    }))
  }

  render(){
    return(
      <>
      <Title/>
      <p>{this.state.count}</p>
      <Counter
      countPluse={this.handlePluse}
      countMinuse={this.handleMinuse}
      countReset={this.handleReset}
      />



      <ThemeSwithcer/>
      </>
    )
  }
}



export default App