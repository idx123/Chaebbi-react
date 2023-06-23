import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    :root{
        --color-primary: #19BC14;
        --color-point: #4C7031;
        --color-point-hover: #0f8e08;
        --color-danger: #C50000;
        --color-black: #333333;
        --color-white: #FFFFFF;
        --color-background: #F3F5F7;
        --color-border: #DCE5E7;
        --color-text: #535353;
        --color-sub-text: #B7C2C6;

    }

    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html{
        font-size: 62.5%;
        background-color: var(--color-background);
    }

    body{
        color: var(--color-text);
        font-size: 1.4rem;
    }

    nav{
        font-size: 1.6rem;
    }

    h1,h2,h3,h4,h5,h6{
        // font-family: 'yg-jalnan', sans-serif;
    }

    ol,ul,li{
        list-style: none;
    }

    a{
        text-decoration: none;
        color: inherit;
        cursor: pointer;
        display: block;
    }
    
    input, button{
        outline: none;
    }

    button {
        border: none;
        background: transparent;
        padding: 0;
        cursor: pointer;
        color:inherit
    }

    span {
        color: inherit;
    }

    // icon setting
    .material-icons-round {
        font-size: inherit;
        display: block;
        color: inherit;
    }
`

export default GlobalStyle
