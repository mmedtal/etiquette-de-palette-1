import { ArrowDownward, ArrowUpward, Autorenew, Loop } from "@mui/icons-material";
import ModifyPropertiesInput from "../../helpers/ModifyPropertiesInput";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function FormsControls(props){


    const {hauteur,largeur,positionX,positionY,epaisseur,rotation,longeur,paletteHauteur,paletteLargeur,tailleDePolice} = useSelector(state=>state.leftAsideControllersReducer)


    
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


            {rotation==0&&<ModifyPropertiesInput label="Largeur:"
                    valueFromReduxStore={largeur}
                    onClickDispatchToLeftAsideControllersReducer="MODIFIER_LARGEUR"

                    leftIcon={<ArrowDownward color="error" />}
                    rightIcon={<ArrowUpward color="success"/>}
                />}

            {rotation==90&&<ModifyPropertiesInput label="Longeur:"
                    valueFromReduxStore={longeur}
                    onClickDispatchToLeftAsideControllersReducer="MODIFIER_LONGUEUR"

                    leftIcon={<ArrowDownward color="error" />}
                    rightIcon={<ArrowUpward color="success"/>}
                />}



            <ModifyPropertiesInput label="Epaisseur:"
                    valueFromReduxStore={epaisseur}
                    onClickDispatchToLeftAsideControllersReducer="MODIFIER_EPAISSEUR"

                    leftIcon={<ArrowDownward color="error" />}
                    rightIcon={<ArrowUpward color="success"/>}
                />

           
        
        
        
        
        </>
    )
}