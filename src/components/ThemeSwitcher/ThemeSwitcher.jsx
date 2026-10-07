import { Component } from "react";


class ThemeSwithcer extends Component {
    state = {
        isDarkMode: false,
    }



    toggleTheme = () => {
        this.setState((prevState) => ({
            isDarkMode: !prevState.isDarkMode,
        }))
    }


    render(){
        const {isDarkMode} = this.state


        const switcherStyles = {
      backgroundColor: isDarkMode ? '#222222' : '#ffffff',
      color: isDarkMode ? '#ffffff' : '#222222',
      padding: '20px',
      borderRadius: '8px',
      marginTop: '20px',
      transition: 'all 0.3s ease',
    };


        return(
            <>
            <div style={switcherStyles}>
                   
                    <p>{isDarkMode ? "Зараз увімкнено темну тему" : "Зараз увімкнено світлу тему"}</p>
                    <button onClick={this.toggleTheme} type="button">
                        {isDarkMode ? "Увімкнути світлу тему" : "Увімкнути темну тему"}
                    </button>
                </div>
            </>
        )
    }
}


export default ThemeSwithcer