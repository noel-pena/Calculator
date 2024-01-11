import { Grid, SvgIcon } from "@mui/material";
import * as React from "react";
import Button from '@mui/material/Button';
import { redButton, grayButton, orangeButton, yellowButton } from "./Styles";
import BackspaceIcon from '@mui/icons-material/Backspace';
import { useState } from "react";


export const Calculator = () => {

    const [input, setInput] = useState('')


    function handleInput(event){
        setInput(input.slice(0, 12) + event.target.value);
    }

    function handleClear(){
        setInput('')
    }

    function handleDelete(){
        setInput(input.slice(0, -1));
    }

    function handleEquals(){
        setInput(eval(input));
    }

    return (
        <Grid className="calculator">
            <Grid className="entry" xs={12} m={0} p={2} >
                <input 
                    type="text" 
                    value={input} 
                    textAlign="end"
                    maxLength="10"
                />
            </Grid>
            <Grid sx={{ display: "flex", flexDirection: "row"}} px={1}>
                <Grid spacing={2} xs={4}>
                        <Button onClick={handleClear} style={redButton} >C</Button>
                        <Button onClick={handleInput} value="7" style={grayButton}>7</Button>
                        <Button onClick={handleInput} value="4" style={grayButton}>4</Button>
                        <Button onClick={handleInput} value="1" style={grayButton}>1</Button>
                        <Button onClick={handleInput} value="0" style={grayButton}>0</Button>
                    </Grid>
                    <Grid spacing={2} xs={4}>
                        <Button style={orangeButton}>+/-</Button>
                        <Button onClick={handleInput} value="8" style={grayButton}>8</Button>
                        <Button onClick={handleInput} value="5" style={grayButton}>5</Button>
                        <Button onClick={handleInput} value="2" style={grayButton}>2</Button>
                        <Button onClick={handleDelete} style={yellowButton}>
                            {<SvgIcon component={BackspaceIcon} />}
                        </Button>
                    </Grid>
                    <Grid spacing={2} xs={4}>
                        <Button value="%" style={orangeButton}>%</Button>
                        <Button onClick={handleInput} value="9" style={grayButton}>9</Button>
                        <Button onClick={handleInput} value="6" style={grayButton}>6</Button>
                        <Button onClick={handleInput} value="3" style={grayButton}>3</Button>
                        <Button onClick={handleInput} value="." style={yellowButton}>.</Button>
                    </Grid>
                    <Grid spacing={2} xs={4}>
                        <Button onClick={handleInput} value="/" style={yellowButton}>/</Button>
                        <Button onClick={handleInput} value="*" style={yellowButton}>*</Button>
                        <Button onClick={handleInput} value="+" style={yellowButton}>+</Button>
                        <Button onClick={handleInput} value="-" style={yellowButton}>-</Button>
                        <Button onClick={handleEquals} style={yellowButton}>=</Button>
                </Grid>
                <Grid xs={6}>

                </Grid>
            </Grid>
        </Grid>
    )
}