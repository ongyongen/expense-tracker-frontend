import categoryServices from "./categoryServices"
import { useState, useMemo } from "react"

export const useFetchCategory = () => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const handlers = useMemo(
        () => ({
            getAll: async () => {
                setLoading(true)
                await categoryServices.getAllCategories()
                .then(response => setData(response))
                .catch(error => setError(error.response.data))
            }
        }),
        []
    )
    return [ data, error, loading, handlers ]
}

export const useCreateCategory = (newCategory) => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const handlers = useMemo(
        () => ({
            createNew: async (newCategory) => {
                setLoading(true)
                // const newCat = {
                //     "age": 11
                // }
                await categoryServices.createNewCategory(newCategory)
                .then(response => setData(response))
                .catch(error => setError(error.response.data))
            }
        }),
        []
    )
    return [ data, error, loading, handlers ]
}

export const useUpdateCategory = (id, updatedCategory) => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const handlers = useMemo(
        () => ({
            update: async (id, updatedCategory) => {
                setLoading(true)
                // const updatedCat = {
                //     "name": "testcat_updated"
                // }
                await categoryServices.updateCategory(id, updatedCategory)
                .then(response => setData(response))
                .catch(error => setError(error.response.data))
            }
        }),
        []
    )
    return [ data, error, loading, handlers ]
}

export const useDeleteCategory = (id) => {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const handlers = useMemo(
        () => ({
            remove : async (id) => {
                setLoading(true)
                await categoryServices.deleteCategory(id)
                .then(response => console.log("deleted"))
                .catch(error => setError(error.response.data))
            },
        }),
        []
    )
    return [ error, loading, handlers ]
}
