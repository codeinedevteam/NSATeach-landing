import { createGlobalStyle } from 'styled-components';
import rubik from '../assets/fonts/rubik.ttf';
import poppinsRegular from '../assets/fonts/Poppins-Regular.ttf';

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Poppins';
        src: url(${poppinsRegular}) format('truetype');
    }
    @font-face {
        font-family: 'Rubik';
        src: url(${rubik}) format('truetype');
    }

    .font-poppins {
        font-family: "Poppins", sans-serif;
    }
    .font-rubik {
        font-family: "Rubik", sans-serif;
    }
`;

export default GlobalStyle;