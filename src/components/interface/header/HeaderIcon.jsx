import { IconButton } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";

export default function HeaderIcon(props){

    const dispatch=useDispatch()



    const [index,setIndex]=useState("none");

    function handleClick(e){
        props.onClickDispatchActionsToReduxStore.map(action=>dispatch({type:action.type,payload:action.payload}))
        props.handleActiveIcon(props.text,e)
    }
    return(
        <div className="flex flex-col ">
            <IconButton sx={{color:"darkblue", 
                        backgroundColor:props.text==props.activeIcon?"#e5e7eb":""}}  
             index={props.index} disabled={props.disabled}
            onClick={handleClick}>
                    {props.children}
            </IconButton>
            <div className="text-center -mt-2 font-light" style={{color:"darkblue",fontFamily:""}}>
                {props.text}
            </div>
        </div>
    )
}