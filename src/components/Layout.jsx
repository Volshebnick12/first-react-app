import React from "react";
import { Navigation } from "./Navigation";
import styled from "styled-components";
import PropTypes from "prop-types";

export function Layout({ children }) {
    return (
        <>
            <header>
                <Navigation />
            </header>
            <Main>{ children }</Main>
            <Footer>&copy; { new Date().getFullYear() } Alexander Mamrovskii</Footer>
        </>
    );
}

Layout.propTypes = {
    children: PropTypes.node.isRequired
};

const Main = styled.main`
    padding: 20px;
`;

const Footer = styled.footer`
    padding: 20px;
    text-align: center;
`;
