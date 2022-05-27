import React from "react";
import {Link} from 'react-router-dom'
import {ROUTES} from '../routes'

export function UsersListItem({user}) {
  return (
    <div>
      <h4><Link to={ROUTES.USER.replace(':id', user.id)}>{user.name}</Link></h4>
      <p>email: {user.email}</p>
      <p>phone: {user.phone}</p>
      <p>website: {user.website}</p>
    </div>
  )
}

