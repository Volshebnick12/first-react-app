import React from "react";
import PropTypes from "prop-types";

export function PostDetails({ post }) {
    return (
        <div>
            { post.title }
            { post.body }
        </div>
    );
}

PostDetails.propTypes = {
    post: PropTypes.object
};
