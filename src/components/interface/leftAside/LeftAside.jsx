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
                    valueFromReduxStore={hauteur}
                    // leftIcon={<VerticalAlignBottom color="error"/>}
                    // rightIcon={<VerticalAlignTop   color="success"/>}
                    onClickDispatchToLeftAsideControllersReducer="MODIFIER_HAUTEUR"

                    leftIcon={<UnfoldLess color="error" />}
                    rightIcon={<UnfoldMore color="success"/>}
                />
                
                <ModifyPropertiesInput label="Largeur:"
                    valueFromReduxStore={largeur}
                    onClickDispatchToLeftAsideControllersReducer="MODIFIER_LARGEUR"

                    leftIcon={<UnfoldLess color="error"     style={{ transform: 'rotate(90deg)' }}/>}
                    rightIcon={<UnfoldMore color="success"  style={{ transform: 'rotate(90deg)' }}/>}
                />

                <ModifyPropertiesInput label="Epaisseur:"
                    valueFromReduxStore={epaisseur}
                    onClickDispatchToLeftAsideControllersReducer="MODIFIER_EPAISSEUR"

                    leftIcon={<LineWeight color="error" style={{ transform: 'rotate(180deg)' }}/>}
                    rightIcon={<LineWeight color="success"/>}
                />

                <ModifyPropertiesInput label="Rotation:"
                    valueFromReduxStore={epaisseur}
                    onClickDispatchToLeftAsideControllersReducer="MODIFIER_ROTATION"

                    leftIcon={<Loop color="error" />}
                    rightIcon={<Autorenew color="success"/>}
                />
            </div>}
            

        </div>
    )
}