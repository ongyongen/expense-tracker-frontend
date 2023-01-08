import recordServices from "../../services/recordServices"
import { useState, useMemo } from "react"

export const useExpenseTable = () => {
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")

    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)

    const handlers = useMemo(
        () => ({
            recordStartDate: (e) => {
                setData(null)
                setStartDate(e.target.value)
            },
            recordEndDate: (e) => {
                setData(null)
                setEndDate(e.target.value)
            }, 
            getAllWithinDateRange: async () => {
                setLoading(true)
                setData(null)
                setError(null)
                await recordServices.getAllRecordsWithinDateRange(startDate, endDate)
                .then(response => setData(response))
                .catch(error =>setError(error.response.data))
            }
        }),
        [startDate, endDate]
    )
    return [ startDate, endDate, data, handlers ]
}

export default useExpenseTable