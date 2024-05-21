import { ArrowDownward, ArrowUpward, Autorenew, LineWeight, Loop, TextRotationNone, UnfoldLess, UnfoldMore, VerticalAlignBottom, VerticalAlignTop } from "@mui/icons-material";
import ModifyPropertiesInput from "../../helpers/ModifyPropertiesInput";
import { useDispatch, useSelector } from "react-redux";
import PaletteControls from "./PaletteControls";
import { useEffect, useState } from "react";
import CodeBarChooser from "../../helpers/CodeBarChooser";
import TextControls from "./TextControls";
import BarcodeControls from "./BarcodeControls";
import FormsControls from "./FormsControls";

export default function LeftAside(props){


    const {whichHeaderButtonIsCliqued,activeHeaderIcon} = useSelector(state=>state.headerClickReducer)

    const {hauteur,largeur,positionX,positionY,epaisseur,rotation,paletteHauteur,
        paletteLargeur,tailleDePolice} = useSelector(state=>state.leftAsideControllersReducer)

    const [elementXPosition,setElementXPosition]=useState(positionX)

    const [leftAsidePositionX,setLeftAsidePositionX]= useState("")

    useEffect(()=>{
        setLeftAsidePositionX(positionX)
    },[])
    useEffect(()=>{
        setLeftAsidePositionX(positionX)
    },[positionX])


    useEffect(()=>{
        setElementXPosition(positionX)
    },[positionX])

    const dispatch = useDispatch()
    function handleLeftAsideClick(){
        dispatch({type:"SET_LEFT_ASIDE_CLICKED",payload:true})
    }
    return(
        <div className="p-2 pl-10 flex-col space-y-6"
            onClick={handleLeftAsideClick}
        >
            
            
            {whichHeaderButtonIsCliqued=="modifier_dimensions_palette"&&
                <PaletteControls/>
            }

            {activeHeaderIcon=="Text"&&
                <TextControls/>
            }

            {activeHeaderIcon=="Barcode"&&
                <BarcodeControls/>
            }

            {activeHeaderIcon=="Formes"&&
                <FormsControls/>
            }
            
            {activeHeaderIcon=="Selectionner"&&
                <div className="font-sans italic text-center font-normal text-xl px-5 
                text-black bg-gray-50 p-4 mt-2"
                style={{fontSize:"140%"}}>
               Ici apparaîtront les <strong>éléments</strong> insérés dans la page.
                 
            </div>
            }
            
               

        </div>
    )
}