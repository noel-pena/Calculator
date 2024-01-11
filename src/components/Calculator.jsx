import { Grid, SvgIcon } from "@mui/material";
import * as React from "react";
import Button from '@mui/material/Button';
import { redButton, grayButton, orangeButton, yellowButton } from "./Styles";
import BackspaceIcon from '@mui/icons-material/Backspace';


export const Calculator = () => {
    return (
        <Grid className="calculator">
            <Grid className="entry" xs={12} m={0} p={2} textAlign="end">
                123456
            </Grid>
            <Grid sx={{ display: "flex", flexDirection: "row"}} px={1}>
                <Grid spacing={2} xs={4}>
                    <Button style={redButton}>C</Button>
                    <Button style={grayButton}>7</Button>
                    <Button style={grayButton}>4</Button>
                    <Button style={grayButton}>1</Button>
                    <Button style={grayButton}>0</Button>
                </Grid>
                <Grid spacing={2} xs={4}>
                    <Button style={orangeButton}>+/-</Button>
                    <Button style={grayButton}>8</Button>
                    <Button style={grayButton}>5</Button>
                    <Button style={grayButton}>2</Button>
                    <Button style={yellowButton}>
                        {<SvgIcon component={BackspaceIcon} />}
                    </Button>
                </Grid>
                <Grid spacing={2} xs={4}>
                    <Button style={orangeButton}>%</Button>
                    <Button style={grayButton}>9</Button>
                    <Button style={grayButton}>6</Button>
                    <Button style={grayButton}>3</Button>
                    <Button style={yellowButton}>.</Button>
                </Grid>
                <Grid spacing={2} xs={4}>
                    <Button style={yellowButton}>/</Button>
                    <Button style={yellowButton}>*</Button>
                    <Button style={yellowButton}>+</Button>
                    <Button style={yellowButton}>-</Button>
                    <Button style={yellowButton}>=</Button>
                </Grid>
                <Grid xs={6}>

                </Grid>
            </Grid>
        </Grid>
    )
}