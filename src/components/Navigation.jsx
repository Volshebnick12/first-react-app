import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../routes";
import styled from 'styled-components'

export function Navigation() {
    return (
        <StyledList>
            <StyledListItem><Link to={ROUTES.USERS}>Пользователи</Link></StyledListItem>
            <StyledListItem><Link to={ROUTES.POSTS}>Посты</Link></StyledListItem>
        </StyledList>
    )
}

const StyledList = styled.ul`
    display: flex;
    flex-direction: row;
    list-style: none;
    background: black;
    padding: 20px;
   
`

const StyledListItem = styled.li`
    margin-right: 10px;
    color: white;
    decoration-text: none;
`
