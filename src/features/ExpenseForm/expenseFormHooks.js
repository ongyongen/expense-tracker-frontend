import recordServices from "../../services/recordServices"
import { useState, useMemo } from "react"

export const useExpenseForm = () => {
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("")

    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)

    const handlers = useMemo(
        () => ({
            recordName: (e) => {
                setName(e.target.value)
            },
            recordPrice: (e) => {
                setPrice(e.target.value)
            },
            recordCategory: (cat) => {
                setCategory(cat)
            },
            createExpenseRecord: async () => {
                // reset state (trigger refresh)
                setLoading(true)
                setSuccess(false)
                setError(null)
                const newExpenseRecord = {
                    "name" : name,
                    "price": price,
                    "category_id": category._id
                }
                await recordServices.createNewRecord(newExpenseRecord)
                .then(response => {
                    setData(response)
                    setSuccess(true)
                })
                .catch(error => setError(error.response.data))
            },
        }),
        [name, price, category]
    )
    return [ name, price, category, data, error, loading, success, handlers ]
}