import { Component } from "react";


class Counter extends Component {
    render(){
        const {counterPluse, counterMinuse, counterReset} = this.props
        return(
            <>
            <div>
                <button onClick={counterPluse} type="button">+1</button>
                <button onClick={counterMinuse} type="button">-1</button>
                <button onClick={counterReset} type="button">reset</button>
            </div>
            </>
        )
    }
}


export default Counter