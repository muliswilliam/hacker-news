
import { createGlobalStyle } from 'styled-components';
import { colorsDark, colorsLight} from 'styles/palette';

const GlobalStyle =
	createGlobalStyle`
    * {
      box-sizing: border-box;
    }
    html, body {
      font-family: Lato,Helvetica-Neue,Helvetica,Arial,sans-serif;
      width: 100vw;
      overflow-x: hidden;
      margin: 0;
      padding: 0;
      min-height: 100vh;
      background-color: ${props => (props.darkTheme ? colorsDark.background : colorsLight.background)};
    }
    ul {
      list-style: none;
      padding: 0;
    }
    a {
      text-decoration: none;
      &:visited {
        color: inherit;
      }
    }
  `;

export default GlobalStyle;
