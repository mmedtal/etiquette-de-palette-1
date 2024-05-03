import { ArrowDownward, ArrowUpward, Autorenew, LineWeight, Loop, TextRotationNone, UnfoldLess, UnfoldMore, VerticalAlignBottom, VerticalAlignTop } from "@mui/icons-material";
import ModifyPropertiesInput from "../../helpers/ModifyPropertiesInput";
import { useSelector } from "react-redux";
import PaletteControls from "./PaletteControls";
import { useEffect, useState } from "react";

export default function LeftAside(props){


    const whichHeaderIconIsCliqued = useSelector(state=>state.headerClickReducer.whichHeaderButtonIsCliqued)

    const {hauteur,largeur,positionX,positionY,epaisseur,rotation,paletteHauteur,paletteLargeur} = useSelector(state=>state.leftAsideControllersReducer)

    const [elementXPosition,setElementXPosition]=useState(positionX)

    useEffect(()=>{
        //const x = useSelector(state=>state.leftAsideControllersReducer)
        //console.log("x efzef",x)
        setElementXPosition(positionX)
        //console.log("positionX ",positionX)
        console.log("positionX ",positionX)
    },[positionX])
    return(
        <div className="p-2 pl-10 flex-col space-y-6">
            
            {/* <button onClick={()=>console.log("whichHeaderIconIsCliqued = ",whichHeaderIconIsCliqued)}>click</button> */}
            {/* {whichHeaderIconIsCliqued!="modifier_dimensions_palette"&& */}
            
            {whichHeaderIconIsCliqued=="modifier_dimensions_palette"&&
                <PaletteControls/>
            }

            {whichHeaderIconIsCliqued!="modifier_dimensions_palette"&&
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

                    leftIcon={<ArrowDownward color="error" />}
                    rightIcon={<ArrowUpward color="success"/>}
                />
                

                <ModifyPropertiesInput label="Hauteur:"
                    disabled={true}
                    valueFromReduxStore={hauteur}
                    // leftIcon={<VerticalAlignBottom color="error"/>}
                    // rightIcon={<VerticalAlignTop   color="success"/>}
                    onClickDispatchToLeftAsideControllersReducer="MODIFIER_HAUTEUR"

                    leftIcon={<UnfoldLess color="disabled" />}
                    rightIcon={<UnfoldMore color="disabled"/>}
                />
                
                <ModifyPropertiesInput label="Largeur:"
                 disabled={true}
                    valueFromReduxStore={largeur}
                    onClickDispatchToLeftAsideControllersReducer="MODIFIER_LARGEUR"

                    leftIcon={<UnfoldLess color="disabled"     style={{ transform: 'rotate(90deg)' }}/>}
                    rightIcon={<UnfoldMore color="disabled"  style={{ transform: 'rotate(90deg)' }}/>}
                />

                <ModifyPropertiesInput label="Epaisseur:"
                 disabled={true}
                    valueFromReduxStore={epaisseur}
                    onClickDispatchToLeftAsideControllersReducer="MODIFIER_EPAISSEUR"

                    leftIcon={<LineWeight color="disabled" style={{ transform: 'rotate(180deg)' }}/>}
                    rightIcon={<LineWeight color="disabled"/>}
                />

                <ModifyPropertiesInput label="Rotation:"
                 disabled={true}
                    valueFromReduxStore={epaisseur}
                    onClickDispatchToLeftAsideControllersReducer="MODIFIER_ROTATION"

                    leftIcon={<Loop color="disabled" />}
                    rightIcon={<Autorenew color="disabled"/>}
                />
            </div>}
            

        </div>
    )
}