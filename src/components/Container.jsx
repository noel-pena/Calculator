import { Grid } from "@mui/material"
import * as React from "react"
import { SubContainer } from "./SubContainer"

export const Container = () => {
    return(
        <Grid
        container
        lg={12} 
        direction="column"
        justifyContent="center"
        alignItems="center" 
    >
        <SubContainer />
    </Grid>
    )
}