import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
html, body {
    margin: 0;
    padding: 0;
}
body {
    font-family: 'Alegreya Sans SC', sans-serif;
    background: #E5E5E5;
}
a, a:hover {
  color: brown;
  text-decoration: none;
}
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <>
        <Global />
        <App />

    </>
);
