import { IconButton, TextField } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function ModifyPropertiesInput(props){


    //const inputRef = useRef(props.valueFromReduxStorell)
    function pixelsToMilimitersConverter(screenResolutionInPpiFromReduxStore,valueInPixelsFromReduxStore){
        const pixelsPerMilimiter = screenResolutionInPpiFromReduxStore/25.4;
        //which mean that one milimiter has the value pixelsPerMilimiter
        const valueInMilimiters =  valueInPixelsFromReduxStore/ pixelsPerMilimiter; 
        return valueInMilimiters.toFixed(2);
    }
    
    const dispatch = useDispatch()


    const [value,setValue]=useState(props.valueFromReduxStore)

    


    function handleChange(newValue){


    }

    function incrementInputValue(){
        if(props.step){
            setValue(value+props.step)
        }else{
            setValue(value+1)
        }

    }

    function decrementInputValue(){
        
        if(props.step){
            setValue(value-props.step)
        }else{
            setValue(value-1)
        }
    }

    function manualyEnteredInputValue(e){
        
        let newValue=parseFloat(e.target.value)

        setValue(newValue)
    }

    useEffect(()=>{
        dispatch({type:props.onClickDispatchToLeftAsideControllersReducer,payload:value})
    },[value])


    useEffect(()=>{
        setValue(props.valueFromReduxStore)
        //let value=pixelsToMilimitersConverter(props.screenResolutionInPpiFromReduxStore,props.valueFromReduxStore);
        //setValue(value)
        /*
        const pixelsPerMilimiter = props.screenResolutionInPpiFromReduxStore/25.4;
        //which mean that one milimiter has the value pixelsPerMilimiter
        const valueInMilimiters =  props.valueFromReduxStore/ pixelsPerMilimiter; 

        setValue(valueInMilimiters)*/
    },[props.valueFromReduxStore])

    return(
        <TextField
            style={{fontSize:"90%"}}
            disabled={props.disabled}
            // ref={inputRef}
            //value={props.step<1?props.valueFromReduxStore.toFixed(2):props.valueFromReduxStore.toFixed(2)}
            value={value}
            type="number"
            variant="standard"
            label={props.label}
            
            

            onChange={manualyEnteredInputValue}

            inputProps={{
                style:{textAlign:props.inputValueAlign,fontSize:"120%"},
                step:props.step
            }}

            InputLabelProps={{
                style:{fontSize:"140%",fontFamily:"Segoe UI",color:"black"}
            }}
            InputProps={{
                endAdornment:<IconButton onClick={incrementInputValue} disabled={props.disabled}>
                    {/* <ArrowDownward color="error"/> */}
                    {props.rightIcon}
                </IconButton>,
                startAdornment:<IconButton onClick={decrementInputValue} disabled={props.disabled}>
                    {/* <ArrowUpward color="success"/> */}
                    {props.leftIcon}
                </IconButton>
            }}

        >
            
        </TextField>
    )
}