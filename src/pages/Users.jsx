import React, { useState, useEffect } from "react";
import { Layout } from "../components/Layout";
import { UsersList } from "../components/UsersList";
import { getAllUsers } from "../utils"

export function Users() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        getAllUsers()
            .then(({data}) => {
                setUsers(data)
            })
    }, [])

    return (
        <Layout>
            <h1>Users</h1>
            <UsersList users={users} />
        </Layout>
    )
} 