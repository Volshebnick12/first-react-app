import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Layout } from "../components/Layout";
import { UserPosts } from "../components/UserPosts";
import { UserProfile } from "../components/UserProfile";
import { getAllPostsByUserId, getUserById } from "../utils";

export function User() {
    const [user, setUser] = useState({})
    const [posts, setPosts] = useState([])

    let { id } = useParams();

    useEffect(() => {
        getUserById(id)
            .then(({data}) => {
                setUser(data)
            })
        getAllPostsByUserId(id)
            .then(({data}) => {
                setPosts(data)
            })
    }, [])

    return (
        <Layout>
            <h1>User</h1>
            <UserProfile user={user} />
            <UserPosts posts={posts} />
        </Layout>
    )
} 