// import { css } from '@emotion/react';
import RobotoBold from '../fonts/roboto.bold.ttf';
import RobotoMedium from '../fonts/roboto.medium.ttf';
import RobotoRegular from '../fonts/roboto.regular.ttf';

import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
    * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
    
}
   :root {
      --primary: #F4C550;
      --primary-activ: #FBE9BA;
      --green: #9FBAAE;
      --green-activ: #CBDED3;
      --blue: #9FB7CE;
      --blue-activ: #BFD6EA;
      --pink: #E0A39A;
      --pink-activ: #F2C0BD;
      --peach: #F0AA8D;
      --peach-activ: #F4C8BA;
      
      --green-grass: #38CD3E;

      

      --text: #121417;
      --text-gray: #8a8a89;
      --font-family: 'Roboto', sans-serif;
    }
    html,
    body {
      font-weight: 400;
      font-style: normal;
      width: 100%;
      height: 100vh;
      margin: 0;
      line-height: 1;
      scroll-behavior: smooth;
      transition: all 0.5s linear;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
      margin: 0;
    }
    a {
      color: currentColor;
      text-decoration: none;
    }
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    img {
      display: block;
      max-width: 100%;
      height: auto;
    }
    button {
      cursor: pointer;
      border: none;
      padding: 0;
    }

    @font-face {
      font-family: 'Roboto';
      font-weight: 700;
      src: url(${RobotoBold}) format('truetype');
    }
    @font-face {
      font-family: 'Roboto';
      font-weight: 500;
      src: url(${RobotoMedium}) format('truetype');
    }

    @font-face {
      font-family: 'Roboto';
      font-weight: 400;
      src: url(${RobotoRegular}) format('truetype');
    }

    * {
      box-sizing: border-box;
    }

    ::-webkit-scrollbar {
      width: 4px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: #9ebbff;
      border-radius: 8px;
    }

    ::-webkit-scrollbar-track {
      background-color: rgba(239, 237, 232, 0.1);
    }

    * {
      scrollbar-color: #9ebbff rgba(239, 237, 232, 0.1);
    }
`;

// const GlobalStyles = () => {
//   return css`
//     :root {
//       --button: #e44848;
//       --main: #101828;
//       --inputs: #f7f7f7;
//       --block-features: #f2f4f7;
//       --rating: #ffc531;
//       --text: #475467;
//       --font-family: 'Inter', sans-serif;
//     }
//     html,
//     body {
//       font-family: 'Inter', sans-serif;
//       font-weight: 400;
//       font-style: normal;
//       width: 100%;
//       height: 100vh;
//       margin: 0;
//       line-height: 1;
//       scroll-behavior: smooth;
//       transition: all 0.5s linear;
//     }
//     h1,
//     h2,
//     h3,
//     h4,
//     h5,
//     h6,
//     p {
//       margin: 0;
//     }
//     a {
//       color: currentColor;
//       text-decoration: none;
//     }
//     ul {
//       list-style: none;
//       padding: 0;
//       margin: 0;
//     }
//     img {
//       display: block;
//       max-width: 100%;
//       height: auto;
//     }
//     button {
//       cursor: pointer;
//       border: none;
//       padding: 0;
//     }

//     @font-face {
//       font-family: 'Roboto';
//       font-weight: 700;
//       src: url(${InterBold}) format('truetype');
//     }
//     @font-face {
//       font-family: 'Roboto';
//       font-weight: 500;
//       src: url(${InterMedium}) format('truetype');
//     }

//     @font-face {
//       font-family: 'Roboto';
//       font-weight: 400;
//       src: url(${InterRegular}) format('truetype');
//     }

//     * {
//       box-sizing: border-box;
//     }

//     ::-webkit-scrollbar {
//       width: 4px;
//     }

//     ::-webkit-scrollbar-thumb {
//       background-color: #9ebbff;
//       border-radius: 8px;
//     }

//     ::-webkit-scrollbar-track {
//       background-color: rgba(239, 237, 232, 0.1);
//     }

//     * {
//       scrollbar-color: #9ebbff rgba(239, 237, 232, 0.1);
//     }
//   `;
// };

// export default GlobalStyles;
