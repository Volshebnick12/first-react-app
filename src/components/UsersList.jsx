import React from "react";
import {UsersListItem} from './UsersListItem'

export function UsersList({users}) {
  console.log('UsersList', users)
  return (
    <ul>
      {users.map((user) => (
        <UsersListItem user={user} key={user.id} />
      ))}  
    </ul>
  )
} 