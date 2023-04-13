import { TextField, Typography } from '@mui/material'

export const ControlledTextField = (props) => {
    return (
        <>
            <Typography>{props.label}</Typography>
            <TextField 
                {...props}
            />
        </>
    )
}