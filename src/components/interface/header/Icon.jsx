import { IconButton } from "@mui/material";

export default function HeaderIcon(props){





    return(
        <div className="flex flex-col">
            <IconButton>
                    {props.children}
            </IconButton>
            <div className="text-center -mt-4">
                {props.text}
            </div>
        </div>
    )
}