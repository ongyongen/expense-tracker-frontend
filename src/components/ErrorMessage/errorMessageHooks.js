import { useState, useMemo } from "react"

export const useErrorMessage = () => {
    const [showMessage, setShowMessage] = useState(true)

    const handlers = useMemo(
        () => ({
            hideErrorMessage: () => {
                setShowMessage(false)
            },
        }),
        []
    )
    return [ showMessage, handlers ]
}