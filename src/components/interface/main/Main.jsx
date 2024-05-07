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
    

    
    
    // useEffect(()=>{
    //     //console.log("i changed")
    //     setHauteur(hauteurControlledFromLeftAside)
    //     //console.log("hauteur ",hauteur)
    // },[hauteurControlledFromLeftAside])

    // useEffect(()=>{
    //     //console.log("i changed")
    //     setLargeur(largeurControlledFromLeftAside)
    //     //console.log("hauteur ",hauteur)
    // },[largeurControlledFromLeftAside])
    /*
    useEffect(()=>{
        setHauteur(hauteur+hauteurControlledFromLeftAside)
        console.log("hauteurControlledFromLeftAside",hauteurControlledFromLeftAside)
    },[hauteurControlledFromLeftAside])

    useEffect(()=>{
        setLargeur(largeur+largeurControlledFromLeftAside)
    },[largeurControlledFromLeftAside])
    */

    function handleMainComponentClick(){
        dispatch({type:"SET_LEFT_ASIDE_CLICKED",payload:false})
    }
    
    return(
        <div className="flex-col"  
            onClick={handleMainComponentClick}
        >
        {/* <button onClick={()=>console.log("hauteur ",hauteur)}>ccc</button> */}

            <div className="header h-10">

            </div>
            {/* <Card variant="outlined" className="w-5/6 h-96" elevation={12}>
                <CardHeader title="Etiquette Test" className="text-center"/>                    
                <hr />
                <CardContent>
                    <TextField variant="standard"/>
                    <TextField variant="standard" style={{marginLeft:"-20px"}}/>
                    <div className="flex justify-around">
                        <div>
                            zone text 1
                        </div>

                        <div>
                            zone text 2
                        </div>
                    </div>
                </CardContent>
                <hr />
                <br />
                <br />
                <br />
                <div className="text-center">
                    le reste..
                </div>
            </Card> */}
            <div className="flex justify-center">
                {/* <PaletteWorkZone height={hauteurControlledFromLeftAside+450} width={largeurControlledFromLeftAside+600}/> hadi ça passe */}
                <PaletteWorkZone height={hauteurPaletteControlledFromLeftAside} width={largeurPaletteControlledFromLeftAside}/>
            </div>
        </div>
    )
}