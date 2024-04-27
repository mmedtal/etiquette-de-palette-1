import { ShapeLine, TextFormat } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import HeaderIcon from "./HeaderIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowPointer, faBarcode, faFont, faHouse, faICursor, faSlash, faVectorSquare } from "@fortawesome/free-solid-svg-icons";
import { faFileText } from "@fortawesome/free-regular-svg-icons";

export default function Header(props){




    return(
        <div className="flex justify-around">
            <HeaderIcon text="Sélectionner" onClickDispatchToReduxStore="SELECTIONNER">
                {/* <TextFormat fontSize="large"/> */}
                <FontAwesomeIcon icon={faArrowPointer}/>
            </HeaderIcon>
            
            <HeaderIcon text="Text" onClickDispatchToReduxStore="INSERER_TEXTE">
                <TextFormat fontSize="large"/>
                {/* <FontAwesomeIcon icon={faFont}/> */}
            </HeaderIcon>

            <HeaderIcon text="Formes" onClickDispatchToReduxStore="DESSINER_FORME">
                {/* <div style={{height:"30px",width:"2.5px",backgroundColor:"grey",transform:"rotate(45deg)"}}>
                </div> */}
                {/* <FontAwesomeIcon icon={faSlash}/> */}
                <ShapeLine fontSize="large"/>
            </HeaderIcon>

            <HeaderIcon text="Barcode" onClickDispatchToReduxStore="INSERER_BARCODE">        
                <FontAwesomeIcon icon={faBarcode}/>
            </HeaderIcon>

            <HeaderIcon text="Dimensions" onClickDispatchToReduxStore="MODIFIER_DIMENSIONS">        
                <FontAwesomeIcon icon={faVectorSquare}/>
            </HeaderIcon>
            
        </div>
    )
}