import React from 'react' 
import { Card, CardContent } from '@mui/material'


export const ControlledCard = (props) => {
    const { children, style } = props

    return (
        <div>
            <Card style={style}>
                <CardContent>
                    {children}
                </CardContent>
            </Card>
        </div>
    )
}