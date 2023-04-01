import { createContext, useState } from 'react'

const UserContextSetup = createContext(null)

const Context = ({children}) => {
    const [state, setState] = useState(null)
    return (
        <UserContextSetup.Provider
        value={{
            state, setState
        }}
        >{children}</UserContextSetup.Provider>
    )
}

export default Context