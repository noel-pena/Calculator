import { Grid } from "@mui/material"
import * as React from "react"
import { Calculator } from "./Calculator"

export const Container = () => {
    return(
        <Grid
        container
        lg={12} 
        direction="column"
        justifyContent="center"
        alignItems="center" 
    >
        <Calculator />
    </Grid>
    )
}