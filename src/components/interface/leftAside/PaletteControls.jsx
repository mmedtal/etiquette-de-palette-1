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
        //setPrinterResolution()
        if(printerResolution[printerResolution.length-1]=="i"){
            //console.log("iiiiiiiiiiiii")
            setPrinterResolution((parseInt(printerResolution)/25)+"dpmm")
        }
        //if resolution in dpmm then 
        if(printerResolution[printerResolution.length-1]=="m"){
            //console.log("mmmmmmmmm")
            setPrinterResolution(parseInt(printerResolution)+"dpmm")
        }
    }
    function getPrinterResolutionInDpi(){
        if(printerResolution[printerResolution.length-1]=="i"){
            //console.log("iiiiiiiiiiiii")
            setPrinterResolution(parseInt(printerResolution)+"dpi")
        }
        //if resolution in dpmm then 
        if(printerResolution[printerResolution.length-1]=="m"){
            //console.log("mmmmmmmmm")
            setPrinterResolution((parseInt(printerResolution)*25)+"dpi")
        }
    }

    //this is just some boilerplate to sync between store and state, it mustn't be like this
    useEffect(()=>{
        if(printerResolution[printerResolution.length-1]=="i"){
            setPrinterResolution(resolutionInDpi+"dpi")
        }
        if(printerResolution[printerResolution.length-1]=="m"){
            setPrinterResolution(resolutionInDpi+"dpmm")
        }else{//because resolution in dpi has no unit from redux store
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
                    //step={printerResolution[printerResolution.length-1]=="m"?0.1:1}
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
            {/* <div className="flex"> */}
                {/* <ModifyPropertiesInput label="Hauteur palette en mm :"
                    //step={1}
                    step={milimitersToPixelsConverter(screenResolutionInPpi,1)}
                    inputValueAlign="center"
                    valueFromReduxStore={parseFloat(labelHeight)}
                    //valueFromReduxStore={pixelsToMilimitersConverter(screenResolutionInPpi,paletteHauteur)}
                    //valueFromReduxStore={pixelsToMilimitersConverter(screenResolutionInPpi,paletteHauteur)}//dir lfct hna


                    onClickDispatchToLeftAsideControllersReducer="AFFECTER_PALETTE_HAUTEUR"
                    //payload={milimitersToPixelsConverter(screenResolutionInPpi,1)}

                    screenResolutionInPpiFromReduxStore={screenResolutionInPpi}

                    leftIcon={  <UnfoldLess color="error"     />}
                    rightIcon={   <UnfoldMore color="success"  />}
                    //valueFromReduxStore={paletteHauteurConvertedToMilimiters}
                    /> */}
                {/* <Select defaultValue={"px"} variant="standard" className="ml-1">
                    <MenuItem value={"mm"}onClick={getLabelHeightInMilimiters} >mm</MenuItem>
                    <MenuItem value={"px"} onClick={getPrinterResolutionInDpi}>px</MenuItem>
                </Select>

            </div> */}
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

            {/* <ModifyPropertiesInput label="Largeur palette en mm :"
                //step={1}
                step={milimitersToPixelsConverter(screenResolutionInPpi,1)}

                inputValueAlign="center"    
                valueFromReduxStore={paletteLargeur}
                //valueFromReduxStore={pixelsToMilimitersConverter(screenResolutionInPpi,paletteLargeur)}

                screenResolutionInPpiFromReduxStore={screenResolutionInPpi}
                
                onClickDispatchToLeftAsideControllersReducer="AFFECTER_PALETTE_LARGEUR"
                

                

                leftIcon={<UnfoldLess color="error"     style={{ transform: 'rotate(90deg)' }}/>}
                rightIcon={<UnfoldMore color="success"  style={{ transform: 'rotate(90deg)' }}/>}
                
                
                //valueFromReduxStore={paletteLargeurConvertedToMilimiters}
            />   */}

            <div className="flex">
                <ModifyPropertiesInput label="Résolution de l'écran :"
                    inputValueAlign="left"
                    valueFromReduxStore={parseInt(screenResolutionInPpi)}
                    onClickDispatchToLeftAsideControllersReducer="MODIFIER_RESOLUTION_ECRAN_PPI"
                    //step={printerResolution[printerResolution.length-1]=="m"?0.1:1}
                    step={1}
                    leftIcon={<UnfoldLess color="error"     />}
                    rightIcon={<UnfoldMore color="success"  />}
                    />
                <Select defaultValue={"ppi"} variant="standard" className="ml-1">
                    <MenuItem value={"ppi"}>PPI</MenuItem>
                    {/* <MenuItem value={"dpi"} onClick={getPrinterResolutionInDpi}>dpi</MenuItem> */}
                </Select>
            </div> 


            <div className="font-sans italic font-normal text-center text-xs  
                text-black bg-gray-50 pt-4 mt-2"
                style={{fontSize:"110%"}}>
                    Pour une aperçu correcte du résultat de sortie, les <strong>valeurs</strong> doivent 
                    correspondre à ceux configurés sur votre imprimante.
                    <br />
                    Le <strong>PPI</strong> est le nombre de pixels par pouce de votre écran.

               {/* Les valeurs en-dessus doivent correspondre
               aux valeurs <strong>configurés</strong> sur votre imprimante. */}
                 
            </div> 
        </>            
    )
}