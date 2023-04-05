import {Grid} from '@mui/material'
export const ControlledGrid = (props) => {
    const{
        rowSpacing,
        columnSpacing,
        GridDynamic = []

    } = props

    return (
        <Grid container rowSpacing={rowSpacing} columnSpacing={columnSpacing}>

         {
            GridDynamic.lenght > 0 && GridDynamic.map(
                <Grid item xs={component.xs}>
                    {component.Children}
                </Grid>
            )

        }
        </Grid>
    )
}

