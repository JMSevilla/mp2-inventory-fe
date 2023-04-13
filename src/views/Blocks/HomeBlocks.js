import React, {useEffect, useState} from 'react'
import { ControlledAppbar, ControlledBackdrop } from '../../components'
import { useAuthContext } from '../../core/context/AuthContext'
import {useHistory} from 'react-router-dom'
import { Externalization } from '../../router/base/externalization'

export const HomeBlocks = () => {
    const { findAnyAccount } = useAuthContext()
    const [open, setOpen] = useState(false)
    const router = useHistory()
    useEffect(() => {
        setOpen(!open)
        findAnyAccount().then(repository => {
            const { data } = repository
            if(data[0].key == 'not_exist'){
                setTimeout(() => router.push(Externalization.SysAdReg.path), 3000)
            } else {
                setOpen(false)
            }
        })
    }, [])
    return (
        <>
            <ControlledAppbar/>
            <h3>Home</h3>
            <ControlledBackdrop 
                open={open}
            />
        </>
    )
}