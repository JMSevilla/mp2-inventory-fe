import React from 'react'
import { Grid } from '@mui/material'

export const ControlledGrid = (props) => {
    const { 
        rowSpacing,
        columnSpacing,
        xs,
        arrMapping = [],
        style
    } = props
    return (
        <Grid style={style} container rowSpacing={rowSpacing} columnSpacing={rowSpacing}>
            {
                arrMapping.map((item) => (
                    <Grid item xs={xs}>
                        {item.children}
                    </Grid>
                ))
            }
        </Grid>
    )
    
}