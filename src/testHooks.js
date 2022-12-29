import categoryServices from "./services/categoryServices"
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
                .then(response => {
                    setData(response)
                })
                .catch(error => setError(error))
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
                //     "name": "testcat"
                // }
                await categoryServices.createNewCategory(newCategory)
                .then(response => {
                    console.log(response)
                    setData(response)
                })
                .catch(error => setError(error))
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
                .then(response => {
                    console.log(response)
                    setData(response)
                })
                .catch(error => setError(error))
            }
        }),
        []
    )
    return [ data, error, loading, handlers ]
}

