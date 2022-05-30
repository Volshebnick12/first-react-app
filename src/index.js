import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {createGlobalStyle} from 'styled-components';

const Global = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Alegreya Sans SC', sans-serif;
    background: #E5E5E5;
}
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Global />
        <App />

    </>
);
