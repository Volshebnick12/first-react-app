import React, { useEffect, useState } from "react";
import { Layout } from "../components/Layout";
import { UsersList } from "../components/UsersList";
import { getAllUsers } from "../utils";

export function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getAllUsers()
            .then(({ data }) => {
                setUsers(data);
            });
    }, []);

    return (
        <Layout>
            <h1>Пользователи:</h1>
            <UsersList users={ users } />
        </Layout>
    );
}
