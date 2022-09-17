import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}

body {
    background-color: #FFC312;
    -webkit-font-smoothing: antialiased;
}


border, input, button {
    font: 16px Roboto, sans-serif;
}
`;
