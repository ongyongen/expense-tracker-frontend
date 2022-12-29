import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/record'

const getAllRecords = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const createNewRecord = (newRecord) => {
    const request = axios.post(baseUrl, newRecord)
    return request.then(response => response.data)
}

const updateRecord = (id, newRecord) => {
    const request = axios.put(`${baseUrl}/${id}`, newRecord)
    return request.then(response => response.data)
}

const deleteRecord = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response.data)
}

export default { getAllRecords, createNewRecord, updateRecord, deleteRecord }