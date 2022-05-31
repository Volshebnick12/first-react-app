import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";
import { ROUTES } from "../routes";

export function UserPosts({ posts }) {
    return (
        <UserPostsContainer>
            <div>
                { posts.map((post) => (
                    <UserPost key={ post.id }>
                        <Link to={ ROUTES.POST.replace(":id", post.id) } key={ post.id }>
                            { post.title }
                        </Link>
                    </UserPost>
                )
                ) }
            </div>
        </UserPostsContainer>
    );
}

UserPosts.propTypes = {
    posts: PropTypes.array
};

const UserPost = styled.div`
    padding: 20px 0 5px;
    
    text-decoration: none;
    colot: black;
`;

const UserPostsContainer = styled.div`
    margin: 12px 0 0 0;
`;
