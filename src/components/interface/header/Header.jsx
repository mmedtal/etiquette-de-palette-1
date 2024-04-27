import { ShapeLine, TextFormat } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import HeaderIcon from "./HeaderIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowPointer, faBarcode, faFont, faHouse, faICursor, faSlash, faVectorSquare } from "@fortawesome/free-solid-svg-icons";

export default function Header(props){




    return(
        <div className="flex justify-around">
            <HeaderIcon text="Sélectionner" onClickDispatchActionsToReduxStore= {[{type:"SELECTIONNER"},{type:"AFFECTER_HAUTEUR",payload:0},{type:"AFFECTER_LARGEUR",payload:0} ]} >
                {/* <TextFormat fontSize="large"/> */}
                <FontAwesomeIcon icon={faArrowPointer}/>
            </HeaderIcon>
            
            <HeaderIcon text="Text" onClickDispatchActionsToReduxStore= {[{type:"INSERER_TEXTE"},{type:"AFFECTER_HAUTEUR",payload:0},{type:"AFFECTER_LARGEUR",payload:0} ]} >
                <TextFormat fontSize="large"/>
                {/* <FontAwesomeIcon icon={faFont}/> */}
            </HeaderIcon>

            <HeaderIcon text="Formes" onClickDispatchActionsToReduxStore= {[{type:"DESSINER_FORME"},{type:"AFFECTER_HAUTEUR",payload:0},{type:"AFFECTER_LARGEUR",payload:0} ]} >
                {/* <div style={{height:"30px",width:"2.5px",backgroundColor:"grey",transform:"rotate(45deg)"}}>
                </div> */}
                {/* <FontAwesomeIcon icon={faSlash}/> */}
                <ShapeLine fontSize="large"/>
            </HeaderIcon>

            <HeaderIcon text="Barcode" onClickDispatchActionsToReduxStore= {[{type:"INSERER_BARCODE"},{type:"AFFECTER_HAUTEUR",payload:0},{type:"AFFECTER_LARGEUR",payload:0} ]} >        
                <FontAwesomeIcon icon={faBarcode}/>
            </HeaderIcon>

            <HeaderIcon text="Dimensions" onClickDispatchActionsToReduxStore= {[{type:"MODIFIER_DIMENSIONS_PALETTE"},{type:"AFFECTER_HAUTEUR",payload:450},{type:"AFFECTER_LARGEUR",payload:600}]} >        
                <FontAwesomeIcon icon={faVectorSquare}/>
            </HeaderIcon>
            
        </div>
    )
}