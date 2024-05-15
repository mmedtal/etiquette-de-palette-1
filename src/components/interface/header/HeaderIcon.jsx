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
            <IconButton sx={{color:props.text==props.activeIcon?"rgba(4, 120, 87, 0.6)":"darkblue", 
                        backgroundColor:props.text==props.activeIcon?"#e5e7eb":""}}  
             index={props.index} disabled={props.disabled}
            onClick={handleClick}>

                    {props.children}
            </IconButton>
            <div className="text-center -mt-2 font-normal font-sans" 
            style={{color:props.text==props.activeIcon?"green":"darkblue",fontFamily:""}}>
                {props.text}
            </div>
        </div>
    )
}