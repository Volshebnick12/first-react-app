import React from "react";
import { UsersListItem } from "./UsersListItem";
import PropTypes from "prop-types";

export function UsersList({ users }) {
    return (
        <>
            { users.map((user) => (
                <UsersListItem user={ user } key={ user.id } />
            )) }
        </>
    );
}

UsersList.propTypes = {
    users: PropTypes.array.isRequired
};
