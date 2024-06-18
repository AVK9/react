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
      --background-color: #EEEEEE;
      --font-family: 'Roboto', sans-serif;
    }
    html,
    body {
      font-weight: 400;
      font-style: normal;
      width: 100%;
      margin: 0;
      line-height: 1;
      scroll-behavior: smooth;
      
    }
    .wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
main {
  flex-grow: 1;
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
      color: inherit;
      text-decoration: none;
    }
     ul,
     ol {
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
    padding: 0;
    border: none;
    font: inherit;
    color: inherit;
    background-color: transparent;
    cursor: pointer;
    }

    @font-face {
      font-family: 'Roboto';
      font-weight: 700;
      font-style: normal;
      src: url(${RobotoBold}) format('truetype');
    }
    @font-face {
      font-family: 'Roboto';
      font-weight: 500;
      font-style: normal;
      src: url(${RobotoMedium}) format('truetype');
    }

    @font-face {
      font-family: 'Roboto';
      font-weight: 400;
      font-style: normal;
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
