import React, {useEffect} from 'react'
import { ControlledAppbar } from '../../components'
import { useMessageContext } from '../../core/context/MessageContext'


export const HomeBlocks = () => {
    const { handleToastify } = useMessageContext()
    /* Kindly remove this code below. this is for testing purposes only */
    useEffect(() => {
        handleToastify(
            "Toast Message Trigger",
            "top-right",
            false,
            true,
            true,
            true,
            undefined,
            "dark",
            "error"
        )
    }, [])
    return (
        <>
            <ControlledAppbar/>
            <h3>Home</h3>
        </>
    )
}