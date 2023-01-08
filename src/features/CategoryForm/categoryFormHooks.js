import categoryServices from "../../services/categoryServices"
import { useState, useMemo } from "react"

export const useCategoryForm = () => {
    const [name, setName] = useState("")
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const handlers = useMemo(
        () => ({
            recordCategoryName: (e) => {
                setName(e.target.value)
            },
            createCategory: async () => {
                setLoading(true)
                const newCategory = {
                    "name" : name 
                }
                await categoryServices.createNewCategory(newCategory)
                .then(response => {
                    setData(response)
                })
                .catch(error => setError(error.response.data))
            },
        }),
        [name]
    )
    return [ name, data, error, loading, handlers ]
}