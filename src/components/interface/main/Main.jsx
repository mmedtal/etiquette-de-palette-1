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

    const [selectedTab,setSelectedTab]= useState(0)
    
    useEffect(()=>{
        console.log("selected tab : ",selectedTab)
        console.log("selectedTab==0 : ",selectedTab==0)
    },[selectedTab])
    return(
        <div className="flex-col"  
            onClick={handleMainComponentClick}>

            <div className="header h-10">

            </div>
            <div  style={{display:"flex",flexDirection:"column", alignItems:"center"}}>
                <div className="flex -mt-8" style={{width:largeurPaletteControlledFromLeftAside}}>
                    <Tabs value={selectedTab}>
                        <Tab label="Palette"  onClick={()=>setSelectedTab(0)}/>
                        <Tab label="Code Zebra" onClick={()=>setSelectedTab(1)}/>
                    </Tabs>
                </div>
                {/* visibility:selectedTab==1?"visible":"hidden" avant y'avait ça, ma3rftch wach hiya plus cheap
                li anaho makandirouch render lkolchi ymkn*/}
                <div className="flex justify-center"  style={{display:selectedTab==0?"flex":"none"}}>
                    <PaletteWorkZone selectedTab={selectedTab} height={hauteurPaletteControlledFromLeftAside} width={largeurPaletteControlledFromLeftAside}/>
                </div>   

                <div className="flex justify-center" 
                    style={{display:selectedTab==1?"flex":"none",width:largeurPaletteControlledFromLeftAside,height:hauteurPaletteControlledFromLeftAside}} >
                    <ZebraCodeViewer selectedTab={selectedTab} height={hauteurPaletteControlledFromLeftAside} width={largeurPaletteControlledFromLeftAside}/>
                </div>  
            </div>
        </div>
    )
}