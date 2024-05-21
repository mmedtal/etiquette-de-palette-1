import { UnfoldLess, UnfoldMore } from "@mui/icons-material";
import { IconButton, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { milimitersToPixelsConverter, pixelsToMilimitersConverter } from "./converterFunctions";
import { useEffect, useState } from "react";

export default function LabelSizeInput(props){

    const dispatch = useDispatch()

    const {screenResolutionInPpi}=useSelector(state=>state.leftAsideControllersReducer)


    const [value,setValue]=useState(parseInt(pixelsToMilimitersConverter(screenResolutionInPpi,props.valueFromReduxStoreInPixels)))

    const [didValueIncrementedOrDecremented,setDidValueIncrementedOrDecremented]=useState(null)

    

    function incrementInputValue(){
        dispatch({type:props.actionToDispatch,
            payload:parseFloat(milimitersToPixelsConverter(screenResolutionInPpi,value)+screenResolutionInPpi/25.4)})
        
        setValue(value+1)
    }

    function decrementInputValue(){      
        dispatch({type:props.actionToDispatch,
            payload:parseFloat(milimitersToPixelsConverter(screenResolutionInPpi,value)-screenResolutionInPpi/25.4)})
            
        setValue(value-1)
    }

    
    function manualyEnteredInputValue(e){
        
        let newValue=parseFloat(e.target.value)

        if(newValue>value && Math.abs(newValue-value)==1){
            dispatch({type:props.actionToDispatch,
                payload:parseFloat(milimitersToPixelsConverter(screenResolutionInPpi,value)+screenResolutionInPpi/25.4)})
            setValue(newValue)
        }
        if(newValue<value && Math.abs(newValue-value)==1){
            dispatch({type:props.actionToDispatch,
                payload:parseFloat(milimitersToPixelsConverter(screenResolutionInPpi,value)-screenResolutionInPpi/25.4)})
            setValue(newValue)
        }

        if(newValue>value && Math.abs(newValue-value)!=1){
            dispatch({type:props.actionToDispatch,
                payload:parseFloat(milimitersToPixelsConverter(screenResolutionInPpi,value)+screenResolutionInPpi*newValue/25.4)})
            setValue(newValue)
        }
        if(newValue<value && Math.abs(newValue-value)!=1){
            dispatch({type:props.actionToDispatch,
                payload:parseFloat(milimitersToPixelsConverter(screenResolutionInPpi,value)-screenResolutionInPpi*newValue/25.4)})
            setValue(newValue)
        }
        
        
    }
    

   

 /*
    useEffect(()=>{
        setValue(props.valueFromReduxStore)
     
    },[props.valueFromReduxStore])
    */

    useEffect(()=>{
        setValue(parseInt(pixelsToMilimitersConverter(screenResolutionInPpi, props.valueFromReduxStoreInPixels)));
    },[screenResolutionInPpi])


    return (
        <TextField

            style={{fontSize:"90%"}}
            value={value}
            type="number"
            variant="standard"
            label={props.label}
            
            

            onChange={manualyEnteredInputValue}

            inputProps={{
                style:{textAlign:"center",fontSize:"120%"},
                step:1
            }}

            InputLabelProps={{
                style:{fontSize:"140%",fontFamily:"Segoe UI",color:"black"}
            }}
            InputProps={{
                endAdornment:<IconButton onClick={incrementInputValue} >
                    {/* <ArrowDownward color="error"/> */}
                    <UnfoldMore color="success"  />
                </IconButton>,
                startAdornment:<IconButton onClick={decrementInputValue} >
                    {/* <ArrowUpward color="success"/> */}
                    <UnfoldLess color="error"     />
                </IconButton>
            }}
        
        
        />
    )
}