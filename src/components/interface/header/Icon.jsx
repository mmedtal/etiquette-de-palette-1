import { IconButton } from "@mui/material";

export default function HeaderIcon(props){





    return(
        <div className="flex flex-col">
            <IconButton sx={{color:"darkblue"}}>
                    {props.children}
            </IconButton>
            <div className="text-center -mt-2 font-light" style={{color:"darkblue",fontFamily:""}}>
                {props.text}
            </div>
        </div>
    )
}