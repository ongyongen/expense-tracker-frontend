import axios from 'axios'
const baseUrl = 'http://localhost:3001/user'

/*
const getAllCategories = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response)
}*/

const createNewUser = (newUser) => {
    const request = axios.post(`${baseUrl}/create`, newUser)
    return request.then(response => response.data)
}

/*
const updateCategory = (id, newCategory) => {
    const request = axios.put(`${baseUrl}/${id}`, newCategory)
    return request.then(response => response.data)
}

const deleteCategory = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response.data)
}*/

export default { createNewUser };
