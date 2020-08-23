import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*, *:before, *:after {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    text-decoration: none;
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

.header-links ul li a {
    color: ${(props) => props.theme.colors.text}
}
`;
