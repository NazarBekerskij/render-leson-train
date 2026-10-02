import './App.css'
import { Component } from 'react'
import Counter from './components/Counter/Counter'


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



  


  

  render(){
    return(
      <div>
        <h1>Інтерактивна панель керування</h1>
        <Counter count={this.state.count} 
        onIncrement={this.handleIncrement}
        onDecrement={this.handleDecrement}
        onReset={this.handleReset}
        />
      </div>
    )
  }
}



export default App