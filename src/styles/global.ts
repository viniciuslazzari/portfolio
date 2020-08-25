import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*, *:before, *:after {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    text-decoration: none;
    margin: 0px;
    padding: 0px;
}

.clearfix:before, .clearfix:after {
    content: " ";
    display: table;
}

.clearfix:after {
    clear: both;
}

.clearfix {
    *zoom: 1;
}

img, picture, video, embed {
    max-width: 100%;
}

body {
    background: ${(props) => props.theme.colors.background};
}


.header-buttons button {
    background-color: ${(props) => props.theme.colors.background};
}

p {
    color: ${(props) => props.theme.colors.text};
}

.first-section-title{
    background: linear-gradient(to right, ${(props) => props.theme.colors.initialDegrade}, ${(props) => props.theme.colors.finalDegrade});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.header-links ul li a {
    background: linear-gradient(to right, ${(props) => props.theme.colors.initialDegrade}, ${(props) => props.theme.colors.finalDegrade});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
`;
