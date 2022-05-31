import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

export function UserProfile({ user }) {
    return (
        <div>
            <UserName>{ user.name }</UserName>
            <UserContact>
                <UserEmail>Email: { user.email }</UserEmail>
                <UserPhone>Phone: { user.phone }</UserPhone>
                <UserWebsite>Website: { user.website }</UserWebsite>
            </UserContact>
        </div>
    );
}

UserProfile.propTypes = {
    user: PropTypes.object.isRequired
};

const UserName = styled.div`
  display: flex;
  padding: 10px 0 10px;
  font-family: "Alegreya Sans SC", sans-serif;
  font-size: 35px;
  color: black;
  weight: 500;
  line-height: 40px;
  
`;

const UserContact = styled.div`
  font-family: "Open Sans", sans-serif;
  font-size: 18px;
  color: black;
  weight: 400;
  line-height: 17px;
`;

const UserEmail = styled.div`
  padding: 10px 0;
  flex: 1 1 auto;
`;

const UserPhone = styled.div`
  padding: 10px 0;
  flex: 1 1 auto;
`;

const UserWebsite = styled.div`
  padding: 10px 0;
  flex: 1 1 auto;
`;
