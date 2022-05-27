import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../routes";
import styled from 'styled-components'

export function Navigation() {
    return (
        <StyledList>
            <StyledListItem><Link to={ROUTES.USERS}>Users</Link></StyledListItem>
            <StyledListItem><Link to={ROUTES.USER}>User</Link></StyledListItem>
            <StyledListItem><Link to={ROUTES.POST}>Post</Link></StyledListItem>
            <StyledListItem><Link to={ROUTES.POSTS}>Posts</Link></StyledListItem>
        </StyledList>
    )
}

const StyledList = styled.ul`
    display: flex;
    flex-direction: row;
    list-style: none;
`

const StyledListItem = styled.li`
    margin-right: 10px;
`