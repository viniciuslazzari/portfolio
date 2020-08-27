import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/global";
import "./styles/index.css";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";

import { SunIcon } from './public/icons/theme/sun.jsx';
import { MoonIcon } from './public/icons/theme/moon.jsx';

import { UkIcon } from './public/icons/lang/uk.jsx';
import { PortugalIcon } from './public/icons/lang/portugal.jsx';
import { BrazilIcon } from './public/icons/lang/brazil.jsx';

import { GithubIcon } from './public/icons/social/github.jsx';
import { LinkedinIcon } from './public/icons/social/linkedin.jsx';
import { FacebookIcon } from './public/icons/social/facebook.jsx';
import { DiscordIcon } from './public/icons/social/discord.jsx';

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
        document.title = "Vinícius Lazzari"

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
        const themeIcon = this.state.theme.title === "light" ? <SunIcon /> : <MoonIcon />

        let languageIcon = null;
        switch (this.state.language.title) {
            case 'en-uk':
                languageIcon = <UkIcon />;
                break;
            case 'pt-pt':
                languageIcon = <PortugalIcon />;
                break;
            case 'pt-br':
                languageIcon = <BrazilIcon />;
                break;
        }

        return (
            < ThemeProvider theme={this.state.theme} >
                <GlobalStyle />
                <div className="container clearfix">
                    <header>
                        <nav className="header-buttons">
                            <button onClick={this.toggleTheme} className="theme-button"> {themeIcon} </button>
                            <button onClick={this.toggleLanguage} className="language-button"> {languageIcon} </button>
                        </nav>

                        <nav className="small-header-links">
                            <form>
                                <select name="URL">
                                    <option value="blog.html">My Blog</option>
                                    <option value="home.html">My Home Page</option>
                                    <option value="tutorials.html">My Tutorials</option>
                                </select>
                            </form>
                        </nav>

                        <nav className="big-header-links">
                            <ul>
                                <li><a href="#about"> {this.state.language.header.about} </a></li>
                                <li><a href="#skills"> {this.state.language.header.skills} </a></li>
                                <li><a href="#projects"> {this.state.language.header.projects} </a></li>
                                <li><a href="#contact"> {this.state.language.header.contact} </a></li>
                            </ul>
                        </nav>
                    </header>

                    <div className="site-sections">
                        <div className="first-section">
                            <div className="first-section-label">
                                <p className="first-section-title"> Vinícius Lazzari </p>
                                <p className="first-section-description"> {this.state.language.firstSection.subtitle} </p>

                                <div className="first-section-icons">
                                    <a href="https://github.com/viniciuslazzari"> <GithubIcon /> </a>
                                    <a href="https://www.linkedin.com/in/viníciuslazzari/"> <LinkedinIcon /> </a>
                                    <a href="https://www.facebook.com/vinilazz"> <FacebookIcon /> </a>
                                    <a href=""> <DiscordIcon /> </a>
                                </div>
                            </div>
                        </div>

                        <div className="second-section">
                            <div className="second-section-margin">
                                <div className="second-section-label">
                                    <div className="second-section-label-image">
                                        <img alt="" src="/profile.jpg"></img>
                                    </div>

                                    <div className="second-section-label-text">
                                        <p className="second-section-title"> {this.state.language.header.about}  </p>
                                        <p className="second-section-description"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet risus lectus. Donec convallis condimentum placerat. Quisque venenatis eget mi id sodales. Etiam tincidunt quam at malesuada placerat. Proin iaculis nisi ut eros accumsan luctus. Integer convallis tincidunt scelerisque. Proin nec sapien sed eros placerat feugiat. Mauris tincidunt fermentum tortor, nec rutrum nibh placerat a. Suspendisse id molestie libero. </p>
                                    </div>
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