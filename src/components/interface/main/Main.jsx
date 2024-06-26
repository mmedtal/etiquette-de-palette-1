import { Card, CardContent, CardHeader, Tab, Tabs, TextField } from "@mui/material";
import PaletteWorkZone from "./PaletteWorkZone";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import ZebraCodeViewer from "./ZebraCodeViewer";

export default function Main(props){

    const [hauteur,setHauteur]=useState(useSelector(state=>state.leftAsideControllersReducer.hauteur))
    const [largeur,setLargeur]=useState(useSelector(state=>state.leftAsideControllersReducer.largeur))

    const dispatch = useDispatch()
    let [controlMount,setControlMount]=useState(1)

 

    const [resolutionPalette,setResolutionPalette] = useState(200)
    

  

    const hauteurPaletteControlledFromLeftAside = useSelector(state=>state.leftAsideControllersReducer.paletteHauteur)
    const largeurPaletteControlledFromLeftAside = useSelector(state=>state.leftAsideControllersReducer.paletteLargeur)
    

    function handleMainComponentClick(){
        dispatch({type:"SET_LEFT_ASIDE_CLICKED",payload:false})
    }

    const [selectedTab,setSelectedTab]= useState(0)
    


    const generatedZebraCode = useSelector(state=>state.generatedZebraCodeReducer.generatedZebraCodeInstructions)


    const [informUserOfNewZebraCode,setInformUserOfNewZebraCode]=useState(false)
    useEffect(()=>{
        setInformUserOfNewZebraCode(true)
    },[generatedZebraCode])

    return(
        <div className="flex-col"  
            onClick={handleMainComponentClick}>

            <div className="header h-10">

            </div>
            <div  style={{display:"flex",flexDirection:"column", alignItems:"center"}} className="">
                <div className="flex -mt-8 " 
                >
                    <Tabs value={selectedTab} >
                        <Tab label="Etiquette"  onClick={()=>setSelectedTab(0)} style={{fontFamily:"Segoe UI"}}/>
                        <Tab label={informUserOfNewZebraCode?`Code Zebra *`:"Code Zebra"} onClick={()=>{setSelectedTab(1);setInformUserOfNewZebraCode(false)}}
                        style={{fontFamily:"Segoe UI"}}/>
                    </Tabs>
                </div>
                <div className="flex justify-center"  style={{display:selectedTab==0?"flex":"none"
                    
                }}>
                    <PaletteWorkZone selectedTab={selectedTab} 
                        height={ `${hauteurPaletteControlledFromLeftAside}px`} 
                        width={`${largeurPaletteControlledFromLeftAside}px`}
                        />
                </div>   

                <div className="flex justify-center" 
                    style={{display:selectedTab==1?"flex":"none",
                 
                    }} >
                    <ZebraCodeViewer selectedTab={selectedTab} 
                        height={ `${hauteurPaletteControlledFromLeftAside}px`} 
                        width={`${largeurPaletteControlledFromLeftAside}px`}
                        />
                </div>  
            </div>
        </div>
    )
}