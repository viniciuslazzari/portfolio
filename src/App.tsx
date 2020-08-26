import React from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "./styles/global";
import "./styles/index.css";

import light from "./styles/themes/light";
import dark from "./styles/themes/dark";

import en_uk from "./lang/en-uk.json";
import pt_pt from "./lang/pt-pt.json";
import pt_br from "./lang/pt-br.json";

interface IProps { }

interface IState {
    theme: typeof light;
    language: typeof en_uk;
}

class App extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            theme: light,
            language: en_uk,
        };
    }

    languages = [en_uk, pt_pt, pt_br];
    themes = [light, dark]

    async componentWillMount() {
        let storageTheme = await localStorage.getItem("themeTitle");
        if (storageTheme) {
            let updatedTheme = this.themes.filter(theme => { return theme.title === storageTheme })[0];

            this.setState({ theme: updatedTheme });
        }

        let storageLanguage = await localStorage.getItem("languageTitle");
        if (storageLanguage) {
            let updatedLanguage = this.languages.filter(language => { return language.title === storageLanguage })[0];

            this.setState({ language: updatedLanguage });
        }
    }

    toggleTheme = () => {
        let updatedTheme = this.themes.filter(theme => { return theme.title === this.state.theme.nextTheme })[0];

        localStorage.setItem("themeTitle", updatedTheme.title);
        this.setState({ theme: updatedTheme });
    }

    toggleLanguage = () => {
        let updatedLanguage = this.languages.filter(language => { return language.title === this.state.language.nextLanguage })[0];

        localStorage.setItem("languageTitle", updatedLanguage.title);
        this.setState({ language: updatedLanguage });
    }

    render() {
        const language = this.state.language;

        return (
            < ThemeProvider theme={this.state.theme} >
                <GlobalStyle />
                <div className="container clearfix">
                    <header>
                        <nav className="header-buttons">
                            <button onClick={this.toggleTheme} className="theme-button"> <img className="theme-icon" alt="" src={this.state.theme.icon}></img></button>
                            {this.state.theme.title === "light" ?
                                <button onClick={this.toggleLanguage} className="language-button"> <img className="language-icon" alt="" src={this.state.language.lightThemeIcon}></img> </button>
                                :
                                <button onClick={this.toggleLanguage} className="language-button"> <img className="language-icon" alt="" src={this.state.language.darkThemeIcon}></img> </button>
                            }
                        </nav>

                        <nav className="header-links">
                            <ul>
                                <li><a href="#about"> {language.header.about} </a></li>
                                <li><a href="#skills"> {language.header.skills} </a></li>
                                <li><a href="#projects"> {language.header.projects} </a></li>
                                <li><a href="#contact"> {language.header.contact} </a></li>
                            </ul>
                        </nav>
                    </header>

                    <div className="site-sections">
                        <div className="first-section">
                            <div className="first-section-label">
                                <p className="first-section-title"> Vinícius Lazzari </p>
                                <p className="first-section-description"> {language.firstSection.subtitle} </p>

                                <div className="first-section-icons">
                                    <img alt="" src={this.state.theme.paths.social.github}></img>
                                    <img alt="" src={this.state.theme.paths.social.linkedin}></img>
                                    <img alt="" src={this.state.theme.paths.social.facebook}></img>
                                    <img alt="" src={this.state.theme.paths.social.discord}></img>
                                </div>
                            </div>
                        </div>

                        <footer>
                        </footer>
                    </div>
                </div>
            </ThemeProvider >
        );
    }
}

export default App;