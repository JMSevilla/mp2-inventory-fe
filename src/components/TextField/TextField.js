import { TextField, Typography } from '@mui/material'

export const ControlledTextField = (props, label) => {
    return (
        <>
            <Typography>{label}</Typography>
            <TextField 
                {...props}
            />
        </>
    )
}