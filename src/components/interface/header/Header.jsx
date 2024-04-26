import { ShapeLine, TextFormat } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import HeaderIcon from "./Icon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowPointer, faBarcode, faFont, faHouse, faICursor, faSlash, faVectorSquare } from "@fortawesome/free-solid-svg-icons";
import { faFileText } from "@fortawesome/free-regular-svg-icons";

export default function Header(props){




    return(
        <div className="flex justify-around ">
            <HeaderIcon text="Sélectionner">
                {/* <TextFormat fontSize="large"/> */}
                <FontAwesomeIcon icon={faArrowPointer}/>
            </HeaderIcon>

            <HeaderIcon text="Text">
                <TextFormat fontSize="large"/>
                {/* <FontAwesomeIcon icon={faFont}/> */}
            </HeaderIcon>

            <HeaderIcon text="Formes">
                {/* <div style={{height:"30px",width:"2.5px",backgroundColor:"grey",transform:"rotate(45deg)"}}>
                </div> */}
                {/* <FontAwesomeIcon icon={faSlash}/> */}
                <ShapeLine fontSize="large"/>
            </HeaderIcon>

            <HeaderIcon text="Barcode">        
                <FontAwesomeIcon icon={faBarcode}/>
            </HeaderIcon>

            <HeaderIcon text="Dimensions">        
                <FontAwesomeIcon icon={faVectorSquare}/>
            </HeaderIcon>
            
        </div>
    )
}