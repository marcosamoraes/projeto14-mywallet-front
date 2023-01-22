import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #8C11BE;
    font-family: 'Raleway', sans-serif;
    padding: 25px 25px 15px 25px;
    min-height: 100vh;
    box-sizing: border-box;
  }

  body:has(.center) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
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

  p.error {
    background: #dc3545;
    color: white;
    font-weight: 700;
    margin-top: -15px;
    border-radius: 8px;
    padding: 10px;
  }

  .list-movements {
    max-height: 85%;
    overflow: auto;
  }

  .no-style {
    background: none;
    border: none;
    color: white;
  }
`

export default GlobalStyle;