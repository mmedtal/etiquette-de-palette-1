import { IconButton } from "@mui/material";
import { useDispatch } from "react-redux";

export default function HeaderIcon(props){

    const dispatch=useDispatch()




    return(
        <div className="flex flex-col">
            <IconButton sx={{color:"darkblue"}} 
                onClick={()=>{props.onClickDispatchActionsToReduxStore.map(action=>dispatch({type:action.type,payload:action.payload}))}}>
                {/* dispatch({type:props.onClickDispatchToReduxStore})}} */}
                    {props.children}
            </IconButton>
            <div className="text-center -mt-2 font-light" style={{color:"darkblue",fontFamily:""}}>
                {props.text}
            </div>
        </div>
    )
}