import { ArrowDownward, ArrowUpward, Autorenew, LineWeight, Loop, TextRotationNone, UnfoldLess, UnfoldMore, VerticalAlignBottom, VerticalAlignTop } from "@mui/icons-material";
import ModifyPropertiesInput from "../../helpers/ModifyPropertiesInput";
import { useSelector } from "react-redux";
import PaletteControls from "./PaletteControls";

export default function LeftAside(props){


    const whichHeaderIconIsCliqued = useSelector(state=>state.headerClickReducer.whichHeaderButtonIsCliqued)

    const {hauteur,largeur,positionX,positionY,epaisseur,rotation,paletteHauteur,paletteLargeur} = useSelector(state=>state.leftAsideControllersReducer)



    return(
        <div className="p-2 pl-10 flex-col space-y-6">
            
            {/* <button onClick={()=>console.log("whichHeaderIconIsCliqued = ",whichHeaderIconIsCliqued)}>click</button> */}
            {/* {whichHeaderIconIsCliqued!="modifier_dimensions_palette"&& */}
            
            {whichHeaderIconIsCliqued=="modifier_dimensions_palette"&&
                <PaletteControls/>
            }

            {whichHeaderIconIsCliqued!="modifier_dimensions_palette"&&
            <div>
                <ModifyPropertiesInput label="Position X:" disabled={true}
                    valueFromReduxStore={positionX}
                    onClickDispatchToLeftAsideControllersReducer="MODIFIER_POSITION_X"

                    // color="error
                    leftIcon={<ArrowDownward color="disabled" style={{ transform: 'rotate(90deg)' }}/>}
                    // color="disabled"
                    rightIcon={<ArrowUpward color="disabled"style={{ transform: 'rotate(90deg)' }}/>}
                />

                <ModifyPropertiesInput label="Position Y:"disabled={true}
                    valueFromReduxStore={positionY}
                // leftIcon={<TextRotationNone color="error" style={{ transform: 'scaleX(-1)' }}/>}
                // rightIcon={<TextRotationNone color="success"/>}
                    onClickDispatchToLeftAsideControllersReducer="MODIFIER_POSITION_Y"

                    leftIcon={<ArrowDownward color="disabled" />}
                    rightIcon={<ArrowUpward color="disabled"/>}
                />
                

                <ModifyPropertiesInput label="Hauteur:" disabled={true}
                    valueFromReduxStore={hauteur}
                    // leftIcon={<VerticalAlignBottom color="error"/>}
                    // rightIcon={<VerticalAlignTop   color="success"/>}
                    onClickDispatchToLeftAsideControllersReducer="MODIFIER_HAUTEUR"

                    leftIcon={<UnfoldLess color="disabled" />}
                    rightIcon={<UnfoldMore color="disabled"/>}
                />
                
                <ModifyPropertiesInput label="Largeur:" disabled={true}
                    valueFromReduxStore={largeur}
                    onClickDispatchToLeftAsideControllersReducer="MODIFIER_LARGEUR"

                    leftIcon={<UnfoldLess color="disabled"     style={{ transform: 'rotate(90deg)' }}/>}
                    rightIcon={<UnfoldMore color="disabled"  style={{ transform: 'rotate(90deg)' }}/>}
                />

                <ModifyPropertiesInput label="Epaisseur:" disabled={true}
                    valueFromReduxStore={epaisseur}
                    onClickDispatchToLeftAsideControllersReducer="MODIFIER_EPAISSEUR"

                    // color="error"
                    leftIcon={<LineWeight color="disabled" style={{ transform: 'rotate(180deg)' }}/>}
                    // color="success"
                    rightIcon={<LineWeight color="disabled"/>}
                />

                <ModifyPropertiesInput label="Rotation:" disabled={true}
                    valueFromReduxStore={epaisseur}
                    onClickDispatchToLeftAsideControllersReducer="MODIFIER_ROTATION"
                    // color="error" 
                    leftIcon={<Loop color="disabled" />}
                    // color="success"
                    rightIcon={<Autorenew color="disabled"/>}
                />
            </div>}
            

        </div>
    )
}