import { Crop54, HorizontalRule, ShapeLine, TextFormat } from "@mui/icons-material";
import { Button, IconButton, Menu, MenuItem } from "@mui/material";
import HeaderIcon from "./HeaderIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowPointer, faBarcode, faFont, faHouse, faICursor, faSlash, faVectorSquare } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Header(props){


    const [clickedButton,setClickedButton]=useState(0)


    const dispatch = useDispatch()
    function handleHeaderComponentClick(){
        dispatch({type:"SET_LEFT_ASIDE_CLICKED",payload:false})
    }

    //07.05.24 18:29 
    const [activeIcon,setActiveIcon]=useState("Sélectionner")


    const [anchorEl,setAnchorEl]=useState(null)
    const [isMenuOpen,setMenuOpen] = useState(false)
    function handleActiveIcon(activeIcon,e){
        setActiveIcon(activeIcon)
        //console.log("activeIcon frm hdr:  ",activeIcon)
        //handling multiple forms, but this should be only a temprary solution
        dispatch({type:"ACTIVE_HEADER_ICON",payload:activeIcon})
        if(activeIcon==="Formes" && !isMenuOpen){
            setAnchorEl(e.currentTarget)
            setMenuOpen(true)
        }
    }

    //10.05.24 09:54 pour handler le two way binding pour le visuel, pour l'instant que barcode
    const activeHeaderIconFromRedux = useSelector(state=>state.headerClickReducer.activeHeaderIcon)
    useEffect(()=>{
        if(activeHeaderIconFromRedux=="Barcode"){
            setActiveIcon(activeHeaderIconFromRedux)
        }
    },[activeHeaderIconFromRedux])


    function handleMenuClose(){
        //console.log("anchorEl : ",anchorEl)
        //console.log("isMenuOpen : ",isMenuOpen)
        setAnchorEl(null)
        setMenuOpen(false)
        
    }

    function handleMenuLigneClick(){
        //console.log("ligne clicked")
        setAnchorEl(null)
        setMenuOpen(false)
    }
    function handleMenuRectangleClick(){
        setAnchorEl(null)
        setMenuOpen(false)
    }
    return(
        <div className="flex justify-around" onClick={handleHeaderComponentClick}>
            <HeaderIcon handleActiveIcon={handleActiveIcon} activeIcon={activeIcon} text="Sélectionner" onClickDispatchActionsToReduxStore= {[{type:"SELECTIONNER"},{type:"AFFECTER_HAUTEUR",payload:0},{type:"AFFECTER_LARGEUR",payload:0} ]} >
                {/* <TextFormat fontSize="large"/> */}
                <FontAwesomeIcon icon={faArrowPointer}/>
            </HeaderIcon>
            
            <HeaderIcon handleActiveIcon={handleActiveIcon} activeIcon={activeIcon} text="Text" onClickDispatchActionsToReduxStore= {[{type:"INSERER_TEXTE"},{type:"AFFECTER_HAUTEUR",payload:0},{type:"AFFECTER_LARGEUR",payload:0} ]} >
                <TextFormat fontSize="large"/>
                {/* <FontAwesomeIcon icon={faFont}/> */}
            </HeaderIcon>

            <HeaderIcon handleActiveIcon={handleActiveIcon} activeIcon={activeIcon} text="Formes" onClickDispatchActionsToReduxStore= {[{type:"DESSINER_FORME"},{type:"AFFECTER_HAUTEUR",payload:0},{type:"AFFECTER_LARGEUR",payload:0} ]} >
                {/* <div style={{height:"30px",width:"2.5px",backgroundColor:"grey",transform:"rotate(45deg)"}}>
                </div> */}
                {/* <FontAwesomeIcon icon={faSlash}/> */}
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={isMenuOpen}
                    //onClose={handleClose} 
                    onClose={handleMenuClose}
                    >
                    <MenuItem onClick={handleMenuLigneClick}>
                            <HorizontalRule/> Ligne
                    </MenuItem>
                    
                    <MenuItem onClick={handleMenuRectangleClick}>
                        <Crop54/> Rectangle
                    </MenuItem>
                </Menu>

                <ShapeLine fontSize="large"/>
            </HeaderIcon>

            <HeaderIcon handleActiveIcon={handleActiveIcon} activeIcon={activeIcon} text="Barcode" 
            onClickDispatchActionsToReduxStore= {[{type:"INSERER_BARCODE"},{type:"AFFECTER_HAUTEUR",payload:0},{type:"AFFECTER_LARGEUR",payload:0} ]} >        
                <FontAwesomeIcon icon={faBarcode}/>
            </HeaderIcon>

            <HeaderIcon handleActiveIcon={handleActiveIcon} activeIcon={activeIcon} text="Dimensions" onClickDispatchActionsToReduxStore= {[{type:"MODIFIER_DIMENSIONS_PALETTE"},{type:"AFFECTER_HAUTEUR",payload:450},{type:"AFFECTER_LARGEUR",payload:600}]} >        
                <FontAwesomeIcon icon={faVectorSquare}/>
            </HeaderIcon>
            
        </div>
    )
}