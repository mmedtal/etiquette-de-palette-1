import { Card, CardContent, CardHeader, TextField } from "@mui/material";
import PaletteWorkZone from "./PaletteWorkZone";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function Main(props){

    

    //const {:ht,largeur:lg} = useSelector(state=>state.leftAsideControllersReducer)

    //const [hauteur,setHauteur]=useState(useSelector(state=>state.leftAsideControllersReducer.hauteur))
    //const [largeur,setLargeur]=useState(useSelector(state=>state.leftAsideControllersReducer.largeur))

    const dispatch = useDispatch()
    

    const [hauteur,setHauteur] = useState(450)
    const [largeur,setLargeur] = useState(600)

    const hauteurControlledFromLeftAside = useSelector(state=>state.leftAsideControllersReducer.hauteur)
    const largeurControlledFromLeftAside = useSelector(state=>state.leftAsideControllersReducer.largeur)
    

    useEffect(()=>{
        dispatch({type:"AFFECTER_PALETTE_HAUTEUR",payload:hauteur})
        dispatch({type:"AFFECTER_PALETTE_LARGEUR",payload:largeur})
    },[])


    
    
    useEffect(()=>{
        //console.log("i changed")
        setHauteur(hauteurControlledFromLeftAside)
        //console.log("hauteur ",hauteur)
    },[hauteurControlledFromLeftAside])

    useEffect(()=>{
        //console.log("i changed")
        setLargeur(largeurControlledFromLeftAside)
        //console.log("hauteur ",hauteur)
    },[largeurControlledFromLeftAside])
    /*
    useEffect(()=>{
        setHauteur(hauteur+hauteurControlledFromLeftAside)
        console.log("hauteurControlledFromLeftAside",hauteurControlledFromLeftAside)
    },[hauteurControlledFromLeftAside])

    useEffect(()=>{
        setLargeur(largeur+largeurControlledFromLeftAside)
    },[largeurControlledFromLeftAside])
    */
    return(
        <div className="flex-col">
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
                <PaletteWorkZone height={hauteur+450} width={largeur+600}/>
            </div>
        </div>
    )
}