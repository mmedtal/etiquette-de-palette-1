import { ArrowDownward, ArrowUpward, Autorenew, Loop } from "@mui/icons-material";
import ModifyPropertiesInput from "../../helpers/ModifyPropertiesInput";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function TextControls(props){


    const {hauteur,largeur,positionX,positionY,epaisseur,rotation,
        paletteHauteur,paletteLargeur,tailleDePolice,niveauDeGras} = useSelector(state=>state.leftAsideControllersReducer)


    
    const [elementXPosition,setElementXPosition]=useState(positionX)

    const [leftAsidePositionX,setLeftAsidePositionX]= useState("")

    useEffect(()=>{
        setLeftAsidePositionX(positionX)
    },[])
    useEffect(()=>{
        setLeftAsidePositionX(positionX)
    },[positionX])

    return(
        <>
            <ModifyPropertiesInput label="Position X:"
                    valueFromReduxStore={positionX}
                    onClickDispatchToLeftAsideControllersReducer="MODIFIER_POSITION_X"
                    leftIcon={<ArrowDownward color="error" style={{ transform: 'rotate(90deg)' }}/>}
                    rightIcon={<ArrowUpward color="success"style={{ transform: 'rotate(90deg)' }}/>}
                />

            <ModifyPropertiesInput label="Position Y:"
                    valueFromReduxStore={positionY}
                    onClickDispatchToLeftAsideControllersReducer="MODIFIER_POSITION_Y"
                    rightIcon={<ArrowDownward color="error" />}
                    leftIcon={<ArrowUpward color="success"/>}
                />

            <ModifyPropertiesInput label="Rotation en deg:"
                    valueFromReduxStore={rotation}
                    onClickDispatchToLeftAsideControllersReducer="MODIFIER_ROTATION"
                    //step={0.1}
                    leftIcon={<Loop color="error" />}
                    rightIcon={<Autorenew color="success"/>}
                />

            <ModifyPropertiesInput label="Taille de la police en pixels:"
                    valueFromReduxStore={tailleDePolice}
                    onClickDispatchToLeftAsideControllersReducer="MODIFIER_TAILLE_POLICE"
                    step={0.1}
                    leftIcon={<ArrowDownward color="error" />}
                    rightIcon={<ArrowUpward color="success"/>}
                />        
        </>
    )
}