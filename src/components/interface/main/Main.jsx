import { Card, CardContent, CardHeader, TextField } from "@mui/material";
import PaletteWorkZone from "./PaletteWorkZone";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function Main(props){

    

    //const {:ht,largeur:lg} = useSelector(state=>state.leftAsideControllersReducer)

    const [hauteur,setHauteur]=useState(useSelector(state=>state.leftAsideControllersReducer.hauteur))
    const [largeur,setLargeur]=useState(useSelector(state=>state.leftAsideControllersReducer.largeur))

    const dispatch = useDispatch()
    let [controlMount,setControlMount]=useState(1)

    const [hauteurPalette,setHauteurPalette] = useState(450)
    const [largeurPalette,setLargeurPalette] = useState(600)

    

    useEffect(()=>{
        if(controlMount==1){
            dispatch({type:"AFFECTER_PALETTE_HAUTEUR",payload:hauteurPalette})
            dispatch({type:"AFFECTER_PALETTE_LARGEUR",payload:largeurPalette})
        }
        controlMount=2
    },[])

    const hauteurPaletteControlledFromLeftAside = useSelector(state=>state.leftAsideControllersReducer.paletteHauteur)
    const largeurPaletteControlledFromLeftAside = useSelector(state=>state.leftAsideControllersReducer.paletteLargeur)
    

    function handleMainComponentClick(){
        dispatch({type:"SET_LEFT_ASIDE_CLICKED",payload:false})
    }
    
    return(
        <div className="flex-col"  
            onClick={handleMainComponentClick}
        >

            <div className="header h-10">

            </div>
            <div className="flex justify-center">
                <PaletteWorkZone height={hauteurPaletteControlledFromLeftAside} width={largeurPaletteControlledFromLeftAside}/>
            </div>
        </div>
    )
}