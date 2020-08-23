import React from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "./styles/global";
import "./styles/index.css";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";
import usePersistedState from "./utils/usePersistedState"

function App() {
    const [theme, setTheme] = usePersistedState("theme", light);

    const toggleTheme = () => {
        setTheme(theme.title === "light" ? dark : light)
    }

    return (
        <ThemeProvider theme={theme}>
            <div className="container clearfix">
                <GlobalStyle />
                <header>
                    <nav className="header-buttons">
                        <button onClick={toggleTheme} className="theme-button"> <img className="theme-icon" src="/sun-icon.svg"></img> </button>
                        <button className="language-button"> <img className="language-icon" src="/brasil-icon.svg"></img> </button>
                    </nav>

                    <nav className="header-links">
                        <ul>
                            <li><a href="#about"> About me </a></li>
                            <li><a href="#skills"> Skills </a></li>
                            <li><a href="#projects"> Projects </a></li>
                            <li><a href="#contact"> Contact me </a></li>
                        </ul>
                    </nav>
                </header>
            </div>
        </ThemeProvider>
    );
}

export default App;
