import React, {
    cloneElement
} from 'react'
import { Grid } from '@mui/material'


export const ControlledGrid = (props) => {
    const {
        rowSpacing,
        columnSpacing,
        arrMapping,
        style,
    } = props
    return (
        <Grid style={style} container rowSpacing={rowSpacing} columnSpacing={columnSpacing}>
            
            {
                arrMapping.length > 0 && arrMapping.map((item, index) => {
                    return (
                        <Grid item xs={item.xs} key={index}>
                            {
                                cloneElement(item.children)
                            }
                        </Grid>
                    )
                })
            }
        </Grid>
    )
}