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

    const [activeIcon,setActiveIcon]=useState("Sélectionner")


    const [anchorEl,setAnchorEl]=useState(null)
    const [isMenuOpen,setMenuOpen] = useState(false)
    function handleActiveIcon(activeIcon,e){
        setActiveIcon(activeIcon)
        dispatch({type:"ACTIVE_HEADER_ICON",payload:activeIcon})
        if(activeIcon==="Formes" && !isMenuOpen){
            setAnchorEl(e.currentTarget)
            setMenuOpen(true)
        }
    }

    const activeHeaderIconFromRedux = useSelector(state=>state.headerClickReducer.activeHeaderIcon)
    useEffect(()=>{
        if(activeHeaderIconFromRedux=="Barcode"){
            setActiveIcon(activeHeaderIconFromRedux)
        }
    },[activeHeaderIconFromRedux])


    function handleMenuClose(){
        setAnchorEl(null)
        setMenuOpen(false)
        
    }

    function handleMenuLigneClick(){
        dispatch({type:"DESSINER_LIGNE_FORME"})
        setAnchorEl(null)
        setMenuOpen(false)
    }
    function handleMenuRectangleClick(){
        setAnchorEl(null)
        setMenuOpen(false)
        dispatch({type:"DESSINER_RECTANGLE_FORME"})
    }
    return(
        <div className="flex justify-around" onClick={handleHeaderComponentClick}>

            <HeaderIcon handleActiveIcon={handleActiveIcon} activeIcon={activeIcon} text="Selectionner" onClickDispatchActionsToReduxStore= {[{type:"SELECTIONNER"},{type:"AFFECTER_HAUTEUR",payload:0},{type:"AFFECTER_LARGEUR",payload:0} ]} >
                <FontAwesomeIcon icon={faArrowPointer}/>
            </HeaderIcon>
            
            <HeaderIcon handleActiveIcon={handleActiveIcon} activeIcon={activeIcon} text="Text" 
                onClickDispatchActionsToReduxStore= {[{type:"INSERER_TEXTE"},
                {type:"AFFECTER_HAUTEUR",payload:0},{type:"AFFECTER_LARGEUR",payload:0} ]} >
                <TextFormat fontSize="large"/>
            </HeaderIcon>


            <HeaderIcon handleActiveIcon={handleActiveIcon} activeIcon={activeIcon} 
                text="Formes" 
                onClickDispatchActionsToReduxStore= {[{type:"AFFECTER_HAUTEUR",payload:0},{type:"AFFECTER_LARGEUR",payload:0} ]} >
               
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={isMenuOpen}
                    onClose={handleMenuClose}
                    >
                    <MenuItem onClick={handleMenuLigneClick}>
                            <HorizontalRule/> Ligne
                    </MenuItem>
              
                </Menu>

                <ShapeLine fontSize="large"/>
            </HeaderIcon>

            <HeaderIcon handleActiveIcon={handleActiveIcon} activeIcon={activeIcon} text="Barcode" 
            onClickDispatchActionsToReduxStore= {[{type:"INSERER_BARCODE"},{type:"AFFECTER_HAUTEUR",payload:0},{type:"AFFECTER_LARGEUR",payload:0} ]} >        

                <FontAwesomeIcon icon={faBarcode}/>
            </HeaderIcon>

            <HeaderIcon handleActiveIcon={handleActiveIcon} activeIcon={activeIcon} text="Dimensions" onClickDispatchActionsToReduxStore= 
            {[{type:"MODIFIER_DIMENSIONS_PALETTE"},{type:"AFFECTER_HAUTEUR",payload:100},{type:"AFFECTER_LARGEUR",payload:100}]} >        
                <FontAwesomeIcon icon={faVectorSquare}/>
            </HeaderIcon>
            
        </div>
    )
}