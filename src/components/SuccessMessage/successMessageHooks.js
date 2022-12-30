import { useState, useMemo } from "react"

export const useSuccessMessage = () => {
    const [showMessage, setShowMessage] = useState(true)

    const handlers = useMemo(
        () => ({
            hideSuccessMessage: () => {
                setShowMessage(false)
            },
        }),
        []
    )
    return [ showMessage, handlers ]
}