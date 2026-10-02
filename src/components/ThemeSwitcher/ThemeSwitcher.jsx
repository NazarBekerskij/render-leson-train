import { Component } from "react";

class ThemeSwithcer extends Component {
    render() {

    const { isDark } = this.props;

    const themeStyle = {
        backgroundColor: isDark ? "#222222" : "#ffffff",
        color: isDark ? "#ffffff" : "#222222",
        }

        return (
            <div style={themeStyle}>
                <h2>Перемикач теми</h2>
                <button type="button" onClick={this.props.onToggle}>
                {isDark ? "Увімкнути світлу тему" : "Увімкнути темну тему"}
                </button>
            </div>
        )
    }
}

export default ThemeSwithcer;