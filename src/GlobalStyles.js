import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
         margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }
    html, body {
       
        overflow-x: hidden;
        max-width: 768px !important; 
        margin: 0 auto !important;
        float: none !important;
        /* background-size: cover; */
        /* background-color: green; */
    }
`;

export default GlobalStyle;