import { Grid, SvgIcon } from "@mui/material";
import * as React from "react";
import Button from '@mui/material/Button';
import { redButton, grayButton, orangeButton, yellowButton } from "./Styles";
import BackspaceIcon from '@mui/icons-material/Backspace';
import { useState } from "react";


export const Calculator = () => {

    const [input, setInput] = useState('')

    function handleInput(event){

        // Attempting to add key responses
        // const key = event.target.value

        // switch (key) {
        //     case 'clear':
        //         handleClear()
        //         break;
        //     case 'handleDelete':
        //         handleDelete()
        //         break;
        //     case '+':
        //     case '-':
        //     case '*':
        //     case '/':
        //         setInput(input.concat(key));
        //         break;
        //     case '=':
        //         handleEquals();
        //         break;
        //     default:
        //         setInput(input.concat(key));
        //         break;
        // }

        setInput(input.slice(0, 12) + event.target.value);
    }

    function handleClear(){
        setInput('')
    }

    function handleDelete(){
        setInput(input.slice(0, -1));
    }

    function handlePercent(){
        const currentValue = parseFloat(input);
        const percentValue = currentValue / 100;
        setInput(percentValue.toString())
    }

    function handleNegative(){
        const currentValue = parseFloat(input);
        currentValue < 0 ? setInput(Math.abs(currentValue).toString()) : setInput((-1 * currentValue).toString())
    }

    function handleEquals(){
        try{
            setInput(eval(input.slice(0, 12)));
        } catch (error) {
            setInput("Error");
        }
    }

    return (
        <Grid className="calculator">
            <Grid className="entry" m={0} p={2} >
                <input 
                    type="text" 
                    value={input} 
                    maxLength="10"
                />
            </Grid>
            <Grid sx={{ display: "flex", flexDirection: "row"}} px={1}>
                <Grid>
                        <Button onClick={handleClear} style={redButton} >C</Button>
                        <Button onClick={handleInput} value="7" style={grayButton}>7</Button>
                        <Button onClick={handleInput} value="4" style={grayButton}>4</Button>
                        <Button onClick={handleInput} value="1" style={grayButton}>1</Button>
                        <Button onClick={handleInput} value="0" style={grayButton}>0</Button>
                    </Grid>
                    <Grid>
                        <Button onClick={handleNegative} style={orangeButton}>+/-</Button>
                        <Button onClick={handleInput} value="8" style={grayButton}>8</Button>
                        <Button onClick={handleInput} value="5" style={grayButton}>5</Button>
                        <Button onClick={handleInput} value="2" style={grayButton}>2</Button>
                        <Button onClick={handleDelete} id="handleDelete" style={yellowButton}>
                            {<SvgIcon component={BackspaceIcon} />}
                        </Button>
                    </Grid>
                    <Grid>
                        <Button onClick={handlePercent} value="%" style={orangeButton}>%</Button>
                        <Button onClick={handleInput} value="9" style={grayButton}>9</Button>
                        <Button onClick={handleInput} value="6" style={grayButton}>6</Button>
                        <Button onClick={handleInput} value="3" style={grayButton}>3</Button>
                        <Button onClick={handleInput} value="." style={yellowButton}>.</Button>
                    </Grid>
                    <Grid>
                        <Button onClick={handleInput} value="/" style={yellowButton}>/</Button>
                        <Button onClick={handleInput} value="*" style={yellowButton}>*</Button>
                        <Button onClick={handleInput} value="+" style={yellowButton}>+</Button>
                        <Button onClick={handleInput} value="-" style={yellowButton}>-</Button>
                        <Button onClick={handleEquals} style={yellowButton}>=</Button>
                </Grid>
            </Grid>
        </Grid>
    )
}