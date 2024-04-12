import { TextFormat } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import HeaderIcon from "./Icon";

export default function Header(props){




    return(
        <div className="flex justify-around">
            <HeaderIcon text="Text">
                <TextFormat fontSize="large"/>
            </HeaderIcon>

            <HeaderIcon text="Ligne">
                <div style={{height:"30px",width:"2.5px",backgroundColor:"grey",transform:"rotate(45deg)"}}>
                </div>
            </HeaderIcon>
            
        </div>
    )
}