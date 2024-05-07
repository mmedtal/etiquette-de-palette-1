import { IconButton, TextField } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function ModifyPropertiesInput(props){


    const inputRef = useRef(props.valueFromReduxStorell)
    const dispatch = useDispatch()


    const [value,setValue]=useState(props.valueFromReduxStore)



    function handleChange(newValue){


    }

    function incrementInputValue(){
        setValue(value+1)
    }

    function decrementInputValue(){
        
        setValue(value-1)
    }

    function manualyEnteredInputValue(e){
        
        let newValue=parseInt(e.target.value)
        if(newValue<=0) return


        setValue(newValue)
    }

    useEffect(()=>{
        dispatch({type:props.onClickDispatchToLeftAsideControllersReducer,payload:value})
    },[value])


    useEffect(()=>{
        setValue(props.valueFromReduxStore)
    },[props.valueFromReduxStore])

    return(
        <TextField

            disabled={props.disabled}
            ref={inputRef}
            value={props.valueFromReduxStore}
            type="number"
            variant="standard"
            label={props.label}



            onChange={manualyEnteredInputValue}


            InputLabelProps={{
                style:{fontSize:"140%"}
            }}
            InputProps={{
                endAdornment:<IconButton onClick={incrementInputValue} disabled={props.disabled}>
                    {props.rightIcon}
                </IconButton>,
                startAdornment:<IconButton onClick={decrementInputValue} disabled={props.disabled}>
                    {props.leftIcon}
                </IconButton>
            }}

            inputProps={{
                style:{textAlign:"center",fontSize:"120%"},
                step:1
            }}
        >

        </TextField>
    )
}