import React from "react";
import "./App.css";

function App() {
    return (
        <div className="container clearfix">
            <header>
                <nav className="header-buttons">
                    <button className="theme-button"> <img className="theme-icon" src="/sun-icon.svg"></img> </button>
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
    );
}

export default App;
