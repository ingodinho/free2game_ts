import {createGlobalStyle} from "styled-components";
import Oswald from "../assets/font/oswald/Oswald-VariableFont_wght.ttf"
import TitilliumRegular from "../assets/font/titillium/TitilliumWeb-Regular.ttf"

const GlobalStyle = createGlobalStyle`
  
  @font-face {
    font-family: "Oswald";
    src: url(${Oswald});
  }
  
  @font-face {
    font-family: "Titillium";
    font-weight: 400;
    src: url(${TitilliumRegular});
  }
  
  *, *::before, *::after {
    box-sizing: border-box;
  }
  
  * {
    margin: 0;
    padding: 0;
  }

  html, body {
    height: 100%;
  }

  body {
    //line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    max-width: 1440px;
    margin: 0 auto;
  }
  
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  input, button, textarea, select {
    font: inherit;
  }
  
  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }
  
  #root, #__next {
    isolation: isolate;
  }
`

export default GlobalStyle;
