import { TextFormat } from "@mui/icons-material";
import { IconButton } from "@mui/material";

export default function Header(props){




    return(
        <div className="flex justify-around">
            <IconButton>
                <TextFormat fontSize="large"/>
            </IconButton>
        </div>
    )
}