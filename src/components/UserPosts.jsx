import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../routes";
import styled from 'styled-components';

export function UserPosts({posts}) {
    console.log('UserPosts', posts)
    return (
        <UserPostsContainer>
            <div>
                {posts.map((post) => (
                    <UserPost>
                        <Link to={ROUTES.POST.replace(':id', post.id)} key={post.id}>
                            {post.title} 
                        </Link>
                    </UserPost>
                )
                )}
            </div>
        </UserPostsContainer>
    )
}

const UserPost = styled.div`
    padding: 20px 5px 5px 10px;
    border: 1px solid black;
    text-decoration: none;
    colot: black;
`

const UserPostsContainer = styled.div`
    margin: 12px 0 0 10px;
`