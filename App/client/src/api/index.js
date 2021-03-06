import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})
//Movie Apis
export const insertMovie = payload => api.post(`/movie`, payload)
export const getAllMovies = () => api.get(`/movies`)
export const updateMovieById = (id, payload) => api.put(`/movie/${id}`, payload)
export const deleteMovieById = id => api.delete(`/movie/${id}`)
export const getMovieById = id => api.get(`/movie/${id}`)

//User Apis
export const insertUser = payload => api.post(`/user`, payload)
export const getAllUsers = () => api.get(`/users`)
export const updateUserById = (id, payload) => api.put(`/user/${id}`, payload)
export const deleteUserById = id => api.delete(`/user/${id}`)
export const getUserById = id => api.get(`/user/${id}`)
export const getUserByEmail = payload => api.get(`/user/${payload}`)

//Article Apis
export const insertArticle = payload => api.post(`/article`, payload)
export const getAllArticles = () => api.get(`/articles`)
export const updateArticleById = (id, payload) => api.put(`/article/${id}`, payload)
export const deleteArticleById = id => api.delete(`/article/${id}`)
export const getArticleById = id => api.get(`/article/${id}`)




const apis = {
    insertMovie,
    getAllMovies,
    updateMovieById,
    deleteMovieById,
    getMovieById,

    
    insertUser,
    getAllUsers,
    updateUserById,
    deleteUserById,
    getUserById,
    getUserByEmail,

    insertArticle,
    getAllArticles,
    updateArticleById,
    deleteArticleById,
    getArticleById,
    
    
}

export default apis