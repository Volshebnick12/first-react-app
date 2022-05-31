import axios from "axios";
import config from "./config";

export const makeRequest = (path) => axios.get(config.api.host + path);

export const getAllUsers = () => makeRequest(config.api.paths.users);

export const getUserById = (userId) => {
    const path = `${config.api.paths.users}/${userId}`;
    return makeRequest(path);
};

export const getPostById = (postId) => {
    const path = `${config.api.paths.posts}/${postId}`;
    return makeRequest(path);
};

export const getAllPostsByUserId = (userId) => {
    const path = `${config.api.paths.posts}?userId=${userId}`;
    return makeRequest(path);
};

export const getAllCommentsByPostId = (postId) => {
    const path = `${config.api.paths.comments}?postId=${postId}`;
    return makeRequest(path);
};
