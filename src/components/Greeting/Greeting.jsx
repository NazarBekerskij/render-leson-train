import { Component } from "react";

class Greeting extends Component {
    state = {
    inputValue: "",
    submittedName: "",
    erro: false
    }



    handleInputeChange = (event) => {
        this.setState(() => ({
            inputValue: event.target.value,
            error: false,
        }))
    }


    render(){
        return(
            <h1>   </h1>
        )
    }
}


export default Greeting 