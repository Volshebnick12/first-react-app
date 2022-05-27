import React from "react";

export function UserProfile({user}) {
    console.log('UserProfile', user)
    return (
        <div>
            {user.name}
            {user.email}
            {user.phone}
            {user.website}
        </div>
    )
}