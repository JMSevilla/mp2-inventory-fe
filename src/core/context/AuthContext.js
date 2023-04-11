import { 
    createContext, useContext
} from 'react'

import { distribution } from '../api/distribution/distribution'

const AuthHandlerContext = createContext(null)

export const AuthContext = ({children}) => {
    const findAnyAccount = () => {
        const object = {
            username: 'auto-detection',
            trigger: true
        }
        distribution('check-users', object).then(response => {
            console.log(response)
        })
    }

    return (
        <AuthHandlerContext.Provider
        value={{
            findAnyAccount
        }}
        >
            {children}
        </AuthHandlerContext.Provider>
    )
}

export const useAuthContext = () => {
    if(!AuthHandlerContext){
        throw new Error("Auth contex should be used")
    }
    return useContext(AuthHandlerContext)
}