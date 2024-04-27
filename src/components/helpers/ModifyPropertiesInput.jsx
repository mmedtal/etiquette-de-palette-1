import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import { IconButton, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function ModifyPropertiesInput(props){

    const dispatch = useDispatch()

    //const anObject = useSelector((state)=>state.leftAsideControllersReducer)

    const [value,setValue]=useState(0)

    function handleChange(newValue){
        //let newValue = parseInt(newValue)


    }

    function incrementInputValue(){
        
        setValue(value+1)
        dispatch({type:props.onClickDispatchToLeftAsideControllersReducer,payload:1})
    }

    function decrementInputValue(){
        
        setValue(value-1)
        dispatch({type:props.onClickDispatchToLeftAsideControllersReducer,payload:-1})
    }

    function manualyEnteredInputValue(e){
        let newValue=parseInt(e.target.value)
        if(newValue>value){
            //console.log("new value is bigger")
            //console.log("redux store ",anObject)
            dispatch({type:props.onClickDispatchToLeftAsideControllersReducer,payload:1})
            setValue(newValue)
            return
        }
        if(newValue<value){
            //console.log("old value is bigger")
            dispatch({type:props.onClickDispatchToLeftAsideControllersReducer,payload:-1})
            //console.log("redux store ",anObject)
            setValue(newValue)
            return            
        }
    }

    return(
        <TextField
            value={props.valueFromReduxStore}
            type="number"
            variant="standard"
            label={props.label}



            onChange={manualyEnteredInputValue}


            InputLabelProps={{
                style:{fontSize:"140%"}
            }}
            InputProps={{
                endAdornment:<IconButton onClick={incrementInputValue}>
                    {/* <ArrowDownward color="error"/> */}
                    {props.rightIcon}
                </IconButton>,
                startAdornment:<IconButton onClick={decrementInputValue}>
                    {/* <ArrowUpward color="success"/> */}
                    {props.leftIcon}
                </IconButton>
            }}

            // pour centrer le text à l'intérieur
            inputProps={{
                style:{textAlign:"center",fontSize:"120%"},
                step:1
            }}
        >

        </TextField>
    )
}