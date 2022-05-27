import React from "react";

export function PostDetails({post}) {
    console.log('PostDetails', post)
    return (
        <div>
            {post.title}
            {post.body}
        </div>
    )
}