import { IconButton, TextField } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function ModifyPropertiesInput(props){


    const inputRef = useRef(props.valueFromReduxStorell)
    const dispatch = useDispatch()

    //const anObject = useSelector((state)=>state.leftAsideControllersReducer)

    const [value,setValue]=useState(props.valueFromReduxStore)

    
    // useEffect(() => {
    //     setValue(props.valueFromReduxStore);
    //   }, []);


    function handleChange(newValue){
        //let newValue = parseInt(newValue)


    }

    function incrementInputValue(){
        //console.log("inputRef",inputRef.current)
        //console.log("value ft sze : ",value)
        setValue(value+1)
        //setValue(value+props.step)

        //after using useEffect dispatch({type:props.onClickDispatchToLeftAsideControllersReducer,payload:value})
    }

    function decrementInputValue(){
        
        setValue(value-1)
        //setValue(value-props.step)
        //after using useEffect dispatch({type:props.onClickDispatchToLeftAsideControllersReducer,payload:value})
    }

    function manualyEnteredInputValue(e){
        
        let newValue=parseInt(e.target.value)
        //if(newValue<=0) return
        // if(newValue>value){
        //     //console.log("new value is bigger")
        //     //console.log("redux store ",anObject)
        //     dispatch({type:props.onClickDispatchToLeftAsideControllersReducer,payload:newValue})
        //     setValue(newValue)
        //     return
        // }
        // if(newValue<value){
        //     //console.log("old value is bigger")
        //     dispatch({type:props.onClickDispatchToLeftAsideControllersReducer,payload:-newValue})
        //     //console.log("redux store ",anObject)
        //     setValue(newValue)
        //     return            
        // }

        // after using useEffect dispatch({type:props.onClickDispatchToLeftAsideControllersReducer,payload:newValue})
        setValue(newValue)
    }

    useEffect(()=>{
        dispatch({type:props.onClickDispatchToLeftAsideControllersReducer,payload:value})
        //console.log(value)
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

            // pour centrer le text à l'intérieur
            inputProps={{
                style:{textAlign:props.inputValueAlign,fontSize:"120%"},
                step:props.step
            }}

            
        >
            
        </TextField>
    )
}