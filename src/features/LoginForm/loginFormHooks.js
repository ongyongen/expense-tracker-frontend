import userServices from "../../services/userServices"
import { useState, useMemo } from "react"

export const useLoginForm = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const handlers = useMemo(
        () => ({
            emailHandler: (e) => {
                setEmail(e.target.value)
            },
            passwordHandler: (e) => {
                setPassword(e.target.value)
            },
            login: async () => {
                setLoading(true)
                const newUser = {
                    "email" : email,
                    "password" : password,
                }
                await userServices.createNewUser(newUser)
                .then(response => {
                    // TODO: handle successful account creation
                })
                .catch(error => setError(error.response.data))
            },
        }),
        [email, password]
    )
    return [ email, password, error, loading, handlers ]
}
