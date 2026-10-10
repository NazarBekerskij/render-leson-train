import { Component } from "react";

class Greeting extends Component {
    state = {
    inputValue: "",
    submittedName: "",
    error: false
    }



    handleInputChange = (event) => {
        this.setState(() => ({
            inputValue: event.target.value,
            error: false,
        }))
    }


    handleSubmit = () => {
        if (this.state.inputValue.trim() === "") {
            this.setState({ error: true, submittedName: "" });
            return;
        }

        this.setState({
            submittedName: this.state.inputValue,
            inputValue: "",
            error: false
        });
    }

   render() {
        return (
            <div>
                <input 
                    type="text" 
                    value={this.state.inputValue} 
                    onChange={this.handleInputChange} 
                />
                <button onClick={this.handleSubmit}>Привітатися</button>

                {this.state.error && <p>Будь ласка, введи своє ім'я.</p>}

                {this.state.submittedName && (
                <p>Привіт, {this.state.submittedName}! Радий тебе бачити!</p>
                )}
            </div>
        );
    }
}

export default Greeting;