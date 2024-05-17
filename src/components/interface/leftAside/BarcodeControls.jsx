import { ArrowDownward, ArrowUpward, Autorenew, Loop } from "@mui/icons-material";
import ModifyPropertiesInput from "../../helpers/ModifyPropertiesInput";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CodeBarChooser from "../../helpers/CodeBarChooser";

export default function BarcodeControls(props){


    const {hauteur,largeur,positionX,positionY,epaisseur,rotation,paletteHauteur,paletteLargeur,tailleDePolice} = useSelector(state=>state.leftAsideControllersReducer)


    
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

                    leftIcon={<Loop color="error" />}
                    rightIcon={<Autorenew color="success"/>}
                />

            <ModifyPropertiesInput label="Taille de la police en px:"
                    valueFromReduxStore={tailleDePolice}
                    onClickDispatchToLeftAsideControllersReducer="MODIFIER_TAILLE_POLICE"

                    leftIcon={<ArrowDownward color="error" />}
                    rightIcon={<ArrowUpward color="success"/>}
                />
        
            <CodeBarChooser 
                symbologies={["Code 39","Code 128"]}/>
        
        
        </>
    )
}