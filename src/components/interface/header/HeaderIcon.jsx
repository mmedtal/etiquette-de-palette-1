import { IconButton } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";

export default function HeaderIcon(props){

    const dispatch=useDispatch()



    const [index,setIndex]=useState("none");

    return(
        <div className="flex flex-col">
            <IconButton sx={{color:"darkblue"}}  index={props.index} disabled={props.disabled}
                onClick={()=>{props.onClickDispatchActionsToReduxStore.map(action=>dispatch({type:action.type,payload:action.payload}))}}>
                    {props.children}
            </IconButton>
            <div className="text-center -mt-2 font-light" style={{color:"darkblue",fontFamily:""}}>
                {props.text}
            </div>
        </div>
    )
}