import { Component } from "react";



class Counter extends Component {
    render(){

        return(
            <div>
                <h2>лічильник {this.props.count}</h2>
                <div>
                    <button type="button" onClick={this.props.onDecrement}>-1</button>
                    <button type="button" onClick={this.props.onIncrement}>+1</button>
                    <button type="button" onClick={this.props.onReset}>reset</button>      
                </div>
            </div>
        )
    }
}


export default Counter