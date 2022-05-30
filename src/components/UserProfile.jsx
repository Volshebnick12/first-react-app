import React from "react";
import styled from 'styled-components';

export function UserProfile({user}) {
    console.log('UserProfile', user)
    return (
        <div>
            <UserName>{user.name}</UserName>
                <UserContact>
                    <UserEmail>{user.email}</UserEmail>
                    <UserPhone>{user.phone}</UserPhone>
                    <UserWebsite>{user.website}</UserWebsite>
                </UserContact>
        </div>
    )
}

const UserName = styled.div`
    display: flex;
    margin: 10px;
    padding: 10px 10px 10px;
    font-family: 'Alegreya Sans SC', sans-serif;
    font-size: 35px;
    color:black;
    Weight: 500;
    line-height: 40px;
    border: 1px solid black;
`

const UserContact = styled.div`
    margin-left: 10px;
    font-family: 'Open Sans', sans-serif;
    font-size: 18px;
    color: black;
    Weight: 400;
    line-height: 17px;
`
const UserEmail = styled.div`
    display: inline;
    border: 1px solid black;
    padding: 10px 40px;
`
const UserPhone = styled.div`
    display: inline;
    border: 1px solid black;
    padding: 10px 40px;
`
const UserWebsite = styled.div`
    display: inline;
    border: 1px solid black;
    padding: 10px 40px;
`