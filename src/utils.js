import axios from 'axios'
import config from './config'

export const makeRequest = (path) => axios.get(config.api.host + path)

export const getAllUsers = () => makeRequest(config.api.paths.users)

export const getAllPosts = () => makeRequest(config.api.paths.posts)

export const getUserById = (userId) => {
  const path = `${config.api.paths.users}/${userId}`
  return makeRequest(path)
}

export const getPostById = (postId) => {
  const path = `${config.api.paths.posts}/${postId}`
  return makeRequest(path)
}