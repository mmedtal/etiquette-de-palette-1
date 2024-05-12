import { ArrowDownward, ArrowUpward, Autorenew, LineWeight, Loop, TextRotationNone, UnfoldLess, UnfoldMore, VerticalAlignBottom, VerticalAlignTop } from "@mui/icons-material";
import ModifyPropertiesInput from "../../helpers/ModifyPropertiesInput";
import { useDispatch, useSelector } from "react-redux";
import PaletteControls from "./PaletteControls";
import { useEffect, useState } from "react";
import CodeBarChooser from "../../helpers/CodeBarChooser";

export default function LeftAside(props){


    const {whichHeaderButtonIsCliqued,activeHeaderIcon} = useSelector(state=>state.headerClickReducer)

    const {hauteur,largeur,positionX,positionY,epaisseur,rotation,paletteHauteur,paletteLargeur,tailleDePolice} = useSelector(state=>state.leftAsideControllersReducer)

    const [elementXPosition,setElementXPosition]=useState(positionX)

    const [leftAsidePositionX,setLeftAsidePositionX]= useState("")

    useEffect(()=>{
        setLeftAsidePositionX(positionX)
    },[])
    useEffect(()=>{
        setLeftAsidePositionX(positionX)
    },[positionX])


    useEffect(()=>{
        //const x = useSelector(state=>state.leftAsideControllersReducer)
        //console.log("x efzef",x)
        setElementXPosition(positionX)
        //console.log("positionX ",positionX)
        //console.log("positionX ",positionX)
    },[positionX])

    //to handle input focus when i click on left aside
    const dispatch = useDispatch()
    function handleLeftAsideClick(){
        dispatch({type:"SET_LEFT_ASIDE_CLICKED",payload:true})
    }
    return(
        <div className="p-2 pl-10 flex-col space-y-6"
            onClick={handleLeftAsideClick}
        //onClick={()=>dispatch({type:})}
        >
            
            {/* <button onClick={()=>console.log("whichHeaderButtonIsCliqued = ",whichHeaderButtonIsCliqued)}>click</button> */}
            {/* {whichHeaderButtonIsCliqued!="modifier_dimensions_palette"&& */}
            
            {whichHeaderButtonIsCliqued=="modifier_dimensions_palette"&&
                <PaletteControls/>
            }

            {(whichHeaderButtonIsCliqued!="modifier_dimensions_palette")&&
            <div>
                <ModifyPropertiesInput label="Position X:"
                    valueFromReduxStore={positionX}
                    onClickDispatchToLeftAsideControllersReducer="MODIFIER_POSITION_X"

                    leftIcon={<ArrowDownward color="error" style={{ transform: 'rotate(90deg)' }}/>}
                    rightIcon={<ArrowUpward color="success"style={{ transform: 'rotate(90deg)' }}/>}
                />

                <ModifyPropertiesInput label="Position Y:"
                    valueFromReduxStore={positionY}
                // leftIcon={<TextRotationNone color="error" style={{ transform: 'scaleX(-1)' }}/>}
                // rightIcon={<TextRotationNone color="success"/>}
                    onClickDispatchToLeftAsideControllersReducer="MODIFIER_POSITION_Y"

                    rightIcon={<ArrowDownward color="error" />}
                    leftIcon={<ArrowUpward color="success"/>}
                />
                

                {/* <ModifyPropertiesInput label="Hauteur:"
                    valueFromReduxStore={hauteur}
                    // leftIcon={<VerticalAlignBottom color="error"/>}
                    // rightIcon={<VerticalAlignTop   color="success"/>}
                    onClickDispatchToLeftAsideControllersReducer="MODIFIER_HAUTEUR"

                    leftIcon={<UnfoldLess color="error" />}
                    rightIcon={<UnfoldMore color="success"/>}
                /> */}
                
                {/* <ModifyPropertiesInput label="Largeur:"
                    valueFromReduxStore={largeur}
                    onClickDispatchToLeftAsideControllersReducer="MODIFIER_LARGEUR"

                    leftIcon={<UnfoldLess color="error"     style={{ transform: 'rotate(90deg)' }}/>}
                    rightIcon={<UnfoldMore color="success"  style={{ transform: 'rotate(90deg)' }}/>}
                /> */}

                {/* <ModifyPropertiesInput label="Epaisseur:"
                    valueFromReduxStore={epaisseur}
                    onClickDispatchToLeftAsideControllersReducer="MODIFIER_EPAISSEUR"

                    leftIcon={<LineWeight color="error" style={{ transform: 'rotate(180deg)' }}/>}
                    rightIcon={<LineWeight color="success"/>}
                /> */}

                <ModifyPropertiesInput label="Rotation en deg:"
                    valueFromReduxStore={rotation}
                    onClickDispatchToLeftAsideControllersReducer="MODIFIER_ROTATION"

                    leftIcon={<Loop color="error" />}
                    rightIcon={<Autorenew color="success"/>}
                />

                <ModifyPropertiesInput label="Taille de la police en px:"
                    valueFromReduxStore={tailleDePolice}
                    onClickDispatchToLeftAsideControllersReducer="MODIFIER_TAILLE_POLICE"

                    leftIcon={<ArrowDownward color="error" />}
                    rightIcon={<ArrowUpward color="success"/>}
                />


            </div>}
                {/* EAN-13 widely used in japan and europ 
                Code 3ç used in america
                UPC-A used in retain industry
                */}

                {/* &&whichHeaderButtonIsCliqued!="inserer_texte"
                &&whichHeaderButtonIsCliqued!="dessiner_forme"
                &&whichHeaderButtonIsCliqued!="modifier_dimensions_palette"
                ||whichHeaderButtonIsCliqued=="selectionner" */}
             {/* {(whichHeaderButtonIsCliqued=="inserer_barcode")&&    */}
            
            {activeHeaderIcon=="Barcode"&&<CodeBarChooser 
            symbologies={["Code 39","Code 128"]}/>}
            {/* les autres codes à prendre en charge :"Code 128","EAN-13","UPC-A" */}
            
             {/* } */}

        </div>
    )
}