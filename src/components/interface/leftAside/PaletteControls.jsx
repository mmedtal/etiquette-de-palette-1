import { UnfoldLess, UnfoldMore } from "@mui/icons-material"
import { useSelector } from "react-redux"
import ModifyPropertiesInput from "../../helpers/ModifyPropertiesInput"
import { MenuItem, Select, Tooltip } from "@mui/material"
import { useEffect, useState } from "react"
import { milimitersToPixelsConverter,pixelsToMilimitersConverter } from "./converterFunctions"
import LabelSizeInput from "./LabelSizeInput"

export default function PaletteControls(props){




    const {paletteHauteur,paletteLargeur,resolutionInDpi,screenResolutionInPpi} = useSelector(state=>state.leftAsideControllersReducer)

    const [printerResolution,setPrinterResolution] = useState(resolutionInDpi+"dpi")

    

    const [labelHeight,setLabelHeight]=
    useState(pixelsToMilimitersConverter(screenResolutionInPpi,paletteHauteur))

    
    /*function getLabelHeightInMilimiters(){
        if(labelHeight[labelHeight.length-1]=="x"){
            setLabelHeight(pixelsToMilimitersConverter(screenResolutionInPpi,paletteHauteur))
        }
        if(labelHeight[labelHeight.length-1]=="m"){
            setLabelHeight(labelHeight+"mm")
        }
    }*/
    function getLabelHeightInMilimiters(){
        if(labelHeight[labelHeight.length-1]=="x"){
            setLabelHeight(pixelsToMilimitersConverter(screenResolutionInPpi,paletteHauteur))
        }
        if(labelHeight[labelHeight.length-1]=="m"){
            setLabelHeight(labelHeight+"mm")
        }
    }

    /*
    function getLabelHeightInPixels(){
        if(labelHeight[labelHeight.length-1]=="m"){
            setLabelHeight(milimitersToPixelsConverter(screenResolutionInPpi,paletteHauteur))
        }
        if(labelHeight[labelHeight.length-1]=="x"){
            setLabelHeight(labelHeight+"px")
        }
    }*/
    

    function getPrinterResolutionInDpmm(){
        if(printerResolution[printerResolution.length-1]=="i"){
            setPrinterResolution((parseInt(printerResolution)/25)+"dpmm")
        }
        if(printerResolution[printerResolution.length-1]=="m"){
            setPrinterResolution(parseInt(printerResolution)+"dpmm")
        }
    }
    function getPrinterResolutionInDpi(){
        if(printerResolution[printerResolution.length-1]=="i"){
            setPrinterResolution(parseInt(printerResolution)+"dpi")
        }
        if(printerResolution[printerResolution.length-1]=="m"){
            setPrinterResolution((parseInt(printerResolution)*25)+"dpi")
        }
    }

    useEffect(()=>{
        if(printerResolution[printerResolution.length-1]=="i"){
            setPrinterResolution(resolutionInDpi+"dpi")
        }
        if(printerResolution[printerResolution.length-1]=="m"){
            setPrinterResolution(resolutionInDpi+"dpmm")
            setPrinterResolution(resolutionInDpi+"dpi")
        }
    },[resolutionInDpi])


    const [paletteHauteurConvertedToMilimiters,setPaletteHauteurConvertedToMilimiters]=useState(paletteHauteur)
    useEffect(()=>{
        setPaletteHauteurConvertedToMilimiters(pixelsToMilimitersConverter(screenResolutionInPpi,paletteHauteur))
    },[paletteHauteur])

    const [paletteLargeurConvertedToMilimiters,setPaletteLargeurConvertedToMilimiters]=useState(paletteLargeur)
    useEffect(()=>{
        setPaletteLargeurConvertedToMilimiters(pixelsToMilimitersConverter(screenResolutionInPpi,paletteLargeur))
    },[paletteLargeur])

    return(
        <>
            <div className="flex">
                <ModifyPropertiesInput label="Résolution impr. en:" disabled={true}
                    inputValueAlign="left"
                    valueFromReduxStore={parseInt(printerResolution)}
                    onClickDispatchToLeftAsideControllersReducer="AFFECTER_PALETTE_RESOLUTION"
                    step={1}
                    leftIcon={<UnfoldLess 
                        //color="error"     
                        color="inherit"  
                    />}
                    rightIcon={<UnfoldMore 
                        color="inherit"
                        
                        //color="success"
                        
                        />}
                    />
                <Select defaultValue={"dpi"} variant="standard" className="ml-1">
                    <MenuItem value={"dpmm"}onClick={getPrinterResolutionInDpmm} >dpmm</MenuItem>
                    <MenuItem value={"dpi"} onClick={getPrinterResolutionInDpi}>dpi</MenuItem>
                </Select>
            </div>
            
            <LabelSizeInput
                actionToDispatch="AFFECTER_PALETTE_HAUTEUR"
                valueFromReduxStoreInPixels={paletteHauteur}
                label="Hauteur palette en mm :"
            />

            <LabelSizeInput
                actionToDispatch="AFFECTER_PALETTE_LARGEUR"
                valueFromReduxStoreInPixels={paletteLargeur}
                label="Largeur palette en mm :"
            />

         

            <div className="flex">
                <ModifyPropertiesInput label="Résolution de l'écran :"
                    inputValueAlign="left"
                    valueFromReduxStore={parseInt(screenResolutionInPpi)}
                    onClickDispatchToLeftAsideControllersReducer="MODIFIER_RESOLUTION_ECRAN_PPI"
                    step={1}
                    leftIcon={<UnfoldLess color="error"     />}
                    rightIcon={<UnfoldMore color="success"  />}
                    />
                <Select defaultValue={"ppi"} variant="standard" className="ml-1">
                    <MenuItem value={"ppi"}>PPI</MenuItem>
                </Select>
            </div> 


            <div className="font-sans italic font-normal text-center text-xs  
                text-black bg-gray-50 pt-4 mt-2"
                style={{fontSize:"110%"}}>
                    Pour une aperçu correcte du résultat de sortie, les <strong>valeurs</strong> doivent 
                    correspondre à ceux configurés sur votre imprimante.
                    <br />
                    Le <strong>PPI</strong> est le nombre de pixels par pouce de votre écran.

                 
            </div> 
        </>            
    )
}