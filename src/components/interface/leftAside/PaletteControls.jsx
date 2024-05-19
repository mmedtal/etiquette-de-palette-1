import { UnfoldLess, UnfoldMore } from "@mui/icons-material"
import { useSelector } from "react-redux"
import ModifyPropertiesInput from "../../helpers/ModifyPropertiesInput"
import { MenuItem, Select, Tooltip } from "@mui/material"
import { useEffect, useState } from "react"

export default function PaletteControls(props){




    const {paletteHauteur,paletteLargeur,resolutionInDpi} = useSelector(state=>state.leftAsideControllersReducer)

    const [printerResolution,setPrinterResolution] = useState(resolutionInDpi+"dpi")


    

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
    return(
        <>
            <div className="flex">
                <ModifyPropertiesInput label="Résolution en :"
                    inputValueAlign="left"
                    valueFromReduxStore={parseInt(printerResolution)}
                    onClickDispatchToLeftAsideControllersReducer="AFFECTER_PALETTE_RESOLUTION"
                    //step={printerResolution[printerResolution.length-1]=="m"?0.1:1}
                    step={1}
                    leftIcon={<UnfoldLess color="error"     />}
                    rightIcon={<UnfoldMore color="success"  />}
                    />
                <Select defaultValue={"dpi"} variant="standard" className="ml-1">
                    <MenuItem value={"dpmm"}onClick={getPrinterResolutionInDpmm} >dpmm</MenuItem>
                    <MenuItem value={"dpi"} onClick={getPrinterResolutionInDpi}>dpi</MenuItem>
                </Select>
            </div>
            <ModifyPropertiesInput label="Hauteur palette en mm:"
                step={1}
                inputValueAlign="center"
                valueFromReduxStore={paletteHauteur}
                onClickDispatchToLeftAsideControllersReducer="AFFECTER_PALETTE_HAUTEUR"

                leftIcon={<UnfoldLess color="error"     />}
                rightIcon={<UnfoldMore color="success"  />}
                />

            <ModifyPropertiesInput label="Largeur palette en mm:"
                step={1}
                inputValueAlign="center"    
                valueFromReduxStore={paletteLargeur}
                onClickDispatchToLeftAsideControllersReducer="AFFECTER_PALETTE_LARGEUR"

                leftIcon={<UnfoldLess color="error"     style={{ transform: 'rotate(90deg)' }}/>}
                rightIcon={<UnfoldMore color="success"  style={{ transform: 'rotate(90deg)' }}/>}
            />  


            <div className="font-sans italic font-normal text-center text-lg px-2 
                text-black bg-gray-50 pt-4 mt-2"
                style={{fontSize:"140%"}}>
               Les valeurs en-dessus doivent correspondre
               aux valeurs <strong>configurés</strong> sur votre imprimante.
                 
            </div> 
        </>            
    )
}