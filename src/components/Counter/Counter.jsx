import { Component } from "react";


class Counter extends Component {
    render(){
        const {countPluse, countMinuse, countReset} = this.props
        return(
            <>
            <div>
            <button onClick={countPluse} type="button">+1</button>
            <button onClick={countMinuse} type="button">-1</button>
            <button onClick={countReset} type="button">reset</button>
            </div>
            </>
        )
    }
}

export default Counter