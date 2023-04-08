import { Container } from "@mui/material";

export const ControlledContainer = ({props}) => {
    const {
        children,
        style
    } = props

    return(
        <Container style={style}>
            {children}
        </Container>
    )
}