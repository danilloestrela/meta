import { createGlobalStyle } from 'styled-components';

import metaLogo from '../assets/meta-logo.png';

export default createGlobalStyle`
  *{
    margin:0;
    padding:0;
    outline:0;
    box-sizing:0;
  }

  body {
    background:#0057A8;
    -webkit-font-smoothing: antialiased;
  }

  body::after {
    content:"";
    background:#0057A8 url(${metaLogo}) no-repeat;
    opacity:0.4;
    background-position: 40% 100px;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
  }

  body, input, button {
    font: 16px Roboto,sans-serif;
  }

  #root {
    max-width: 960px;
    margin:0 auto;
    padding: 40px 20px;
  }
`;
