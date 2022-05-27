import React from "react";

export function PostComments({comments}) {
    console.log('PostComments', comments)
    return (
        <div>
            {comments.name}
            {comments.email}
            {comments.body}
        </div>
    )
}