import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../routes";

export function UserPosts({posts}) {
    console.log('UserPosts', posts)
    return (
        <div>
            {posts.map((post) => (
                <Link to={ROUTES.POST.replace(':id', post.id)} key={post.id}>
                    {post.title} 
                </Link>
            )
            )}
        </div>
    )
}
