import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { ROUTES } from "../routes";

export function UsersListItem({ user }) {
    return (
        <div>
            <h4>
                <Link to={ ROUTES.USER.replace(":id", user.id) }>{ user.name }</Link>
            </h4>
            <p>Email: { user.email }</p>
            <p>Phone: { user.phone }</p>
            <p>Website: { user.website }</p>
        </div>
    );
}

UsersListItem.propTypes = {
    user: PropTypes.object.isRequired
};
