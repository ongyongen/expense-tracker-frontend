// import recordServices from "./recordServices"
// import { useState, useMemo } from "react"

// export const useFetchRecordWithinDateRange = () => {
//     const [data, setData] = useState(null)
//     const [error, setError] = useState(null)
//     const [loading, setLoading] = useState(false)

//     const handlers = useMemo(
//         () => ({
//             getAll: async (startDate, endDate) => {
//                 setLoading(true)
//                 await recordServices.getAllRecordsWithinDateRange(startDate, endDate)
//                 .then(response => setData(response))
//                 .catch(error => setError(error.response.data))
//             }
//         }),
//         []
//     )
//     return [ data, error, loading, handlers ]
// }
