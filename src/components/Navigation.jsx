import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../routes";
import styled from "styled-components";

export function Navigation() {
    return (
        <StyledList>
            <StyledListItem><StyledLink to={ ROUTES.USERS }>Пользователи</StyledLink></StyledListItem>
        </StyledList>
    );
}

const StyledList = styled.ul`
    display: flex;
    flex-direction: row;
    list-style: none;
    background: black;
    padding: 20px;
    margin: 0;
`;

const StyledListItem = styled.li`
    margin-right: 10px;
    decoration-text: none;
`;

const StyledLink = styled(Link)`
    color: white;
`;
