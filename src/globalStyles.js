import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #8C11BE;
    font-family: 'Raleway', sans-serif;
    padding: 25px 25px 15px 25px;
  }

  form p {
    color: white;
    text-align: center;
    font-weight: 700;
    font-size: 15px;
  }

  a {
    text-decoration: none;
    color: white;
  }

  .d-flex {
    display: flex;
  }

  .gap-15 {
    gap: 15px;
  }
`

export default GlobalStyle;