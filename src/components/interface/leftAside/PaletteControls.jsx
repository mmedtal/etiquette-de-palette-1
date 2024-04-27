import { UnfoldLess, UnfoldMore } from "@mui/icons-material"
import { useSelector } from "react-redux"
import ModifyPropertiesInput from "../../helpers/ModifyPropertiesInput"

export default function PaletteControls(props){




    const {paletteHauteur,paletteLargeur} = useSelector(state=>state.leftAsideControllersReducer)

    return(
        <>
            <ModifyPropertiesInput label="Hauteur:"
                valueFromReduxStore={paletteHauteur}
                onClickDispatchToLeftAsideControllersReducer="AFFECTER_PALETTE_HAUTEUR"

                leftIcon={<UnfoldLess color="error"     />}
                rightIcon={<UnfoldMore color="success"  />}
                />
            
            <ModifyPropertiesInput label="Largeur:"
                valueFromReduxStore={paletteLargeur}
                onClickDispatchToLeftAsideControllersReducer="AFFECTER_PALETTE_LARGEUR"

                leftIcon={<UnfoldLess color="error"     style={{ transform: 'rotate(90deg)' }}/>}
                rightIcon={<UnfoldMore color="success"  style={{ transform: 'rotate(90deg)' }}/>}
            />   
        </>            
    )
}