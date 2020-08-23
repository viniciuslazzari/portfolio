import React from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "./styles/global";
import "./styles/index.css";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";

interface IProps {
}

interface IState {
    theme: any;
    themeIcon: string;
}

class App extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            theme: null,
            themeIcon: ""
        };
    }

    sunIcon = "/icons/theme/sun.svg";
    moonIcon = "/icons/theme/moon.svg";
    brazilIcon = "/icons/lang/brazil.svg";

    getDefaultTheme() {
        const storageitem = localStorage.getItem("theme");

        storageitem ? this.setState({ theme: JSON.parse(storageitem) }) : this.setState({ theme: light });
    }

    async componentWillMount() {
        await this.getDefaultTheme();

        this.state.theme.title === "light" ? this.setState({ themeIcon: this.sunIcon }) : this.setState({ themeIcon: this.moonIcon });
    }

    toggleTheme = () => {
        if (this.state.theme.title === "light") {
            this.setState({ theme: dark }, () => {
                localStorage.setItem("theme", JSON.stringify(this.state.theme));
                this.setState({ themeIcon: this.moonIcon });
            })
        } else {
            this.setState({ theme: light }, () => {
                localStorage.setItem("theme", JSON.stringify(this.state.theme));
                this.setState({ themeIcon: this.sunIcon });
            })
        };
    }

    render() {
        return (
            <ThemeProvider theme={this.state.theme} >
                <div className="container clearfix">
                    <GlobalStyle />
                    <header>
                        <nav className="header-buttons">
                            <button onClick={this.toggleTheme} className="theme-button"> <img className="theme-icon" alt="" src={this.state.themeIcon}></img> </button>
                            <button className="language-button"> <img className="language-icon" alt="" src={this.brazilIcon}></img> </button>
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
}

export default App;
