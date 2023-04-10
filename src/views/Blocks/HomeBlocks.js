import React, {useEffect} from 'react'
import { ControlledAppbar } from '../../components'
import { useAuthContext } from '../../core/context/AuthContext'

export const HomeBlocks = () => {
    const { findAnyAccount } = useAuthContext()
    useEffect(() => {
        findAnyAccount()
    }, [])
    return (
        <>
            <ControlledAppbar/>
            <h3>Home</h3>
        </>
    )
}