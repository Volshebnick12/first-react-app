import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Layout } from "../components/Layout";
import { PostComments } from "../components/PostComments";
import { PostDetails } from "../components/PostDetails";
import { getAllCommentsByPostId, getPostById } from "../utils";

export function Post() {
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])

    let { id } = useParams();

    useEffect(() => {
        getPostById(id)
            .then(({data}) => {
                setPost(data)
            })
        getAllCommentsByPostId(id)
            .then(({data}) => {
                setComments(data)
            })
    }, [])

    return (
        <Layout>
            <h1>Post</h1>
            <PostDetails post={post} />
            <PostComments comments={comments} />
        </Layout>
    )
} 