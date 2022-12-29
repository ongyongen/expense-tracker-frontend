import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/category'

const getAllCategories = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response)
}

const createNewCategory = (newCategory) => {
    const request = axios.post(baseUrl, newCategory)
    return request.then(response => response.data)
}

const updateCategory = (id, newCategory) => {
    const request = axios.put(`${baseUrl}/${id}`, newCategory)
    return request.then(response => response.data)
}

const deleteCategory = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response.data)
}

export default { getAllCategories, createNewCategory, updateCategory, deleteCategory }