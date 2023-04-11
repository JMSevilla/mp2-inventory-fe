import React from 'react'
import { Grid } from '@mui/material'


export const ControlledGrig = (props) => {
    const {
        rowSpacing,
        columnSpacing,
        xs,
        arrMapping = [],
        style,
    } = props
    return (
        <Grid style={style} container rowSpacing={rowSpacing} columnSpacing={columnSpacing}>
            {
                arrMapping.map((item) =>(
                    <Grid item xs={item.xs}>
                        {item.children}
                    </Grid>
                ))
            }
        </Grid>
    )
}